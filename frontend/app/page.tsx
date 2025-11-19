'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './page.module.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Home() {
  const [apiKey, setApiKey] = useState('')
  const [developerMessage, setDeveloperMessage] = useState('You are a helpful AI assistant.')
  const [userMessage, setUserMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [model, setModel] = useState('gpt-4.1-mini')
  const [backendStatus, setBackendStatus] = useState<'checking' | 'online' | 'offline' | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Check backend connection on mount
  useEffect(() => {
    const checkBackend = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
        (typeof window !== 'undefined' && window.location.hostname === 'localhost' 
          ? 'http://localhost:8000' 
          : '')
      const healthEndpoint = apiUrl ? `${apiUrl}/api/health` : '/api/health'
      
      setBackendStatus('checking')
      try {
        // Create an AbortController for timeout
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 3000) // 3 second timeout
        
        const response = await fetch(healthEndpoint, { 
          method: 'GET',
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        
        if (response.ok) {
          setBackendStatus('online')
        } else {
          setBackendStatus('offline')
        }
      } catch {
        setBackendStatus('offline')
      }
    }
    
    checkBackend()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!apiKey.trim()) {
      setError('Please enter your OpenAI API key')
      return
    }

    if (!userMessage.trim()) {
      setError('Please enter a message')
      return
    }

    setError(null)
    setIsLoading(true)
    
    // Add user message to chat
    const newUserMessage: Message = { role: 'user', content: userMessage }
    setMessages(prev => [...prev, newUserMessage])
    setUserMessage('')

    try {
      // Determine API URL based on environment
      // In production (Vercel), use relative URL; in development, use localhost
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
        (typeof window !== 'undefined' && window.location.hostname === 'localhost' 
          ? 'http://localhost:8000' 
          : '')
      
      const apiEndpoint = apiUrl ? `${apiUrl}/api/chat` : '/api/chat'
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          developer_message: developerMessage,
          user_message: newUserMessage.content,
          model: model,
          api_key: apiKey,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Failed to get response from API')
      }

      // Handle streaming response
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      
      if (!reader) {
        throw new Error('No response body')
      }

      // Add assistant message placeholder
      // Use functional update to get the correct index after user message is added
      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      let accumulatedContent = ''
      
      while (true) {
        const { done, value } = await reader.read()
        
        if (done) break
        
        const chunk = decoder.decode(value, { stream: true })
        accumulatedContent += chunk
        
        // Update the assistant message with accumulated content
        // The assistant message is always the last one we just added
        setMessages(prev => {
          const updated = [...prev]
          const lastIndex = updated.length - 1
          // Only update if the last message is an assistant message
          if (lastIndex >= 0 && updated[lastIndex].role === 'assistant') {
            updated[lastIndex] = { role: 'assistant', content: accumulatedContent }
          }
          return updated
        })
      }
    } catch (err) {
      let errorMessage = 'An error occurred'
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        // Network error - backend likely not running or unreachable
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
          (typeof window !== 'undefined' && window.location.hostname === 'localhost' 
            ? 'http://localhost:8000' 
            : '')
        errorMessage = `Cannot connect to backend API. Please ensure the backend is running at ${apiUrl || '/api'}. If running locally, start the backend with: uv run uvicorn api.app:app --reload`
      } else if (err instanceof Error) {
        errorMessage = err.message
      }
      
      setError(errorMessage)
      // Remove the assistant message placeholder if error occurred
      setMessages(prev => prev.slice(0, -1))
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearChat = () => {
    setMessages([])
    setError(null)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>✨ AI Chat Application ✨</h1>
        
        <div className={styles.settings}>
          <div className={styles.settingGroup}>
            <label htmlFor="api-key" className={styles.label}>
              OpenAI API Key
            </label>
            <input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your OpenAI API key"
              className={styles.input}
            />
          </div>

          <div className={styles.settingGroup}>
            <label htmlFor="model" className={styles.label}>
              Model
            </label>
            <select
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className={styles.select}
            >
              <option value="gpt-4.1-mini">gpt-4.1-mini</option>
              <option value="gpt-4">gpt-4</option>
              <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
            </select>
          </div>

          <div className={styles.settingGroup}>
            <label htmlFor="developer-message" className={styles.label}>
              System/Developer Message
            </label>
            <textarea
              id="developer-message"
              value={developerMessage}
              onChange={(e) => setDeveloperMessage(e.target.value)}
              placeholder="Enter system message (e.g., 'You are a helpful assistant')"
              className={styles.textarea}
              rows={3}
            />
          </div>
        </div>

        {backendStatus === 'offline' && (
          <div className={styles.warning}>
            ⚠️ Backend API appears to be offline. Make sure the backend is running.
            {typeof window !== 'undefined' && window.location.hostname === 'localhost' && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                Start it with: <code style={{ background: 'rgba(255,255,255,0.5)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>uv run uvicorn api.app:app --reload</code>
              </div>
            )}
          </div>
        )}
        
        {error && (
          <div className={styles.error}>
            ⚠️ {error}
          </div>
        )}

        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h2>Chat</h2>
            {messages.length > 0 && (
              <button onClick={handleClearChat} className={styles.clearButton}>
                Clear Chat
              </button>
            )}
          </div>
          
          <div className={styles.messages}>
            {messages.length === 0 ? (
              <div className={styles.emptyState}>
                <p>👋 Start a conversation by typing a message below!</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${
                    message.role === 'user' ? styles.userMessage : styles.assistantMessage
                  }`}
                >
                  <div className={styles.messageRole}>
                    {message.role === 'user' ? '👤 You' : '🤖 Assistant'}
                  </div>
                  <div className={styles.messageContent}>
                    {message.content || (isLoading && index === messages.length - 1 ? '...' : '')}
                  </div>
                </div>
              ))
            )}
            {isLoading && messages.length > 0 && messages[messages.length - 1]?.role !== 'assistant' && (
              <div className={`${styles.message} ${styles.assistantMessage}`}>
                <div className={styles.messageRole}>🤖 Assistant</div>
                <div className={styles.messageContent}>Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message here..."
                className={styles.messageInput}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !userMessage.trim() || !apiKey.trim()}
                className={styles.sendButton}
              >
                {isLoading ? '⏳' : '📤'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}


