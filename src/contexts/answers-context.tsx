"use client";

import { ReactNode, createContext, useContext, useState } from "react";

import { AnswersType } from "@/data/types/answers";

interface AnswersContextType {
    answers: AnswersType[];
    setAnswers: (value: AnswersType[]) => void;
}

const AnswersContext = createContext({} as AnswersContextType);

export function AnswersProvider({ children }: { children: ReactNode }) {
    const [answers, setAnswers] = useState<AnswersType[]>([]);

    return (
        <AnswersContext.Provider
            value={{
                answers,
                setAnswers,
            }}
        >
            {children}
        </AnswersContext.Provider>
    );
}

export const useAnswers = () => useContext(AnswersContext);
