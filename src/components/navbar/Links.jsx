"use client";
import { usePathname } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";

import Link from "next/link";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
];

function Links() {
  const pathName = usePathname();
  const [session, setSession] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [open, setOpen] = useState(false);
  function handleLogin() {
    setSession(!session);
  }
  return (
    <div className="flex items-center justify-between ">
      <div className="hidden  md:flex md:items-center  md:justify-between md:gap-2 lg:gap-4 sm:gap-1">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`min-w-[100px] p-2 rounded-3xl font-medium text-center ${
              pathName === link.path ? "bg-white text-bgPrime" : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
        {session ? (
          isAdmin && (
            <>
              <Link
                href="/admin"
                className={`min-w-[100px] p-2 rounded-3xl font-medium text-center ${
                  pathName === "/admin" ? "bg-white text-bgPrime" : ""
                }`}
              >
                Admin
              </Link>
              <button
                className="bg-white p-2 rounded-sm font-bold text-center text-bgPrime cursor-pointer"
                onClick={handleLogin}
              >
                Logout
              </button>
            </>
          )
        ) : (
          <Link
            href="/login"
            className="min-w-[100px] p-2 rounded-3xl font-medium text-center"
            onClick={handleLogin}
          >
            Login
          </Link>
        )}
      </div>

      <div>
        <IoMenuSharp
          onClick={() => setOpen(!open)}
          className="block md:hidden text-3xl cursor-pointer"
        />
        <div className="block md:hidden ">
          {open && (
            <div className="flex flex-col h-[calc(100vh-100px)] w-[50%] items-center justify-center absolute  right-0 gap-3 bg-bgPrime z-40">
              {links.map((link) => (
                <Link
                  href={link.path}
                  key={link.title}
                  className={`min-w-[100px] p-2 rounded-3xl font-medium text-center ${
                    pathName === link.path ? "bg-white text-bgPrime" : ""
                  }`}
                >
                  {link.title}
                </Link>
              ))}
              {session ? (
                isAdmin && (
                  <div className="flex flex-col gap-[10px] items-center">
                    <Link
                      href="/admin"
                      className={`min-w-[100px] p-2 rounded-3xl font-medium text-center ${
                        pathName === "/admin" ? "bg-white text-bgPrime" : ""
                      }`}
                    >
                      Admin
                    </Link>
                    <button
                      className="bg-white  p-2 rounded-sm font-bold text-center text-bgPrime cursor-pointer"
                      onClick={handleLogin}
                    >
                      Logout
                    </button>
                  </div>
                )
              ) : (
                <Link
                  href="/login"
                  className="min-w-[100px] p-2 rounded-3xl font-medium text-center"
                  onClick={handleLogin}
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Links;
