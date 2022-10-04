import { PropsWithChildren, useMemo } from "react";
import Link from "next/link";
export default function LatestChanges({}: PropsWithChildren<{}>) {
  const changes = useMemo(() => {
    return getChanges();
  }, []);
  return (
    <div className="mb-6">
      <h2 className="mb-4 font-semibold text-sm">Latest changes</h2>
      <ul>
        {changes.map((change, i) => (
          <li key={i} className="relative ml-1 pb-4 pl-6">
            <span className="w-[18px] h-[18px] absolute top-0 left-[-8px] flex items-center">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" className="fill-[#30363d] ">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
              </svg>
            </span>
            <div className="absolute top-[9px] left-0 w-[1px] h-full bg-gray-400"></div>
            <ChangeItem change={change} />
          </li>
        ))}
        <li className="btn-text text-xs ml-1 pl-6 mt-[-9px] text-gray-300 ">
          <Link href="https://github.blog/changelog/">
            <a>View changelog →</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
function ChangeItem({ change }: { change: Change }) {
  return (
    <div className="">
      <div className="text-xs leading-[18px] text-gray-300">{change.when}</div>
      <Link href={change.url}>
        <a className="text-sm hover:underline hover:text-blue transition-all line-clamp-2">{change.what}</a>
      </Link>
    </div>
  );
}
type Change = { when: string; what: string; url: string };
const getChanges = (): Change[] => [
  {
    when: "32 minutes ago",
    what: "GitHub Desktop improves submodule support and now supports multi-commit diffing",
    url: "https://github.blog/changelog/2022-10-04-github-desktop-improves-submodule-support-and-now-supports-multi-commit-diffing/",
  },
  {
    when: "2 hours ago",
    what: "Stream audit log to AWS S3 with OpenID Connect (OIDC)",
    url: "https://github.blog/changelog/2022-10-04-stream-audit-log-to-aws-s3-with-openid-connect-oidc",
  },
  { when: "2 hours ago", what: "Introducing Actions on GitHub Mobile", url: "https://github.blog/changelog/2022-10-04-introducing-actions-on-github-mobile/" },
  {
    when: "21 hours ago",
    what: "Removing Opt-out of GitHub Sponsors Custom Amounts",
    url: "https://github.blog/changelog/2022-10-03-removing-opt-out-of-github-sponsors-custom-amounts/",
  },
];
