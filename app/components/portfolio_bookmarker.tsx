"use client";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
// style
import "@/styles/components/portfolioPersonal.scss";

export default function PortfolioBookmarker() {
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
      <h2 className="title">Bookmarker</h2>
      <div className="brief-intro flex flex-col">
        <p>소속 회사 : 개인 프로젝트</p>
        <p>
          사용 스택 : React / Next.js / Typescript / Zustand / Axios /
          TailwindCSS / SCSS
        </p>
        <p>현재 상태 : Live</p>
        <a
          href="https://bookmarker-liard.vercel.app/"
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
            {/* 개요 수정, 기획의도 체크, 주요 기능 추가(지도) */}
            <h2>프로젝트 개요</h2>
            <p>{`Bookmarker는 읽고 싶은 도서나 관심 있는 책을 검색하고 저장할 수 있는 개인 북마크형 웹 서비스입니다.\nOpen API 기반의 데이터 조회부터 검색 / 탐색 / 저장 / 재확인까지 사용자 흐름을 고려한 프론트엔드 설계를 목표로 개발했습니다.`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>기획 의도</h2>
            <p>{`Open API를 활용한 실제 서비스 형태의 개인 프로젝트`}</p>
            <p>{`Next.js + Typescript 환경에서 프로젝트 구조 설계 연습`}</p>
            <p>{`사용자 관점에서의 로딩, 피드백, 인터랙션 개선에 대한 고민`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>주요 기능</h2>
            <p>도서 검색 기능 (Open API 연동)</p>
            <p>검색 결과 리스트 및 상세 정보 UI 구현</p>
            <p>관심 도서 북마크 기능</p>
            <p>저장한 도서 목록 관리 페이지</p>
            <p>Skeleton UI를 활용한 로딩 상태 처리</p>
            <p>Toast 알림을 통한 사용자 피드백 제공</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>기술적 포인트</h2>
            <p>{`Next.js 기반 프로젝트 구조 설계 및 페이지 구성`}</p>
            <p>{`Zustand를 활용한 전역 상태 관리`}</p>
            <p>{`React-loading-skeleton을 활용한 비동기 UX 개선`}</p>
            <p>{`SCSS와 Tailwind CSS를 병행 사용하여 스타일링 방식 비교 및 적용`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>아쉬운 점</h2>
            <p>{`반응형 UI에서일 미흡한 영역`}</p>
            <p>{`Open API 특성상 데이터 누락 및 제한 사항 경험`}</p>
            <p>{`전반적인 코드 구조 개선을 위한 리팩토링 필요 `}</p>
            <p>{`Form 구조에 대한 라이브러리 미활용`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>성과 및 경험</h2>
            <p>{`개인 프로젝트를 통해 Open API 연동, Zustand를 활용한 전역 상태 관리, 사용자 경험 개선 전반을 직접 설계하고 구현한 경험`}</p>
          </div>
        </div>
      )}
    </div>
  );
}
