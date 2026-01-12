"use client";
import { useState, useRef } from "react";
// component
import Introduce from "@/app/components/introduce";
import About from "@/app/components/about";
import Career from "@/app/components/career";
import Portfolio from "@/app/components/portfolio";
// style
import "@/styles/main.scss";

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="main-wrap flex xl:gap-[50px] max-xl:gap-[20px]">
      <Introduce />
      <div className="main-container relative">
        <div className="select-container absolute">
          <ul className="select-list flex h-full items-center justify-center">
            {Array.from({ length: 3 }, (_, index) => (
              <li
                key={`select-list-item-${index}`}
                className={`item cursor-pointer ${
                  activeIndex === index && "active"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {index === 0 ? "About" : index === 1 ? "Career" : "Portfolio"}
              </li>
            ))}
          </ul>
        </div>

        <div className="content w-full h-full">
          {activeIndex === 0 ? (
            <About />
          ) : activeIndex === 1 ? (
            <Career />
          ) : (
            <Portfolio />
          )}
        </div>
      </div>
    </div>
  );
}
