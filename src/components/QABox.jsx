// QABox.jsx
import React from "react";
import ailogoimage from "../assets/ailogoimage.png"

const QABox = ({ messages, loading }) => {
  const renderIcon = (sender) => {
    if (sender === "user") {
      return (
        <div className="me-3">
          <span
            className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center"
            style={{ width: 32, height: 32, fontWeight: "bold" }}
          >
            Y
          </span>
        </div>
      );
    } else {
      return (
         <div className="me-3">
        <img
          src= {ailogoimage} 
          alt="AI"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      );
    }
  };

  return (
    <>
      {messages.map((msg, index) => (
        <div key={index} className="d-flex mb-3 align-items-start">
          {renderIcon(msg.sender)}
          <div
            className="p-3 rounded"
            style={{
              backgroundColor: msg.sender === "user" ? "#f1f1f1" : "#e0ffe0",
              color: "#000",
              maxWidth: "80%",
              whiteSpace: "pre-wrap",
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {loading && (
        <div className="d-flex mb-3 align-items-start">
          {renderIcon("ai")}
          <div className="p-3 rounded bg-light text-muted">⏳ Thinking...</div>
        </div>
      )}
    </>
  );
};

export default QABox;
