import React from "react";
import Image from "next/image";
import {
  Bars3Icon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAsiaAustraliaIcon,
  MegaphoneIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          className="object-contain"
          src="https://firebasestorage.googleapis.com/v0/b/storage-15b1a.appspot.com/o/reddit-1-logo-png-transparent.png?alt=media&token=392f1762-0b7f-4cce-a965-9b597dd4a908"
          fill
          alt="Reddit logo"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 rounded-lg border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent focus:outline-none"
        />
        <button hidden type="submit" />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAsiaAustraliaIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-200" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {session && (
        <div>
          <div
            onClick={() => signOut()}
            className="hidden cursor-pointer items-center space-x-2 rounded-sm border border-gray-200 p-2 lg:flex"
          >
            <div className="relative h-5 w-5 flex-shrink-0">
              <Image
                src="https://links.papareact.com/23l"
                className="object-contain"
                fill
                alt="Sign"
              />
            </div>

            <div className="flex-1 text-xs">
              <p className="truncate">{session?.user?.name}</p>
              <p className="text-gray-400">1 Karma</p>
            </div>

            <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
          </div>

          <div
            onClick={() => signOut()}
            className="mx-2 flex items-center rounded-full border-2 border-orange-500 p-2 lg:hidden"
          >
            <div className="relative h-5 w-5 flex-shrink-0">
              <Image
                src="https://links.papareact.com/23l"
                className="object-contain"
                fill
                alt="Sign"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
