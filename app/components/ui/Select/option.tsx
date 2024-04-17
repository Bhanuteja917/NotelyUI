import { OptionHTMLAttributes, RefObject, FC, useContext } from "react";
import "./select.css";
import SelectContextProvider, { SelectContext } from "./selectContectProvider";

interface OptionProps extends OptionHTMLAttributes<HTMLDivElement> {
  children: string;
}

const Option: FC<OptionProps> = ({ children }) => {
  const { onOptionSelected } = useContext(SelectContext);

  return (
    <div className="dropdown-item">
      <div
        className="dropdown-item-text"
        onClick={() => onOptionSelected(children)}
      >
        {children}
      </div>
    </div>
  );
};

export default Option;
