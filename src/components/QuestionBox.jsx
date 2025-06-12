// QuestionBox.jsx
import React, { useState } from "react";

const QuestionBox = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <div
      className="position-fixed bottom-5 start-0 end-0 d-flex align-items-center px-3 mx-auto"
      style={{
        bottom: "1rem",
        maxWidth: "1218px",
        height: "56px",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgb(177, 177, 178)",
        zIndex: 1050,
      }}
    >
      <input
        type="text"
        className="form-control border-0 bg-transparent"
        placeholder="Ask something..."
        style={{ boxShadow: 'none', outline: 'none', color: "#000" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="btn p-0 ms-2"
        style={{ background: "none", border: "none" }}
        aria-label="Send"
        onClick={handleSend}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.1667 11L2.75 18.3333L6.01608 11L2.75 3.66666L20.1667 11ZM20.1667 11H5.95833"
            stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default QuestionBox;
