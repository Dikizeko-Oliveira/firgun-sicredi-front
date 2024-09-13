"use client";

import { CheckCircle2Icon, CheckIcon, ChevronDown } from "lucide-react";
import { useState } from "react";

interface SelectInputProps {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  listItems: string[];
  label: string;
  placeholder?: string;
  hasError: boolean;
}

export function SelectInput({
  selectedItem,
  setSelectedItem,
  listItems,
  label,
  placeholder,
  hasError,
}: SelectInputProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectItem = (itemToAdd: string) => {
    setSelectedItem(itemToAdd);
    handleShowDropdown();
  };

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium text-secondary mb-2">
        {label}
        <span className="text-red-600">*</span>
      </span>

      <div className="relative w-full flex flex-col">
        <button
          onClick={handleShowDropdown}
          className={`w-full h-14 flex items-center justify-between bg-white hover:bg-zinc-50 transition-all rounded-md py-3 px-5 border ${
            !selectedItem && hasError ? "border-red-600" : "border-slate-200"
          }`}
        >
          {selectedItem ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <CheckCircle2Icon className="w-4 h-4 text-primary " />
                <span className="text-sm font-medium text-secondary">
                  {selectedItem}
                </span>
              </div>
            </div>
          ) : (
            <span className="text-sm font-medium text-secondary">
              {placeholder ? placeholder : "Selecione o ítem..."}
            </span>
          )}
          <ChevronDown className="w-5 h-5 text-primary " />
        </button>

        <span
          className={`mt-1 transition-all duration-500 ${
            !selectedItem && hasError ? "block" : "hidden"
          } text-sm text-red-600`}
        >
          Esse campo é obrigatório
        </span>

        {showDropdown && (
          <ul className="flex flex-col w-full bg-white shadow-md max-h-48 overflow-y-scroll rounded-md absolute top-14 right-0 z-10 transition-all">
            {listItems.map((state) => (
              <li
                key={state}
                className="group hover:bg-fourth py-3 px-5 rounded-md cursor-pointer transition-all flex items-center justify-between w-full"
                onClick={() => handleSelectItem(state)}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 flex items-center justify-center rounded-sm border border-primary ${
                      selectedItem === state ? "bg-secondary" : "bg-white"
                    }`}
                  >
                    <CheckIcon className="w-3 h-3 text-white font-semibold transition-all" />
                  </div>
                  <span className="text-sm font-medium text-secondary">
                    {state}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
