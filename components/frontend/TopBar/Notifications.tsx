import { PropsWithChildren } from "react";
import Link from "next/link";
export default function Notifications({}: PropsWithChildren<{}>) {
  return (
    <Link href="https://github.com/notifications">
      <a className="text-gray-800 hover:text-gray-900 mr-4">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" className="fill-current">
          <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
          <path
            fillRule="evenodd"
            d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
          ></path>
        </svg>
      </a>
    </Link>
  );
}