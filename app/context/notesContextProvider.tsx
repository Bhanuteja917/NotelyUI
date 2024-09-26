import React from "react";
import { createContext } from "react";

const notesContext = createContext(0);

export function NotesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <notesContext.Provider value={0}>{children}</notesContext.Provider>;
}

export default notesContext;
