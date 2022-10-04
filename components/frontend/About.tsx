import { PropsWithChildren } from "react";
export default function About({ children }: PropsWithChildren<{}>) {
  return <div className="mt-[32px] w-full h-[110px]">{children}</div>;
}
