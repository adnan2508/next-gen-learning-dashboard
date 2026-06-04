"use client";

import React from "react";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Courses", icon: BookOpen },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <>
      {/* ================= Desktop / Tablet Sidebar ================= */}
      <nav
        aria-label="Main navigation"
        className="
          hidden sm:flex flex-col
          border-r border-zinc-800
          min-h-screen
          bg-black
        "
      >
        <ul
          className="
            flex flex-col gap-4 py-6
            md:w-20 lg:w-64
            transition-all
          "
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <button
                  className="
                    w-full flex items-center gap-3
                    px-4 py-3 rounded-xl
                    hover:bg-zinc-900 transition
                    md:justify-center lg:justify-start
                  "
                >
                  <Icon size={20} />
                  <span className="hidden lg:inline">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ================= Mobile Bottom Navigation ================= */}
      <nav
        className="
          sm:hidden fixed bottom-0 left-0 right-0
          border-t border-zinc-800 bg-black
          flex justify-around py-2
        "
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex flex-col items-center text-xs gap-1"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}