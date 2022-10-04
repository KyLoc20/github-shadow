import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useMemo, useState } from "react";
import FeedTabs, { AvailableTabs } from "./FeedTabs";
export default function FeedList({}: PropsWithChildren<{}>) {
  const [which, setWhich] = useState<AvailableTabs>("following");
  const activities = useMemo(() => {
    return getActivities();
  }, []);

  return (
    <>
      <FeedTabs activeTab={which} onChange={setWhich} />
      <div>
        {activities.map((activity, i) => (
          <ActivityCard key={i} activity={activity} />
        ))}
      </div>
      <div className="mt-[20px]">
        <button className="w-full p-[6px] rounded-md border border-solid border-gray-400 bg-black-300 hover:bg-black-200 text-blue font-semibold text-sm leading-[21px] transition-all">
          More
        </button>
      </div>
      <div className="mt-[24px] text-xs text-gray-300">
        <p>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" className="fill-current inline mr-1 align-text-bottom">
            <path
              fillRule="evenodd"
              d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
            ></path>
          </svg>
          <strong>ProTip!</strong> The feed shows you events from people you <span className="btn-text-blue">follow</span> and repositories you{" "}
          <span className="btn-text-blue">watch</span> or <span className="btn-text-blue">star</span>.
        </p>

        <p className="my-2 leading-[18px] items-baseline hover:underline cursor-pointer hover:text-blue">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" className="fill-current inline mr-1 align-text-bottom">
            <path
              fillRule="evenodd"
              d="M2.002 2.725a.75.75 0 01.797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 11-1.497.098 10.502 10.502 0 00-9.776-9.776.75.75 0 01-.7-.798zM2 13a1 1 0 112 0 1 1 0 01-2 0zm.84-5.95a.75.75 0 00-.179 1.489c2.509.3 4.5 2.291 4.8 4.8a.75.75 0 101.49-.178A7.003 7.003 0 002.838 7.05z"
            ></path>
          </svg>
          <span>Subscribe to your news feed</span>
        </p>
      </div>
    </>
  );
}

function ActivityCard({ activity }: { activity: Activity }) {
  const { who, didWhat, when, details } = activity;
  return (
    <section className={clsx("flex items-start py-4 border-b border-solid border-gray-400")}>
      <Link href={who.url}>
        <a className="mr-2">
          <Image src={who.avatarUrl} alt={who.name} height={32} width={32} className="rounded-full"></Image>
        </a>
      </Link>
      <div className="w-full">
        <div className={clsx("activity-header", "flex items-baseline leading-[21px] space-x-1")}>
          <Link href={who.url}>
            <a className="btn-text text-sm font-semibold">{who.name}</a>
          </Link>
          <span className="text-sm">{didWhat}</span>
          <span className="text-xs text-gray-300">{moment(when).fromNow()}</span>
        </div>
        <div className={clsx("activity-content", "rounded-md border border-solid border-gray-400 bg-black-300 p-4 mt-2")}>
          <div className="leading-[21px] text-sm">
            1 commit to
            <Link href={"https://github.com/KyLoc20/snoopforms-laboratory/tree/master"}>
              <a className="btn-text-blue text-xs ml-1 rounded-md leading-[18px] bg-[rgba(56,139,253,0.15)] py-[2px] px-[6px]">master</a>
            </Link>
          </div>
          <div className="mt-[2px] flex items-baseline leading-[21px] space-x-1">
            <Link href={who.url}>
              <a className="self-center w-4 h-4">
                <Image src={who.avatarUrl} alt="avatar" height={16} width={16} className="rounded-full " />
              </a>
            </Link>
            <Link href={"https://github.com/KyLoc20/snoopforms-laboratory/commit/20b3b3a63f95446a84e76582338855cb91b9d507"}>
              <a className="text-xs btn-text-blue">1b9d507</a>
            </Link>
            <span className="text-sm text-gray-300">fix some issues</span>
          </div>
        </div>
      </div>
    </section>
  );
}
type User = {
  url: string;
  avatarUrl: string;
  name: string;
};
type Activity = { who: User; didWhat: JSX.Element; when: number; details: any };
const getActivities = (): Activity[] =>
  Array(8)
    .fill(0)
    .map((_, i) => ({
      who: { name: "Kyloc20", avatarUrl: "/avatar.jpg", url: "https://github.com/KyLoc20" },
      didWhat: (
        <span>
          pushed to{" "}
          <Link href={"https://github.com/KyLoc20/snoopforms-laboratory"}>
            <a className="btn-text text-sm font-semibold">KyLoc20/snoopforms-laboratory</a>
          </Link>
        </span>
      ),
      when: Date.now() - i * 8 * 60 * 60 * 1000,
      details: {},
    }));
