import React, {
  FC,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./select.css";
import SelectContextProvider, { SelectContext } from "./selectContectProvider";

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  onOptionChange: (value: string) => void;
}

const Inner: FC<SelectProps> = ({ children, ...props }) => {
  const { value } = useContext(SelectContext);
  const [isShown, setShow] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  console.log(selectRef.current?.getBoundingClientRect());

  return (
    <>
      <div
        className={`dropdown ${props.className}`}
        onClick={() => setShow(!isShown)}
        ref={selectRef}
      >
        <div className={`dropdown-btn`}>
          <div className="dropdown-btn-text">
            <p>{value}</p>
            <span className="mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        {isShown && <div className="dropdown-content">{children}</div>}
      </div>
    </>
  );
};

const Select: FC<SelectProps> = ({ children, ...props }) => {
  const firstOption = children?.valueOf() as any[];
  const defaultValue = firstOption[0]?.props?.children;
  return (
    <SelectContextProvider
      defaultValue={defaultValue}
      onOptionChange={props.onOptionChange}
    >
      <Inner {...props}>{children}</Inner>
    </SelectContextProvider>
  );
};

export default Select;
