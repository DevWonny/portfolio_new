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
        <p>기간 : 2025.09 ~ 2025.11</p>
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

      {isDetailOpen && (
        <div className="detail-container flex flex-col">
          <div className="detail-content flex flex-col">
            <h2>프로젝트 개요</h2>
            <p>{`Stock Dashboard는 WebSocket 기반 실시간 주식 데이터 시각화를 목표로 한 개인 대시보드 프로젝트입니다.`}</p>
            <p>{`실시간으로 변동되는 주식 데이터를 수신하여 차트와 UI에 즉시 반영하는 구조로, 단일 페이지 기반의 대시보드 형태로 구성했습니다.`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>기획 의도</h2>
            <p>{`REST API 중심의 데이터 처리에서 한 단게 나아가, 실시간 데이터 수신 / 상태 반영 / 차트 업데이트 흐름을 프론트엔드에서 직접 경험하고 구조적으로 이해하기 위해 기획했습니다. `}</p>
            <p>{`WebSocket(Socket.io)을 활용한 실시간 통신 구조 이해`}</p>
            <p>{`실시간 데이터에 따른 UI 및 상태 동기화 경험`}</p>
            <p>{`프론트엔드 - 서버 간 데이터 흐름 설계 연습`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>주요 기능</h2>
            <p>{`WebSocket을 활용한 실시간 주식 데이터 수신`}</p>
            <p>{`실시간 데이터 기반 차트 렌더링`}</p>
            <p>{`주식 가격 변동에 따른 UI 즉시 반영`}</p>
            <p>{`메인 단일 페이지 구조의 대시보드 구성`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>기술적 포인트</h2>
            <p>{`Socket.io 기반 실시간 통신 구조 구현`}</p>
            <p>{`Express 서버를 활용한 간단한 백엔드 구성`}</p>
            <p>{`Finnhub API를 활용한 주식 데이터 수집`}</p>
            <p>{`Websocket 이벤트 흐름 설계 (서버 수신 -> 클라이언트 emit -> UI 반영)`}</p>
            <p>{`Lightweight Charts를 활용한 실시간 차트 구성`}</p>
            <p>{`Next.js + TypeScript 기반 프로젝트 구조 설계`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>아쉬운 점</h2>
            <p>{`실시간 데이터 흐름 검증을 우선시 하여 백엔드의 기능을 최소 구성`}</p>
            <p>{`초기 구현 단계에서 반응형 UI 적용 미흡`}</p>
            <p>{`Open API의 특성상 국내 주식 데이터 확인에 제약 발생`}</p>
            <p>{`Websocket 연결 안정성 및 예외 상황(재연결, 네트워크 오류 등)에 대한 처리 부족`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>성과 및 경험</h2>
            <p>{`Websocket 기반 실시간 데이터 흐름을 직접 설계하고, 차트 UI와 상태 동기화를 구현한 프로젝트 경험`}</p>
          </div>
        </div>
      )}
    </div>
  );
}
