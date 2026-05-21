from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd

app = FastAPI()

# CORS Configuration
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


# Upload & Analyze Dataset API
@app.post("/upload")
async def upload(file: UploadFile = File(...)):

    try:

        # Read CSV File
        df = pd.read_csv(
            file.file,
            encoding='latin1'
        )

        # Basic Information
        total_rows = int(len(df))
        total_columns = int(len(df.columns))

        # Column Names
        columns = list(df.columns)

        # Missing Values
        missing_values = df.isnull().sum().to_dict()

        # Duplicate Rows
        duplicate_rows = int(df.duplicated().sum())

        # Data Types
        data_types = df.dtypes.astype(str).to_dict()

        # Numerical Summary
        numerical_summary = {}

        numerical_columns = df.select_dtypes(
            include=['int64', 'float64']
        ).columns

        for col in numerical_columns:

            numerical_summary[col] = {

                "mean": float(round(df[col].mean(), 2)),

                "median": float(round(df[col].median(), 2)),

                "min": float(round(df[col].min(), 2)),

                "max": float(round(df[col].max(), 2)),

                "std": float(round(df[col].std(), 2))
            }

        # Final Response
        return {

            "columns": columns,

            "total_rows": total_rows,

            "total_columns": total_columns,

            "missing_values": missing_values,

            "duplicate_rows": duplicate_rows,

            "data_types": data_types,

            "numerical_summary": numerical_summary
        }

    except Exception as e:

        return {
            "error": str(e)
        }