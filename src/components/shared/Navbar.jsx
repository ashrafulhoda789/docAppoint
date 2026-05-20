'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import {
  Button,
  Avatar,
  Badge,
  Link as HeroLink,
} from '@heroui/react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose, IoNotificationsOutline } from 'react-icons/io5';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = false;

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'All Appointments', href: '/appointments' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <nav className="sticky top-4 z-50 px-3 md:px-6">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10">

        {/* HEADER */}
        <header className="flex h-20 items-center justify-between px-5 md:px-8">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MOBILE TOGGLE */}
            <button
              className="text-white lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoClose className="h-8 w-8" />
              ) : (
                <RxHamburgerMenu className="h-7 w-7" />
              )}
            </button>

            {/* LOGO */}
            <NextLink href="/" className="group flex items-center gap-3">

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-white shadow-lg shadow-cyan-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-500/40">

                <Image
                  src="/logo.png"
                  alt="DocAppoint"
                  width={62}
                  height={62}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="bg-linear-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-2xl font-black tracking-wide text-transparent">
                  DocAppoint
                </h1>

                <p className="hidden text-[11px] uppercase tracking-[0.25em] text-slate-400 sm:block">
                  Smart Healthcare
                </p>
              </div>

            </NextLink>
          </div>

          {/* CENTER NAV */}
          <ul className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <HeroLink
                  as={NextLink}
                  href={item.href}
                  className="group relative font-medium text-slate-300 transition-all duration-300 hover:text-cyan-400"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </HeroLink>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {user ? (
              <>
                <Badge color="danger" content="" placement="top-right" shape="circle">
                  <Button
                    isIconOnly
                    radius="full"
                    variant="bordered"
                    className="hidden border-white/10 bg-white/5 text-cyan-300 transition hover:bg-cyan-500/10 md:flex"
                  >
                    <IoNotificationsOutline size={22} />
                  </Button>
                </Badge>

                <div className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-2 py-1.5 transition hover:bg-cyan-500/10 md:flex">

                  <Avatar
                    src="https://i.pravatar.cc/150?img=12"
                    className="h-10 w-10 border border-cyan-400/40"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Ashraful
                    </h3>
                    <p className="text-xs text-slate-400">Patient</p>
                  </div>
                </div>

                <Button
                  radius="full"
                  variant="bordered"
                  className="hidden border-red-500/30 text-red-400 transition hover:bg-red-500/10 md:flex"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={NextLink}
                  href="/login"
                  radius="full"
                  variant="bordered"
                  className="hidden border-cyan-400/30 text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10 md:flex"
                >
                  Login
                </Button>

                <Button
                  as={NextLink}
                  href="/register"
                  radius="full"
                  className="bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-600 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </header>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="border-t border-white/10 lg:hidden">
            <ul className="flex flex-col gap-4 p-6">

              {navItems.map((item) => (
                <li key={item.href}>
                  <HeroLink
                    as={NextLink}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    {item.name}
                  </HeroLink>
                </li>
              ))}

              <div className="mt-4 flex flex-col gap-3">

                {user ? (
                  <>
                    <Button
                      radius="full"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    >
                      Dashboard
                    </Button>

                    <Button
                      radius="full"
                      variant="bordered"
                      color="danger"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      as={NextLink}
                      href="/login"
                      radius="full"
                      variant="bordered"
                      className="border-cyan-400/30 text-cyan-300"
                    >
                      Login
                    </Button>

                    <Button
                      as={NextLink}
                      href="/register"
                      radius="full"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    >
                      Register
                    </Button>
                  </>
                )}
              </div>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;