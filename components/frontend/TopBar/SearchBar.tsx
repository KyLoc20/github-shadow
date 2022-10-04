import { PropsWithChildren, useState } from "react";
export default function SearchBar({}: PropsWithChildren<{}>) {
  const [isFocusing, setIsFocusing] = useState(false);
  return (
    <label
      className="relative mr-4 w-[272px] h-[28px] border border-solid border-gray-400 bg-black-300 rounded"
      style={{
        width: isFocusing ? "544px" : undefined,
        paddingRight: isFocusing ? undefined : "24px",
        transition: "width 300ms cubic-bezier(0.33, 1, 0.68, 1)",
      }}
    >
      <input
        onFocus={() => setIsFocusing(true)}
        onBlur={() => setIsFocusing(false)}
        type="text"
        className="px-3 w-full text-sm placeholder:text-[#ffffffbf] placeholder:text-sm focus:placeholder:text-[#8b949e] "
        placeholder="Search or jump to..."
      />
      {!isFocusing && (
        <svg width="20" height="20" aria-hidden="true" className="absolute top-[3px] right-0 mr-1">
          <path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path>
          <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
        </svg>
      )}
    </label>
  );
}
