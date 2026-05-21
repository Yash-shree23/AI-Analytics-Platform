from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home API
@app.get("/")
def home():
    return {
        "message": "AI Analytics Backend Running"
    }

# Upload API
@app.post("/upload")
async def upload(file: UploadFile = File(...)):

    df = pd.read_csv(file.file)

    return {
        "columns": list(df.columns),
        "total_rows": len(df),
        "total_columns": len(df.columns)
    }