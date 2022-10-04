import { PropsWithChildren } from "react";
export default function GetStarted({}: PropsWithChildren<{}>) {
  return (
    <div className="cursor-pointer text-gray-800 hover:text-gray-900 mr-4 flex items-center">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" className="fill-current">
        <path
          fillRule="evenodd"
          d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
        ></path>
      </svg>
      <svg aria-hidden="true" data-icon="caret-dropdown" className="fill-current ml-1" width="8" height="12.8" role="img" viewBox="0 0 320 512">
        <path
          fill="currentColor"
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        ></path>
      </svg>
    </div>
  );
}
