import type { CardTheme } from "../data/types";

export default function VcardButton({theme}:{theme:CardTheme}) {
    const gradient = {
    green: "gradient-blue-green",
    blue: "gradient-blue",
    purple: "gradient-purple",
  };
  return (
    <button
      className={`flex justify-center items-center gap-x-2 py-2 mt-6 w-full ${gradient[theme]}`}
    >
      <img
        src="/add-user-icon.svg"
        alt="save contact icon"
        width={24}
        height={24}
      />
      <span className="font-bold text-white text-sm">Save Contact</span>
    </button>
  );
}
