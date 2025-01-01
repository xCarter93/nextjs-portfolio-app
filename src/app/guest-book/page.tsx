import { Metadata } from "next";
import { Suspense } from "react";
import { SignIn, Submit } from "./_components/buttons";
import { unstable_cache } from "next/cache";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { createPost } from "@/lib/actions";

export const metadata: Metadata = {
  title: "Guest Book | Patrick Carter",
  description: "Sign my guest book and leave a message",
};

const getPosts = unstable_cache(
  () => {
    return prisma.guestBookEntry.findMany({
      include: {
        user: true,
      },
      orderBy: { createdAt: "desc" },
    });
  },
  ["guestBookEntries"],
  { revalidate: 3600, tags: ["guestBookEntries"] },
);

function GuestBookSkeleton() {
  return (
    <ul className="flex flex-col gap-y-2 divide-y divide-[#898989]/20 p-4 text-sm lg:divide-y-0">
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className="group flex flex-col gap-1 py-1 lg:flex-row lg:items-center lg:gap-2 lg:border-y-0 lg:py-0"
        >
          <div className="h-6 w-36 animate-pulse rounded bg-gray-700/50 lg:flex-none" />
          <div className="block lg:hidden">
            <div className="h-6 w-full animate-pulse rounded bg-gray-700/50" />
          </div>
          <div className="hidden lg:block">:</div>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-8">
            <div className="h-6 w-2/3 animate-pulse rounded bg-gray-700/50" />
            <div className="h-6 w-[180px] animate-pulse rounded bg-gray-700/50" />
          </div>
        </li>
      ))}
    </ul>
  );
}

async function GuestBookForm() {
  const user = await currentUser();

  return (
    <form
      className="mb-2 flex flex-col gap-2 p-4 text-sm lg:flex-row lg:items-center"
      action={createPost}
    >
      <p className="truncate lg:w-36">
        <span className="text-[#5de4c7]">~</span>/
        {user ? user.username?.toLowerCase().replace(/\s/g, "-") : "guest"}
      </p>
      <p className="hidden lg:block">:</p>
      <input
        name="desc"
        id="desc"
        type="text"
        className="flex-1 bg-transparent placeholder-opacity-50 caret-[#5de4c7] placeholder:text-[#898989]/90 focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={user ? "Leave a message" : "Sign in to leave a message"}
        autoFocus
        required
        minLength={3}
        maxLength={140}
        autoComplete="off"
        disabled={!user}
      />
      {user ? <Submit /> : <SignIn />}
    </form>
  );
}

async function GuestBookEntries() {
  const entries = await getPosts();

  return (
    <ul className="flex flex-col gap-y-2 divide-y divide-[#898989]/20 p-4 text-sm lg:divide-y-0">
      {entries.map((item) => (
        <li
          key={item.id}
          className="group flex flex-col gap-1 py-1 lg:flex-row lg:gap-2 lg:border-y-0 lg:py-0"
        >
          <p className="flex-1 truncate lg:w-36 lg:flex-none">
            <span className="text-[#5de4c7]">~</span>/
            {item.user.name?.toLowerCase().replace(/\s/g, "-")}
          </p>
          <p className="block lg:hidden">{item.message}</p>
          <p className="hidden lg:block">:</p>
          <p className="hidden flex-1 lg:block">{item.message}</p>

          <p className="hidden lg:block">
            {new Date(item.createdAt)
              .toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })
              .replace(",", "")
              .replace(/\//g, "-")}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function GuestBook() {
  return (
    <>
      <Suspense
        fallback={<div className="h-16 animate-pulse rounded bg-gray-700/50" />}
      >
        <GuestBookForm />
      </Suspense>
      <Suspense fallback={<GuestBookSkeleton />}>
        <GuestBookEntries />
      </Suspense>
    </>
  );
}
