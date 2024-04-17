import React, { FC, InputHTMLAttributes } from "react";
import "./formField.css";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string | React.ReactNode;
}

const Button: FC<InputProps> = ({ icon, ...props }) => {
  return (
    <div className={`input-wrapper ${props.className}`}>
      {icon && typeof icon === "string" ? (
        <i className={`${icon} icon shrink-1`}></i>
      ) : (
        icon && <span className="icon">{icon}</span>
      )}
      <input {...props} className="grow-1 w-full rounded-lg" />
    </div>
  );
};

export default Button;
