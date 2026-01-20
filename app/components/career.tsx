"use client";
// style
import "@/styles/components/career.scss";

export default function Career() {
  return (
    <div className="career-wrap">
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
              <li>React 기반 앱 서비스 프론트엔드 개발</li>
              <li>회원가입, 차량 등록/수정, 마이페이지 주요 기능 구현</li>
              <li>공공 API(Car 365) 연동 및 입력 Validation 로직 구현</li>
              <li>예약페이지 달력 UI 및 검색 기능 구현</li>
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
              <li>
                해외 축구 리그 데이터를 활용한 판타지 라이브 게임 서비스
                프론트엔드 개발
              </li>
              <li>
                메인, 마이페이지, 게임, 시뮬레이션, 마켓, 랭킹 등 전체 서비스의
                약 70% 페이지 개발 참여
              </li>
              <li>
                판타지 게임 및 시뮬레이션 모듈 기획~구현까지 100% 단독 개발
              </li>
              <li>
                UI 구성, API 연동, 상태 관리 로직을 포함한 프론트엔드 전반을 50%
                이상 책임
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
