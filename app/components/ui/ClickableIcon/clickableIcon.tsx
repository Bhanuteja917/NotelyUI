import React, { FC, ButtonHTMLAttributes } from "react";
import "./clickableIcon.css";

interface IconProps extends ButtonHTMLAttributes<HTMLSpanElement> {
  icon: string | React.ReactNode;
}

const ClickableIcon: FC<IconProps> = ({ icon, ...props }) => {
  if (typeof icon === "string")
    return <i className={icon + "icon"} {...props}></i>;
  else
    return (
      <span className="icon" {...props}>
        {icon}
      </span>
    );
};

export default ClickableIcon;
