from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import AzureOpenAI
import os

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

app = FastAPI()

# CORS so the frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Configure Azure OpenAI client using environment variables
client = AzureOpenAI(
    api_version=os.getenv("AZURE_OPENAI_API_VERSION") or "2024-12-01-preview",
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    if not os.getenv("AZURE_OPENAI_API_KEY"):
        raise HTTPException(status_code=500, detail="AZURE_OPENAI_API_KEY not configured")
    
    if not os.getenv("AZURE_OPENAI_ENDPOINT"):
        raise HTTPException(status_code=500, detail="AZURE_OPENAI_ENDPOINT not configured")

    try:
        user_message = request.message
        # For Azure OpenAI, set the deployment name via env `AZURE_OPENAI_DEPLOYMENT_NAME`.
        deployment_name = os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME") or "gpt-4"

        response = client.chat.completions.create(
            model=deployment_name,
            messages=[
                {"role": "system", "content": "You are a supportive mental coach."},
                {"role": "user", "content": user_message}
            ]
        )
        return {"reply": response.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling Azure OpenAI API: {str(e)}")
