"use client";

import { useMemo, useState } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || ""; // default to same-origin

const THINKING_PHRASES = [
  "Thinking",
  "Analyzing your message",
  "Composing a thoughtful response",
  "Polishing the final answer"
];

export default function HomePage() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I am your AI mental coach. Share what is on your mind and I will do my best to help."
    }
  ]);

  const canSend = useMemo(() => prompt.trim().length > 0 && !isLoading, [prompt, isLoading]);

  async function sendMessage() {
    const userMessage = prompt.trim();
    if (!userMessage || isLoading) {
      return;
    }

    const updatedMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(updatedMessages);
    setPrompt("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.detail || "Request failed. Please try again.");
      }

      const payload = await response.json();
      setMessages((current) => [
        ...current,
        { role: "assistant", content: payload.reply || "I could not generate a response." }
      ]);
    } catch (requestError) {
      setError(requestError.message || "Failed to contact the API.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleInputKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (canSend) {
        sendMessage();
      }
    }
  }

  return (
    <main className="page">
      <section className="chat-shell">
        <header className="chat-header">
          <p className="eyebrow">AI Engineer Challenge</p>
          <h1>Supportive AI Chat</h1>
          <p className="subtitle">A calm, professional experience built for focused reflection.</p>
        </header>

        <div className="message-list" aria-live="polite">
          {messages.map((message, index) => (
            <article
              key={`${message.role}-${index}`}
              className={`message ${message.role === "user" ? "user" : "assistant"}`}
            >
              <span className="message-role">{message.role === "user" ? "You" : "Coach"}</span>
              <p>{message.content}</p>
            </article>
          ))}

          {isLoading && (
            <article className="message assistant thinking" aria-label="Assistant is thinking">
              <span className="message-role">Coach</span>
              <div className="thinking-wrap">
                {THINKING_PHRASES.map((phrase) => (
                  <span key={phrase} className="thinking-line">
                    {phrase}
                    <span className="dots" />
                  </span>
                ))}
              </div>
            </article>
          )}
        </div>

        {error && <p className="error-banner">{error}</p>}

        <div className="composer">
          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Write your message... (Enter sends, Shift+Enter adds a new line)"
            rows={3}
            disabled={isLoading}
          />
          <button type="button" disabled={!canSend} onClick={sendMessage}>
            {isLoading ? "Waiting..." : "Send"}
          </button>
        </div>
      </section>
    </main>
  );
}
