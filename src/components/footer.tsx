import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import clsx from "clsx";

export function FooterSitemap({ className }: { className?: string }) {
  return (
    <footer className="bg-white text-sm/loose text-gray-950 dark:bg-gray-950 dark:text-white">
      <div
        className={clsx(
          "mx-auto grid w-full grid-cols-2 justify-between gap-y-0 md:grid-cols-4 md:gap-6 md:gap-x-4 lg:gap-8",
          className,
        )}
      >
        <div className="border-x border-b border-gray-950/5 py-10 pl-2 not-md:border-0 md:border-b-0 dark:border-white/10">
          <h3 className="font-semibold">Learn</h3>
          <ul className="mt-4 grid gap-4">
            <li>
              <Link href="/docs" className="hover:underline">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/showcase" className="hover:underline">
                Showcase
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="https://play.tailwindcss.com/" className="hover:underline">
                Playground
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-x border-b border-gray-950/5 py-10 pl-2 not-md:border-0 md:border-b-0 dark:border-white/10">
          <h3 className="mb-2 font-semibold">Tailwind UI</h3>
          <ul className="mt-4 grid gap-4">
            <li>
              <Link href="https://tailwindui.com/components?ref=footer" className="hover:underline">
                UI Blocks
              </Link>
            </li>
            <li>
              <Link href="https://tailwindui.com/templates?ref=footer" className="hover:underline">
                Templates
              </Link>
            </li>
            <li>
              <Link href="https://tailwindui.com/templates/catalyst?ref=footer" className="hover:underline">
                UI Kit
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-x border-b border-gray-950/5 py-10 pl-2 not-md:border-0 sm:border-b-0 dark:border-white/10">
          <h3 className="font-semibold">Resources</h3>
          <ul className="mt-4 grid gap-4">
            <li>
              <Link href="https://www.refactoringui.com" className="hover:underline">
                Refactoring UI
              </Link>
            </li>
            <li>
              <Link href="https://headlessui.com" className="hover:underline">
                Headless UI
              </Link>
            </li>
            <li>
              <Link href="https://heroicons.com" className="hover:underline">
                Heroicons
              </Link>
            </li>
            <li>
              <Link href="https://heropatterns.com" className="hover:underline">
                Hero Patterns
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-x border-gray-950/5 py-10 pl-2 not-md:border-0 dark:border-white/10">
          <h3 className="font-semibold">Community</h3>
          <ul className="mt-4 grid gap-4">
            <li>
              <Link href="https://github.com/tailwindlabs/tailwindcss" className="hover:underline">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://tailwindcss.com/discord" className="hover:underline">
                Discord
              </Link>
            </li>
            <li>
              <Link href="https://x.com/tailwindcss" className="hover:underline">
                X
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function FooterMeta({ className }: { className?: string }) {
  return (
    <div className="px-2 pt-10 pb-24">
      <div
        className={clsx(
          "mx-auto flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8",
          className,
        )}
      >
        <ThemeToggle />
        <div className="flex flex-col gap-4 text-sm/6 text-gray-700 sm:flex-row sm:gap-2 sm:pr-4 dark:text-gray-400">
          <span>Copyright ©&nbsp;2025&nbsp;Tailwind Labs Inc.</span>
          <span className="max-sm:hidden">&middot;</span>
          <Link href="/brand" className="hover:underline">
            Trademark Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
