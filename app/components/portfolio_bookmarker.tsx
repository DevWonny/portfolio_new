"use client";

export default function PortfolioBookmarker() {
  return (
    <div className="bookmarker-container">
      <h2 className="title">Bookmarker</h2>
      <p>소속 회사 : 개인 프로젝트</p>
      <p>
        사용 스택 : React / Next.js / Typescript / Zustand / Axios / TailwindCSS
        / SCSS
      </p>
      <p>현재 상태 : Live</p>
      <a
        href="https://bookmarker-liard.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        바로가기
      </a>
      <button>상세 보기</button>
      <div className="detail-container"></div>
    </div>
  );
}
