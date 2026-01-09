"use client";
// component
import Introduce from "@/app/components/introduce";
// style
import "@/styles/main.scss";

export default function Main() {
  return (
    <div className="main-wrap flex ">
      <Introduce />
      <div className="main-container w-full"></div>
    </div>
  );
}
