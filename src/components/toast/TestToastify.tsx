import React, { useState } from "react";
import Toast from "./Toast";

const TestToastify = () => {
  const [toastProps, setToastProps] = useState<{
    type: "success" | "error" | "warning" | "info";
    description: string;
    onClose: () => void;
  } | null>(null);

  const handleShowToast = (type: "success" | "error" | "warning" | "info") => {
    setToastProps({
      type,
      description: `This is a ${type} toast!`,
      onClose: () => setToastProps(null),
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Test Toastify</h1>
      <div>
        <button onClick={() => handleShowToast("success")}>Show Success</button>
        <button onClick={() => handleShowToast("error")}>Show Error</button>
        <button onClick={() => handleShowToast("warning")}>Show Warning</button>
        <button onClick={() => handleShowToast("info")}>Show Info</button>
      </div>
      {toastProps && (
        <Toast
          type={toastProps.type}
          description={toastProps.description}
          onClose={toastProps.onClose}
        />
      )}
    </div>
  );
};

export default TestToastify;
