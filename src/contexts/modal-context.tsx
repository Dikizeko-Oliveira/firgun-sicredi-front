"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const ModalContext = createContext({} as ModalContextType);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        isModalOpen: isOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
