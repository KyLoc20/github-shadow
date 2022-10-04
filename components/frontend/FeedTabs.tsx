import { PropsWithChildren } from "react";
import clsx from "clsx";
export type AvailableTabs = "following" | "foryou";
export default function FeedTabs({ activeTab, onChange }: PropsWithChildren<{ activeTab: AvailableTabs; onChange: (which: AvailableTabs) => void }>) {
  return (
    <ul className="flex space-x-2 shadow-bottom h-[48px] items-center">
      <li>
        <TabItem onClick={() => onChange("following")} active={activeTab === "following"}>
          Following
        </TabItem>
      </li>
      <li>
        <TabItem onClick={() => onChange("foryou")} active={activeTab === "foryou"}>
          For you
          <span className="text-xs font-medium h-[20px] ml-1 text-[#3fb950] px-[4px] py-[1.5px] rounded-[2em] border border-solid border-[#3fb950]">Beta</span>
        </TabItem>
      </li>
    </ul>
  );
}
function TabItem({ active, onClick, children }: PropsWithChildren<{ active: boolean; onClick: () => void }>) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        active && "after:absolute after:left-0 after:bottom-[-9px] after:w-full after:h-[2px] after:rounded-full after:bg-[#f78166]",
        active && "font-semibold",
        "relative text-sm rounded-md h-[30px] px-2 hover:bg-gray-600 transition-all"
      )}
    >
      {children}
    </button>
  );
}
