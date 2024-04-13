import React, { FC, ButtonHTMLAttributes } from "react";
import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode | string;
}

const Button: FC<ButtonProps> = ({ children, icon, ...props }) => {
  return (
    <button
      {...props}
      style={{ display: "flex", alignItems: "center", gap: "4px" }}
    >
      {icon !== undefined && typeof icon === "string" ? (
        <i className={icon} />
      ) : icon !== undefined ? (
        <span className="button-icon">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
