"use client";

import React, { useState } from "react";
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Courses", icon: BookOpen },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <nav
        aria-label="Main navigation"
        className="hidden sm:flex flex-col border-r border-zinc-800 min-h-screen bg-black transition-all duration-300"
      >
        {/* Collapse Button */}
        <div className="flex justify-end p-2">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-2 rounded-lg hover:bg-zinc-900 transition"
            aria-label={
              collapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            {collapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </button>
        </div>

        <ul
          className={` 
            flex flex-col gap-4 transition-all duration-300
            ${
              collapsed
                ? "lg:w-20"
                : "lg:w-64"
            }
            md:w-20
          `}
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label} className="">
                <div className="relative group">
                  <button
                    className={`w-full flex justify-center items-center rounded-xl hover:bg-zinc-900 transition py-3
                      ${
                        collapsed
                          ? "justify-start"
                          : "px-4 gap-3"
                      }
                      md:justify-center lg:${
                        collapsed
                          ? "justify-start"
                          : "justify-start"
                      }
                    `}
                  >
                    <Icon size={20} />

                    {/* Label */}
                    <span
                      className={`
                        hidden
                        ${
                          !collapsed
                            ? "lg:inline"
                            : ""
                        }
                      `}
                    >
                      {item.label}
                    </span>
                  </button>

                  {/* Tooltip */}
                  <div
                    className={`
                      absolute left-full top-1/2 -translate-y-1/2 ml-3
                      px-2 py-1 rounded-md text-sm
                      bg-zinc-800 text-white
                      whitespace-nowrap
                      opacity-0 invisible
                      group-hover:opacity-100
                      group-hover:visible
                      transition
                      z-50
                      ${
                        collapsed
                          ? "lg:block"
                          : "lg:hidden"
                      }
                      md:block
                    `}
                  >
                    {item.label}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        className="sm:hidden fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-black flex justify-around py-2 z-30"
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