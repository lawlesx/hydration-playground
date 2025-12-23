"use client";
import { useEffect, useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-dusty-rose px-10 py-4 text-2xl shadow-md rounded-xl tracking-wider hover:text-ivory-cream hover:bg-mauve-mist transition-all duration-300 hover:border-ivory-cream cursor-pointer font-storyscript border-4 border-mauve-mist"
      >
        Click me
      </button>
      {isOpen && (
        <div
          className="fixed backdrop-blur-sm backdrop-brightness-50 w-full h-full top-0 left-0 grid place-items-center"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-ivory-cream border-4 border-dusty-rose p-8 rounded-lg shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h2 className="text-2xl font-bold mb-4 font-storyscript">
              Some Modal Title
            </h2>
            <p className="text-gray-600 font-storyscript">
              Click outside to close.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
