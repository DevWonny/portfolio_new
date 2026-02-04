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
        <p>주요 역할 : 프론트엔드 개발 및 프로젝트 후반부 리딩</p>
        <p>
          사용 스택 : Vue.js / Nuxt.js / Typescript / Pinia / Axios / Chart.js /
          SCSS
        </p>
        <p>기간 : 2022.12 ~ 2025.01(약 2년 2개월)</p>
        <p>
          투입 인원 : 12명 ~ 15명 (프로젝트 진행 중 인력 교체로 인한 인원변동
          발생)
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

      {isDetailOpen && (
        <div className="detail-container flex flex-col">
          <div className="detail-content flex flex-col">
            {/* 개요 -> 프로젝트의 목적, 타겟 유저, 포지션 */}
            <h2>프로젝트 개요</h2>
            <p>{`해외 축구 리그의 실시간 및 기록 데이터를 기반으로 실존 선수 카드 수집 · 성장 · 거래를 중심으로 한 판타지 라이브 게임 서비스 개발 프로젝트입니다.\n실시간 경기 데이터를 활용한 판타지 라이브 모드와 자체 알고리즘 기반의 시뮬레이션 모드를 제공하며, 랭킹 경쟁·카드 거래·선수 정보 콘텐츠를 통해 몰입도를 강화했습니다`}</p>
          </div>

          <div className="detail-content flex flex-col">
            {/* 역할 및 기여도 -> 무엇을 맡았고, 얼마나 주도했는지 (수치화 + 담당 범위 명확히)*/}
            <h2>담당 역할</h2>
            <p>{`프론트엔드 개발`}</p>
            <p>{`전체 서비스 중 약 70% 페이지 참여`}</p>
            <p>{`게임 핵심 콘텐츠(판타지 게임 / 시뮬레이션) 100% 참여`}</p>
            <p>{`프로젝트 후반부 프론트엔드 개발 리딩 역할 수행\n(신규 인원 온보딩 및 작업 분배 / 주요 기능 구현 방향성 제시 및 코드리뷰)`}</p>
          </div>

          <div className="detail-content flex flex-col">
            {/* 핵심 기능 및 구현 내용 -> 문제 - 해결 방법 - 사용 기술 흐름으로 */}
            <h2>주요 구현 내용</h2>
            <ul>
              <li className="sub-title">메인 / 마이페이지 / 샵 / 랭킹</li>
              <li>공통 UI 컴포넌트 설계 및 API 연동</li>
              <li>Pinia 기반 전역 상태 관리 구조 설계</li>
            </ul>

            <ul>
              <li className="sub-title">판타지 게임(라이브 모드)</li>
              <li>실시간 경기 데이터를 반영한 UI 구성</li>
              <li>경기 흐름에 따른 점수 및 카드 상태 변경 로직 구현</li>
            </ul>

            <ul>
              <li className="sub-title">시뮬레이션 모드</li>
              <li>자체 알고리즘 결과에 따른 시뮬레이션 진행 UI 구현</li>
              <li>다중 탭 구조(4~5개) 및 상태 동기화 처리</li>
            </ul>

            <ul>
              <li className="sub-title">카드 관련 시스템</li>
              <li>플레이트 마켓(카드 구매)</li>
              <li>스카우트(카드 업그레이드)</li>
            </ul>
          </div>

          <div className="detail-content flex flex-col">
            {/* 기술 스텍 및 협업 방식  */}
            <h2>협업 및 개발 환경</h2>
            <p>{`Vue.js / Nuxt.js / Typescript 기반 SPA 개발`}</p>
            <p>{`Pinia를 활용한 전역 상태 관리`}</p>
            <p>{`Jira를 통한 이슈 관리 및 Notion 문서 협업`}</p>
            <p>{`Figma를 통한 디자인 및 기획 협업`}</p>
            <p>{`Postman을 활용한 API 테스트 및 협업`}</p>
          </div>

          <div className="detail-content flex flex-col">
            {/* 성과 및 배운점 */}
            <h2>성과 및 경험</h2>
            <p>{`대규모 페이지 및 상태 복잡도가 높은 프로젝트 구조 경험`}</p>
            <p>{`복잡한 구조와 UI 상태 동기화에 대한 이해도 향상`}</p>
            <p>{`장기 프로젝트에서 유지보수성과 확장성을 고려한 개발 경험`}</p>
            <p>{`프로젝트 후반부 프론트엔드 인력 변동 상황에서 기존 코드 구조를 정리하고 개발 방향을 리딩하며 안정적인 기능 개발을 유지`}</p>
          </div>
        </div>
      )}
    </div>
  );
}
