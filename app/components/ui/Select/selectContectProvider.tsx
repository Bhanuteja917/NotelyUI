import React, { FC, createContext, useState } from "react";

interface SelectContextProviderProps {
  children: React.ReactNode;
}

interface ISelectContext {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectContext = createContext<ISelectContext | null>(null);

const SelectContextProvider: FC<SelectContextProviderProps> = ({
  children,
}) => {
  const [value, setValue] = useState<string>("Choose One");

  return (
    <SelectContext.Provider value={{ value, setValue }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
