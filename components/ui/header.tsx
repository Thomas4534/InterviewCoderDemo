"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-4 pointer-events-none">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex justify-center">
        {/* Floating nav capsule */}
        <div
          className="fixed top-3 md:top-5 flex h-16 items-center justify-between gap-3
          rounded-2xl px-4 md:px-6
          bg-[radial-gradient(circle_at_top_left,rgba(255,230,128,0.08),rgba(0,0,0,0.9))]
          border border-yellow-400/10
          backdrop-blur-md shadow-[0_0_25px_rgba(255,230,128,0.15)]
          max-w-5xl w-[95%] md:w-[80%]
          pointer-events-auto transition-all duration-300"
        >
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-black/30 shadow-[0_0_10px_rgba(255,230,128,0.3)]">
              <Logo className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-[linear-gradient(to_right,rgba(255,230,128,0.15),rgba(20,20,20,1))] py-[5px] text-yellow-100 hover:text-white hover:bg-[linear-gradient(to_right,rgba(255,230,128,0.25),rgba(40,40,40,1))] transition-all duration-300 rounded-lg"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-[linear-gradient(to_top,rgba(255,230,128,0.5),rgba(255,255,200,0.2))] py-[5px] text-black font-semibold shadow-[0_0_10px_rgba(255,230,128,0.3)] hover:bg-[linear-gradient(to_top,rgba(255,230,128,0.7),rgba(255,255,200,0.3))] transition-all duration-300 rounded-lg"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
