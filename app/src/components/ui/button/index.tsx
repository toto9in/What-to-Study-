import { ButtonHTMLAttributes } from "react";
import { CgSpinner } from "react-icons/cg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({ children, loading, ...prev }: ButtonProps) => {
  return (
    <button
      {...prev}
      className="bg-primary px-6 py-2 rounded-md font-bold text-lg shadow-md shadow-gray-800 min-w-[100px] flex justify-center"
    >
      {loading ? <CgSpinner className="animate-spin" size={28} /> : children}
    </button>
  );
};
