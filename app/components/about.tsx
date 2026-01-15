"use client";
// style
import "@/styles/components/about.scss";

export default function About() {
  return (
    <div className="about-wrap">
      <h1 className="title">About</h1>
      <div className="division"></div>
      <div className="intro-container">
        <div className="badge">Introduction</div>
        <div className="text">{`안녕하세요.\n개발 과정에서 소통비용을 줄이는 것을 목표로 생각하는 3년차 프론트엔드 개발자 윤철원입니다.\nReact 기반의 초기 실무 경험 이후 Vue/Nuxt.js/Typescript 환경에서 2년 이상 근무하며\n기획 및 디자인 단계부터 구현 방식과 기술적 제약을 함께 논의해왔습니다.`}</div>
      </div>
      <div className="style-container">
        <div className="badge">My Style</div>
        <div className="text">
          - 기능을 구현하기 전에 기획 및 디자인을 확인하고 구현 가능 범위에 대해
          사전에 공유합니다 - 애매한 요구사항은 개발 이전에 담당자와 빠르게
          논의하여 방향을 명확히 합니다 - 코드 구조와 네이밍은 길어지더라도
          의도가 명확히 들어나도록 작성하며, 협업 중인 팀원들이 바로 이해할 수
          있는 형태를 지향합니다.
        </div>
      </div>
      <div className="stack-container">
        <div className="badge">Stack</div>
        <div className="text">
          Language - Javascript, Typescript Framework - React, Vue Meta
          Framework - Next.js, Nuxt.js Styling - SCSS, Tailwind CSS State
          Management - Zustand, Pinia
        </div>
      </div>
    </div>
  );
}
