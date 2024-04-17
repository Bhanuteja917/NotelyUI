import React, { FC, createContext, useEffect, useState } from "react";

interface SelectContextProviderProps {
  defaultValue: string;
  children: React.ReactNode;
  onOptionChange: (value: string) => void;
}

interface ISelectContext {
  value: string;
  onOptionSelected: (value: string) => void;
}

const initialSelectContextData = {
  value: "",
  onOptionSelected: (value: string) => {},
};

export const SelectContext = createContext<ISelectContext>(
  initialSelectContextData
);

const SelectContextProvider: FC<SelectContextProviderProps> = ({
  children,
  defaultValue,
  onOptionChange,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const onOptionSelected = (value: string) => {
    setValue(value);
    onOptionChange(value);
  };

  return (
    <SelectContext.Provider value={{ value, onOptionSelected }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
