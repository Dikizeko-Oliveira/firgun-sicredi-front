"use client";

import { ReactNode, useEffect } from "react";
import { XIcon } from "lucide-react";

export function Modal({
    children,
    handleClose,
    isModalOpen,
    dontShowCloseButton,
}: {
    children: ReactNode;
    handleClose: () => void;
    isModalOpen: boolean;
    dontShowCloseButton?: boolean;
}) {
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isModalOpen]);

    return (
        <div className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center backdrop-filter backdrop-brightness-50">
            <div className="relative mt-[-6rem] bg-white rounded-lg shadow-lg px-8 py-6 w-full min-h-44 max-w-2xl mx-4 sm:mx-0">
                {!dontShowCloseButton && (
                    <button
                        className="absolute top-3 right-3  hover:bg-slate-300 bg-transparent rounded-md focus:outline-none"
                        onClick={handleClose}
                    >
                        <XIcon className="w-6 h-6 text-slate-500" />
                    </button>
                )}

                {children}
            </div>
        </div>
    );
}
