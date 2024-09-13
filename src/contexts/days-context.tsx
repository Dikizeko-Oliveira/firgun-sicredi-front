"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface DaysContextType {
    days: string;
    setDays: (value: string) => void;
}

const DaysContext = createContext({} as DaysContextType);

export function DaysProvider({ children }: { children: ReactNode }) {
    const [days, setDays] = useState<string>("");

    return (
        <DaysContext.Provider
            value={{
                days,
                setDays,
            }}
        >
            {children}
        </DaysContext.Provider>
    );
}

export const useDays = () => useContext(DaysContext);
