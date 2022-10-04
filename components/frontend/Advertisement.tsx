import { PropsWithChildren } from "react";
import Image from "next/image";
export default function Advertisement({ onClose }: PropsWithChildren<{ onClose: () => void }>) {
  return (
    <div className="relative text-gray-700 mb-6 p-4 rounded-md border border-solid border-gray-400 bg-[url('/github_ad.jpg')] bg-cover" onClick={onClose}>
      <button className="absolute p-2 top-[8px] right-[6px]">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" className="fill-current">
          <path
            fillRule="evenodd"
            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
          ></path>
        </svg>
      </button>
      <Image src="/universe22-logo.svg" width={173} height={24} alt="GitHub Universe 2022" />
      <p className="mt-[9px] mb-1 text-sm font-semibold">{`Let's build from here`}</p>
      <p className="mb-1 text-sm">Join the global developer event for cloud, security, community, and AI.</p>
      <p className="mb-4 text-sm">Register today and get a 20% off early bird discount.</p>
      <button className="w-full font-medium rounded-md border border-solid border-[#adbac6] text-[#cdd9e4] bg-[#ffffff29] hover:bg-[#ffffff14] py-[5px] px-4 text-sm transition-all">
        Register now
      </button>
    </div>
  );
}
