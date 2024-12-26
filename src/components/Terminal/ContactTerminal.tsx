"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Step = "name" | "email" | "message" | "confirm" | "complete";

export function ContactTerminal() {
  const [currentStep, setCurrentStep] = useState<Step>("name");
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [currentInput, setCurrentInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep === "name") {
      setFormData((prev) => ({ ...prev, name: currentInput }));
      setCurrentStep("email");
      setCurrentInput("");
    } else if (currentStep === "email") {
      setFormData((prev) => ({ ...prev, email: currentInput }));
      setCurrentStep("message");
      setCurrentInput("");
    } else if (currentStep === "message") {
      setFormData((prev) => ({ ...prev, message: currentInput }));
      setCurrentStep("confirm");
      setCurrentInput("");
    } else if (
      currentStep === "confirm" &&
      currentInput.toLowerCase() === "y"
    ) {
      // Here we would implement the actual email sending logic
      console.log("Sending email with:", formData);
      setCurrentStep("complete");
      setCurrentInput("");
    } else if (
      currentStep === "confirm" &&
      currentInput.toLowerCase() === "n"
    ) {
      setCurrentStep("name");
      setFormData({ name: "", email: "", message: "" });
      setCurrentInput("");
    }
  };

  const getCurrentPrompt = () => {
    switch (currentStep) {
      case "name":
        return "$ Enter your name:";
      case "email":
        return `$ Welcome, ${formData.name}! Please enter your email:`;
      case "message":
        return "$ What message would you like to send?";
      case "confirm":
        return `$ Review your message:\n\nFrom: ${formData.name} <${formData.email}>\nMessage: ${formData.message}\n\nSend? (y/n):`;
      case "complete":
        return "$ Message sent successfully! Thank you for reaching out.";
      default:
        return "$ ";
    }
  };

  return (
    <div className="font-mono">
      <div className="mb-4 space-y-2 text-gray-400">
        {currentStep !== "name" && (
          <>
            <div>$ Enter your name:</div>
            <div className="text-green-500">{formData.name}</div>
          </>
        )}
        {currentStep !== "name" && currentStep !== "email" && (
          <>
            <div>$ Enter your email:</div>
            <div className="text-green-500">{formData.email}</div>
          </>
        )}
        {currentStep !== "name" &&
          currentStep !== "email" &&
          currentStep !== "message" && (
            <>
              <div>$ What message would you like to send?</div>
              <div className="text-green-500">{formData.message}</div>
            </>
          )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <div className="whitespace-pre-wrap text-gray-400">
            {getCurrentPrompt()}
          </div>
          {currentStep !== "complete" && (
            <form onSubmit={handleSubmit} className="flex-1">
              <input
                type={currentStep === "email" ? "email" : "text"}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="w-full bg-transparent text-green-500 outline-none"
                autoFocus
                required
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
