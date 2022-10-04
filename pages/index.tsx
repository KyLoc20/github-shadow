import { useState } from "react";
import clsx from "clsx";
import Head from "next/head";
import {
  Logo,
  SearchBar,
  Navigations,
  Notifications,
  GetStarted,
  Profile,
  RecentRepositories,
  Advertisement,
  LatestChanges,
  FeedList,
  About,
  Explore,
} from "@/components/frontend";

export default function HomePage() {
  const [isAdOpen, setIsAdOpen] = useState(true);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Github Shadow</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <div className="flex flex-col text-gray scroll-bar-dark h-screen overflow-y-scroll">
        <header className={clsx("top-bar", "flex items-center h-[60px] px-8 py-4 bg-black-200 w-full")}>
          <Logo />
          <div className="flex flex-grow items-center">
            <SearchBar />
            <Navigations />
          </div>
          <Notifications />
          <GetStarted />
          <Profile />
        </header>
        <div className={clsx("flex bg-black w-full")}>
          <aside className={clsx("left-panel", "flex flex-col max-w-[350px] px-8 flex-grow border-r border-solid border-gray-100 bg-black-300")}>
            <RecentRepositories />
          </aside>
          <div className={clsx("px-8 flex-auto min-h-[calc(100vh_-_60px)]")}>
            <div className={clsx("flex mx-[-24px]")}>
              <main className={clsx("main-content", "flex flex-col w-2/3 mt-4 px-6")}>
                <section>
                  <FeedList />
                </section>
                <footer>
                  <About />
                </footer>
              </main>
              <aside className={clsx("right-panel", "flex flex-col flex-grow max-w-[350px] mt-8 px-6")}>
                {isAdOpen && <Advertisement onClose={() => setIsAdOpen(false)} />}
                <LatestChanges />
                <Explore />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
