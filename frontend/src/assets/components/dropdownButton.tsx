import React, { useState, useEffect, useRef } from "react";

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Referencia para el menú desplegable

  // Función para alternar el estado del menú desplegable
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-flex items-center divide-x rounded dark:bg-violet-600 dark:text-gray-100 dark:divide-gray-300"
    >
      <button type="button" className="px-4 py-2 sm:px-8 sm:py-3">
        Caret
      </button>
      <button
        type="button"
        title="Toggle dropdown"
        className="p-2 sm:p-3"
        onClick={toggleDropdown}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 dark:bg-violet-600">
          <ul className="py-1">
            <li>
              <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 w-full text-left hover:bg-gray-100 dark:hover:bg-violet-700">
                Opción 1
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 w-full text-left hover:bg-gray-100 dark:hover:bg-violet-700">
                Opción 2
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 w-full text-left hover:bg-gray-100 dark:hover:bg-violet-700">
                Opción 3
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
