// Button.tsx
import React, { Children } from "react";

interface IButtonProps {
  title: string;
  disable?: boolean;
}

const Button: React.FC<IButtonProps> = ({ title, disable }) => {
  const buttonStyle = {
    backgroundColor: disable ? "#ccc" : "#81259D",
    color: disable ? "#666" : "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: disable ? "not-allowed" : "pointer",
    margin: "auto"
  };
  return (
    <button disabled={disable} style={buttonStyle} className="btn-signin">
      {title}
    </button>
  );
};

export default Button;
