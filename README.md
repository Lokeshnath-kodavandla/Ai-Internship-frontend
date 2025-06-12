# Frontend - AI Planet Internship task

This is the frontend for the AI Planet Internship project that allows users to upload a PDF and ask questions using LLM (Large Language Model). Built with **React.js (Vite)** and **Bootstrap**, this interface is lightweight, responsive, and user-friendly.

## 🚀 Tech Stack
- React.js (with Vite)
- Bootstrap 5

## 📁 Folder Structure

frontend/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── QuestionBox.jsx
│ │ └── QABox.jsx
│ ├── App.jsx
│ └── main.jsx
└── index.html


## 🧩 Component Overview

### 📌 Navbar.jsx
- Handles file input (`<input type="file">`)
- Displays uploaded PDF file name
- Triggers `onUpload(file)` callback

### 📌 QuestionBox.jsx
- Text input for user questions
- Sends question on Enter key or button click
- Clears input after submission

### 📌 QABox.jsx
- Renders Q&A chat history
- Displays questions and answers with icons

### 📌 App.jsx
- Manages `pdfId`, `messages`, `loading` states
- Handles PDF uploads and user questions
- Connects to backend endpoints (`/upload-pdf`, `/ask-question`)

## 🔄 Data Flow

### Upload Flow


### Ask Question Flow
QuestionBox → onSend(question) → POST /ask-question
↓
Displays AI-generated answer in QABox


## 🛠️ Future Enhancements
- Add login/auth system
- Document preview on upload
- Support for multi-PDF chats
- Optimize UI responsiveness further

---
