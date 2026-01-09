"use client";
// component
import Introduce from "@/app/components/introduce";
// style
import "@/styles/main.scss";

export default function Main() {
  return (
    <div className="main-wrap flex xl:gap-[50px] max-xl:gap-[20px]">
      <Introduce />
      <div className="main-container"></div>
    </div>
  );
}
