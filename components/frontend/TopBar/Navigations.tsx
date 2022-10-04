import { PropsWithChildren } from "react";
import Link from "next/link";
export default function Navigations({}: PropsWithChildren<{}>) {
  return (
    <nav className="flex space-x-4">
      <NavigationItem href={"https://github.com/pulls"}>Pull requests</NavigationItem>
      <NavigationItem href={"https://github.com/issues"}>Issues</NavigationItem>
      <NavigationItem href={"https://github.com/marketplace"}>Marketplace</NavigationItem>
      <NavigationItem href={"https://github.com/explore"}>Explore</NavigationItem>
    </nav>
  );
}
function NavigationItem({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link href={href}>
      <a className="text-gray-800 text-sm font-semibold hover:text-gray-900">{children}</a>
    </Link>
  );
}
