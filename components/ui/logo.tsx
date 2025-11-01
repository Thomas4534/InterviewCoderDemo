"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`} aria-label="Cruip">
      <Image
        src={logo}
        alt="Cruip Logo"
        width={32}
        height={32}
        className="w-full h-full object-cover rounded-full"
        priority
      />
    </Link>
  );
}
