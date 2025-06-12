// App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import QABox from "./components/QABox";
import QuestionBox from "./components/QuestionBox";

const App = () => {
  const [pdfId, setPdfId] = useState(null);
  const [pdfName, setPdfName] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("https://ai-planet-internship-backend.onrender.com/upload-pdf", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setPdfId(data.id);
      setPdfName(data.filename);
    } catch (error) {
      alert("❌ PDF upload failed.");
    }
  };

  const handleAsk = async (question) => {
    if (!pdfId || !question.trim()) return;

    const userMessage = { sender: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("https://ai-planet-internship-backend.onrender.com/ask-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdf_id: pdfId, question }),
      });

      const data = await res.json();
      const aiMessage = { sender: "ai", text: data.answer };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage = { sender: "ai", text: "❌ Failed to get answer." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar pdfName={pdfName} onUpload={handleUpload} />
      <div className="container mt-4 mb-5">
        <QABox messages={messages} loading={loading} />
      </div>
      <QuestionBox onSend={handleAsk} />
    </>
  );
};

export default App;
