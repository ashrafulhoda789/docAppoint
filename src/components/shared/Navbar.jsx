'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import {
  Button,
  Link as HeroLink,
} from '@heroui/react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData?.data?.user;


  const links = (
    <>
      <li>
        <Link
          href="/"
          className="group border-b-2 hover:border-b-gray-500 relative font-medium text-slate-600 transition-all duration-300 hover:text-teal-700"
        >
          Home
          <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>

      <li>
        <Link
          href="/appointments"
          className="group border-b-2 hover:border-b-gray-500 relative font-medium text-slate-600 transition-all duration-300 hover:text-teal-700"
        >
          All Appointments
          <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>

      <li>
        <Link
          href="/dashboard"
          className="group border-b-2 hover:border-b-gray-500 relative font-medium text-slate-600 transition-all duration-300 hover:text-teal-700"
        >
          Dashboard
          <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-teal-100/80 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="flex h-20 items-center justify-between">

          <div className="flex items-center gap-4">

            <button
              className="rounded-xl p-2 text-slate-700 transition hover:bg-teal-50 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose className="h-7 w-7" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </button>

            <NextLink href="/" className="group flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-100 bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <Image
                  src={"/logo.png"}
                  alt="DocAppoint"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="hidden bg-linear-to-r from-teal-700 to-cyan-500 bg-clip-text text-2xl font-black tracking-wide text-transparent sm:block">
                  DocAppoint
                </h1>

                <p className="hidden text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 sm:block">
                  Smart Healthcare
                </p>
              </div>

            </NextLink>
          </div>

          <ul className="hidden items-center gap-10 lg:flex">
            {links}
          </ul>

          <div className="flex items-center gap-3">

            {user ? (
              <div className="flex items-center gap-3">
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={42}
                  height={42}
                  className="rounded-full border-2 border-teal-100 object-cover"
                />

                <Button
                  onClick={async () => await authClient.signOut()}
                  radius="full"
                  variant="flat"
                  className="bg-rose-50 font-medium text-rose-500 transition-all duration-300 hover:bg-rose-100"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">

                <Link href={'/login'}>
                  <Button
                    radius="full"
                    variant="bordered"
                    className="hidden border-teal-200 bg-white font-medium text-teal-700 transition-all duration-300 hover:bg-teal-50 md:flex"
                  >
                    Login
                  </Button>
                </Link>

                <Link href={'/register'}>
                  <Button
                    radius="full"
                    className="bg-linear-to-r from-teal-700 to-cyan-500 px-6 font-semibold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30"
                  >
                    Register
                  </Button>
                </Link>

              </div>
            )}

          </div>
        </header>

        {isMenuOpen && (
          <div className="border-t border-slate-100 py-4 lg:hidden">
            <ul className="flex flex-col gap-2">

              {links}

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;