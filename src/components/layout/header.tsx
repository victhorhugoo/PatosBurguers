"use client"
import GradientMenu from "@/components/botao/button";
import Image from "next/image";
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-5 pb-2 bg-black/50 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="flex h-16 max-w-6xl px-6 justify-between items-center mx-auto">
        <Link href={'https://patosburguers.menudino.com/'}>
          <Image
            src="/assets/ui/logo.png"
            alt="Logo"
            width={90}
            height={40}
            className="transition-transform duration-300 hover:scale-125 drop-shadow-[0_0_20px_rgba(251,251,251,0.2)]"
          />
        </Link>
        <GradientMenu />
      </div>
    </header>
  );
}
