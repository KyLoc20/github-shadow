import { PropsWithChildren } from "react";
import Image from "next/image";
export default function Profile({ children }: PropsWithChildren<{}>) {
  return (
    <div className="cursor-pointer text-gray-800 hover:text-gray-900 flex items-center">
      <Image src="/avatar.jpg" alt="@Kyloc" height={20} width={20} className="rounded-full" />
      <svg aria-hidden="true" data-icon="caret-dropdown" className="fill-current ml-1" width="8" height="12.8" role="img" viewBox="0 0 320 512">
        <path
          fill="currentColor"
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        ></path>
      </svg>
    </div>
  );
}
