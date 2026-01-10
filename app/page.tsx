"use client";
// component
import Introduce from "@/app/components/introduce";
// style
import "@/styles/main.scss";

export default function Main() {
  return (
    <div className="main-wrap flex xl:gap-[50px] max-xl:gap-[20px]">
      <Introduce />
      <div className="main-container relative">
        <div className="select-container absolute">
          <ul className="select-list flex h-full items-center justify-center">
            <li className="item">About</li>
            <li className="item">Career</li>
            <li className="item">Portfolio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
