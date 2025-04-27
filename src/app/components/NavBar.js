"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="navbar shadow-sm bg-[#1e1e1e]">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-soft bg-[#1e1e1e] px-3 py-3 mr-3 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#1e1e1e] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/" className="hover:bg-amber-50 hover:text-base-100 rounded-lg">
                home
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:bg-amber-50 hover:text-base-100">
                features
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:bg-amber-50 hover:text-base-100">
                dashboard
              </Link>
            </li>
            <li>
              <a className="hover:bg-amber-50 hover:text-base-100">more</a>
              <ul className="p-2">
                <li>
                  <Link href="/about" className="hover:bg-amber-50 hover:text-base-100">
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:bg-amber-50 hover:text-base-100">
                    contact
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="flex items-center hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <img
            src="/img/opportune_grey_logo.png"
            alt="Opportune Logo"
            className="h-12 w-12 rounded-2xl mr-2"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/features"
              className={`hover:bg-amber-50 hover:text-base-100 rounded-lg ${
                pathname.startsWith("/features")
                  ? "bg-amber-100 text-base-100"
                  : "text-amber-50"
              }`}
            >
              features
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={`hover:bg-amber-50 hover:text-base-100 rounded-lg ${
                pathname.startsWith("/dashboard")
                  ? "bg-amber-100 text-base-100"
                  : "text-amber-50"
              }`}
            >
              dashboard
            </Link>
          </li>
          <li>
            <details>
              <summary className="hover:bg-amber-50 hover:text-base-100 rounded-lg">
                more
              </summary>
              <ul className="p-1 text-amber-50 bg-[#1e1e1e]">
                <li>
                  <Link href="/about" className="hover:bg-amber-50 hover:text-base-100">
                    about us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:bg-amber-50 hover:text-base-100">
                    contact
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link href="/login">
          <button className="btn btn-outline text-sm rounded-xl px-4 py-1 hover:bg-amber-50 hover:text-base-100">
            login
          </button>
        </Link>
      </div>
    </div>
  );
}
