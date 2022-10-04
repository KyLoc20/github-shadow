import Link from "next/link";
import { PropsWithChildren, useMemo } from "react";
export default function Explore({}: PropsWithChildren<{}>) {
  const repos = useMemo(() => {
    return getRepos();
  }, []);
  return (
    <div className="">
      <h2 className="mb-1 font-semibold text-sm">Explore repositories</h2>
      <ul className="">
        {repos.map((repo, i) => (
          <RepoCard key={i} repo={repo} />
        ))}
      </ul>
      <div className="btn-text text-xs mb-4 text-gray-300 ">
        <Link href="https://github.com/explore">
          <a>Explore more →</a>
        </Link>
      </div>
    </div>
  );
}
type Repo = {
  name: string;
  description: string;
  language: "TypeScript";
  url: string;
  stars: string;
};
function RepoCard({ repo }: { repo: Repo }) {
  return (
    <li className="my-2 py-2 border-b border-solid border-gray-100 last:border-b-0">
      <Link href={repo.url}>
        <a className="text-xs font-semibold leading-[18px]">{repo.name}</a>
      </Link>
      <p className="text-xs mb-2 line-clamp-1 text-gray-300">{repo.description}</p>
      <div className="flex space-x-2 text-gray-300 text-xs">
        <div className="flex items-center">
          <span className="rounded-full w-3 h-3 bg-[#3178c6] mr-1"></span>
          <span>{repo.language}</span>
        </div>
        <div className="flex items-center">
          <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" width="16" className="fill-current mr-1">
            <path
              fillRule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>
          <span> {repo.stars}</span>
        </div>
      </div>
    </li>
  );
}
const getRepos = (): Repo[] => [
  { name: "microsoft/vscode", description: "Visual Studio Code", language: "TypeScript", url: "https://github.com/microsoft/vscode", stars: "137k" },
  { name: "microsoft/vscode", description: "Visual Studio Code", language: "TypeScript", url: "https://github.com/microsoft/vscode", stars: "137k" },
  { name: "microsoft/vscode", description: "Visual Studio Code", language: "TypeScript", url: "https://github.com/microsoft/vscode", stars: "137k" },
];
