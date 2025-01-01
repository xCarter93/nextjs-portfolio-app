import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h1 style={{ color: "#2563eb", marginBottom: "24px" }}>
      New Contact Form Message
    </h1>

    <div
      style={{
        backgroundColor: "#f8fafc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ color: "#1e293b", marginBottom: "16px" }}>From: {name}</h2>
      <p style={{ color: "#475569", marginBottom: "8px" }}>Email: {email}</p>
    </div>

    <div
      style={{
        backgroundColor: "#f8fafc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ color: "#1e293b", marginBottom: "12px" }}>Message:</h3>
      <p
        style={{ color: "#475569", lineHeight: "1.6", whiteSpace: "pre-wrap" }}
      >
        {message}
      </p>
    </div>
  </div>
);
