"use client";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
// style
import "@/styles/components/portfolioPersonal.scss";

export default function PortfolioDashboard() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const onDetailClick = () => {
    if (!isDetailOpen) {
      setIsDetailOpen(true);
    } else {
      setIsDetailOpen(false);
    }
  };

  return (
    <div className="personal-container flex flex-col">
      <h2 className="title">Stock Dashboard</h2>
      <div className="brief-intro flex flex-col">
        <p>소속 회사 : 개인 프로젝트</p>
        <p>
          사용 스택 : React / Next.js / Typescript / Socket.io / Axios /
          Lightweight Charts / TailwindCSS / SCSS
        </p>
        <p>현재 상태 : Live</p>
        <a
          href="https://stock-dashboard-ten-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          바로가기
        </a>
      </div>

      {isDetailOpen ? (
        <button onClick={onDetailClick}>
          닫기
          <Icon
            icon="material-symbols:arrow-drop-up-rounded"
            width="24"
            height="24"
          />
        </button>
      ) : (
        <button onClick={onDetailClick}>
          상세 보기
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            width="24"
            height="24"
          />
        </button>
      )}

      {isDetailOpen && <div className="detail-container"></div>}
    </div>
  );
}
