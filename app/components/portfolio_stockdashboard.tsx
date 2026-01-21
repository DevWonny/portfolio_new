"use client";

export default function PortfolioDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="title">Stock Dashboard</h2>
      <p>소속 회사 : 개인 프로젝트</p>
      <p>
        사용 스택 : React / Next.js / Typescript / Socket.io / Axios /
        Lightweight Charts / TailwindCSS / SCSS
      </p>
      <p>현재 상태 : Live</p>
      <p>바로가기</p>
      <button>상세 보기</button>
      <div className="detail-container"></div>
    </div>
  );
}
