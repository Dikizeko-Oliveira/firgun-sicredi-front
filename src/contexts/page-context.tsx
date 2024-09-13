"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface PageContextType {
  page: number;
  setPage: (value: number) => void;
}

const PageContext = createContext({} as PageContextType);

export function PageProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<number>(1); // starts with 1

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export const usePage = () => useContext(PageContext);
