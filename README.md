# AI-Powered Business Analytics Platform

An AI-powered analytics platform that automatically performs:

- Data Analysis
- Visualization
- Smart Dashboard Generation
- AI-Based Business Insights
- Predictive Analytics
- Business Recommendations

This project helps businesses make smart decisions using Generative AI and Data Analytics.

---

# Tech Stack

## Frontend
- React JS
- CSS
- Chart.js

## Backend
- FastAPI
- Python
- Pandas

## AI & ML
- OpenAI / Gemini
- PandasAI
- Scikit-learn

---

# Project Structure

```bash
AI-Analytics-Platform/
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

# Features

- Upload CSV Dataset
- Automatic Data Analysis
- Smart KPI Dashboard
- Data Visualization
- AI Business Insights
- Forecasting
- AI Chat with Data

---

# Development Progress

## Phase 1
- [x] Backend Setup
- [x] File Upload API
- [ ] Frontend Setup
- [ ] Dashboard UI

## Phase 2
- [ ] Data Visualization
- [ ] AI Insights

## Phase 3
- [ ] Forecasting
- [ ] AI Chatbot

---

# Backend Setup

## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Environment

### Windows

```bash
venv\Scripts\activate
```

## Install Packages

```bash
pip install fastapi uvicorn pandas python-multipart
```

## Run Server

```bash
uvicorn app.main:app --reload
```

---

# API Endpoints

## Home API

```http
GET /
```

## Upload Dataset API

```http
POST /upload
```

---

# Author

Yashashree