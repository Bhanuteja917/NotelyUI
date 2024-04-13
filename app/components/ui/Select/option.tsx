import { OptionHTMLAttributes, RefObject, FC, useContext } from "react";
import "./select.css";
import SelectContextProvider, { SelectContext } from "./selectContectProvider";

interface OptionProps extends OptionHTMLAttributes<HTMLDivElement> {
  children: string;
}

const Option: FC<OptionProps> = ({ children, onClick }) => {
  const context = useContext(SelectContext);

  return (
    <div className="dropdown-item">
      <div
        className="dropdown-item-text"
        onClick={() => context?.setValue(children)}
      >
        {children}
      </div>
    </div>
  );
};

export default Option;
