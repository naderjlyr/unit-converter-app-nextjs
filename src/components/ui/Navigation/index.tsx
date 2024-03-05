"use client";
import Link from "next/link";
import { navLinks } from "@/config";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-2 md:py-4">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="text-white font-semibold text-lg md:text-xl p-2">
          cFlox Converter
        </div>

        {/* Navigation Links */}
        <div
          className="block w-full md:flex md:items-center md:w-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-white md:text-sm lg:text-base">
            {navLinks.map((link) => (
              <li key={link.title} className="nav-item">
                <Link
                  prefetch={true}
                  href={link.href}
                  className="flex items-center hover:text-gray-300 p-2 rounded-lg transition-colors duration-200"
                  data-cy={`nav-link-${link.title.toLowerCase()}`}
                >
                  {link.icon && <link.icon className="mr-2 w-5 h-5" />}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
