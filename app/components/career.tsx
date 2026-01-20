"use client";
// style
import "@/styles/components/career.scss";

export default function Career() {
  return (
    <div className="career-wrap h-full">
      <h1 className="title">Career</h1>
      <div className="division"></div>
      {/* 세로 연혁 방식으로 표출, 직장 + 나의 역활 */}

      <section className="timeline-container relative">
        <div className="timeline-item flex relative">
          <div className="dot"></div>
          <div className="timeline-content flex flex-col">
            <span className="date">2022.02 ~ 2022.08</span>
            <h3>프래프</h3>
            <p>Frontend Developer</p>
            <ul className="tech-list">
              <li>Tech</li>
              <li>React, Javascript, REST API 연동</li>
            </ul>

            <ul className="role-list">
              <li>Role</li>
              <li>신규 프로젝트 진행</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item flex relative">
          <div className="dot"></div>
          <div className="timeline-content flex flex-col">
            <span className="date">2022.11 ~ 2025.01</span>
            <h3>비투지게임즈</h3>
            <p>Frontend Developer</p>
            <ul className="tech-list">
              <li>Tech</li>
              <li>Vue.js, Nuxt.js, Typescript, Pinia</li>
            </ul>

            <ul className="role-list">
              <li>Role</li>
              <li>신규 프로젝트 진행</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
