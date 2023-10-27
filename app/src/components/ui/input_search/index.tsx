import { useState, InputHTMLAttributes } from "react";
import { IoClipboardOutline, IoClipboard } from "react-icons/io5";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputSearch = ({ ...prev }: InputSearchProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full h-full rounded-full shadow-md shadow-gray-800 px-4 py-2 gap-4 bg-white flex items-center">
      {focused ? (
        <IoClipboard className="text-black" size={32} />
      ) : (
        <IoClipboardOutline className="text-gray-400" size={32} />
      )}
      <input
        {...prev}
        type="search"
        name="search"
        id="search"
        className={`outline-none bg-transparent w-full h-full ${
          focused ? "placeholder-black text-black" : "text-gray-400"
        }`}
        placeholder="Digite um assunto..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};
