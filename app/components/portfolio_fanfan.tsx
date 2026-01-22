"use client";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
// style
import "@/styles/components/portfolioCompany.scss";

export default function PortfolioFanfan() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const onDetailClick = () => {
    if (!isDetailOpen) {
      setIsDetailOpen(true);
    } else {
      setIsDetailOpen(false);
    }
  };

  return (
    <div className="company-container flex flex-col">
      <h2 className="title">FanFan Project</h2>
      <div className="brief-intro flex flex-col">
        <p>소속 회사 : 비투지 게임즈</p>
        <p>주요 역할 : 프론트엔드 개발 및 리딩</p>
        <p>
          사용 스택 : Vue.js / Nuxt.js / Typescript / Pinia / Axios / Chart.js /
          SCSS
        </p>
        <p>현재 상태 : Internal Project / Closed Service</p>
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
