"use client";

import { CircleAlertIcon } from "lucide-react";

interface SelectInputProps {
    text: string;
    type?: string;
    length?: number;
    setText: (value: string) => void;
    hasError: boolean;
    isValid?: boolean;
    label: string;
    placeholder?: string;
    autoFocus?: boolean;
}

export function TextInput({
    text,
    setText,
    type,
    hasError,
    label,
    placeholder,
    autoFocus,
    length,
    isValid,
}: SelectInputProps) {
    return (
        <label htmlFor="client" className="flex flex-col max-sm:text-sm">
            <span className="text-third font-semibold ">
                {label}
                <span className="text-red-600">*</span>
            </span>
            <div
                className={`flex items-center w-full h-14 rounded-lg bg-white border transition-all duration-500 ${
                    (!text && hasError) || !isValid
                        ? "border-red-600"
                        : "border-slate-200"
                } px-4 mt-2`}
            >
                <input
                    className="flex-1 bg-transparent placeholder:text-zinc-400 outline-none text-secondary"
                    placeholder={placeholder ? placeholder : "Digite aqui..."}
                    type={type || "text"}
                    value={text}
                    maxLength={length}
                    onChange={(e) => setText(e.target.value)}
                />

                <CircleAlertIcon
                    className={`w-4 h-4 text-red-600 ml-2 transition-all duration-500 ${
                        (!text && hasError) || !isValid ? "block" : "hidden"
                    }`}
                />
            </div>
            <span
                className={`mt-1 transition-all duration-500 ${
                    !text && hasError ? "block" : "hidden"
                } text-sm text-red-600`}
            >
                Campo obrigatório
            </span>
            {!isValid && (
                <span
                    className={`mt-1 transition-all duration-500 ${
                        !isValid ? "block" : "hidden"
                    } text-sm text-red-600`}
                >
                    Digite um CPF válido
                </span>
            )}
        </label>
    );
}
