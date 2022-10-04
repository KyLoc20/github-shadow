import { PropsWithChildren, useMemo } from "react";
import clsx from "clsx";
export default function RecentRepositories({ children }: PropsWithChildren<{}>) {
  return (
    <div className="sticky top-0 ">
      <div className={clsx("mt-8 mb-4")}>
        <h2 className="flex justify-between items-center mb-1 font-semibold">
          <div className="text-sm">Recent Repositories</div>
          <a className="btn btn-sm btn-primary flex items-center">
            <RepoIcon />
            <span>New</span>
          </a>
        </h2>
        <RepoList />
      </div>
      <div className="border-t border-solid border-gray-400">
        <h2 className="text-sm mt-4 font-semibold">Recent activity</h2>
        <p className="text-gray-300 text-xs mt-[8px] mb-[2px]">When you take actions across GitHub, we’ll provide links to that activity here.</p>
      </div>
    </div>
  );
}
function RepoList({}) {
  const repos = useMemo(() => {
    return getRepos();
  }, []);
  return (
    <>
      <div className="mt-2 mb-4">
        <input
          className="w-full py-[5px] px-[12px] border border-solid border-gray-400 bg-black-100 placeholder-gray-500 rounded-md outline-focus-blur text-sm text-gray-200"
          type="text"
          placeholder="Find a repository..."
        />
      </div>
      <ul style={{}}>
        {repos.map((repo, i) => (
          <li key={i} className={clsx("text-gray-200 text-sm mt-2 flex items-center")}>
            <a href={repo.ownerUrl} className="w-4 h-4 mr-2 rounded-full bg-[url('/avatar.jpg')] bg-center bg-contain"></a>
            <a href={repo.url} className="hover:underline">
              <span>{repo.owner}</span>
              <span className="text-gray-300">/</span>
              <span>{`${repo.name}-${i + 1}`}</span>
            </a>
          </li>
        ))}
      </ul>
      <button className="text-gray-300 text-xs mt-4 btn-text">Show more</button>
    </>
  );
}

function RepoIcon({}) {
  return (
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" className="fill-current inline mr-[3px]">
      <path
        fillRule="evenodd"
        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
      ></path>
    </svg>
  );
}
const getRepos = () =>
  Array(15)
    .fill(0)
    .map((_, i) => ({
      owner: "Kyloc20",
      name: "snoopforms-laboratory",
      ownerUrl: "https://github.com/KyLoc20",
      url: "https://github.com/KyLoc20/snoopforms-laboratory",
    }));
