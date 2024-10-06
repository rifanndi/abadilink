// src/components/ButtonLink.jsx
import React from "react";

const ButtonLink = ({ label, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#D32F2F", // Red color from the logo
          color: "#fff",
          border: "2px solid #000", // Black border
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {label}
      </button>
    </a>
  );
};

export default ButtonLink;
