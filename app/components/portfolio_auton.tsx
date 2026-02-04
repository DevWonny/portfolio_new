"use client";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
// style
import "@/styles/components/portfolioCompany.scss";

export default function PortfolioAuton() {
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
      <h2 className="title">오토앤</h2>
      <div className="brief-intro flex flex-col">
        <p>소속 회사 : 프래프</p>
        <p>주요 역할 : 프론트엔드 개발</p>
        <p>사용 스택 : React / Javascript / Axios </p>
        <p>기간 : 2022.05 ~ 2022.08 (약 3개월)</p>
        <p>
          투입 인원 : 디자이너 1명, 퍼블리셔 1명, 프론트엔드 개발자 3명, 백엔드
          개발자 2명
        </p>
        <p>현재 상태 : Closed Service</p>
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
          상세보기
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
            <p>{`자동차 관련 서비스를 제공하는 오토엔 모바일 앱 프론트엔드 개발 프로젝트로,\n회원가입부터 차량 등록, 예약, 마이페이지까지 유저의 핵심 사용 흐름 전반을 담당했습니다.`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>담당 역할</h2>
            <p>{`프론트엔드 개발`}</p>
            <p>{`회원가입 / 차량 등록 · 수정 / 예약 / 마이페이지 기능 구현`}</p>
            <p>{`백엔드 API 연동 및 사용자 입력 Validation 처리`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>주요 구현 내용</h2>
            <ul>
              <li className="sub-title">회원가입 및 차량 등록</li>
              <li>
                클라이언트 측 API 연동을 통한 회원가입 및 차량 등록 / 수정 기능
                구현
              </li>
              <li>공공 API(CAR 365)를 활용한 차량 정보 조회 기능 적용</li>
              <li>입력 값에 대한 Validation 처리로 사용자 입력 오류 최소화</li>
            </ul>

            <ul>
              <li className="sub-title">예약 페이지</li>
              <li>moment.js 기반 달력 UI 구현</li>
              <li>날짜 기반 검색 기능 구현으로 탐색 편의성 개선</li>
            </ul>

            <ul>
              <li className="sub-title">마이페이지</li>
              <li>백엔드 데이터 바인딩을 통한 사용자 정보 및 차량 정보 노출</li>
              <li>데이터 변경 시 화면 즉시 반영 처리</li>
            </ul>
          </div>

          <div className="detail-content flex flex-col">
            <h2>협업 및 개발 환경</h2>
            <p>{`React / Javascript 기반 개발`}</p>
            <p>{`디자이너 / 퍼블리셔 / 백엔드와 협업`}</p>
            <p>{`Swagger를 통한 API 기능 테스트 및 협업`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>성과 및 경험</h2>
            <p>{`실제 서비스 환경에서 API 연동 중심 프론트엔드 개발 경험`}</p>
            <p>{`사용자 플로우를 고려한 화면 구성 및 Validation 로직 설계`}</p>
            <p>{`협업을 통한 역할 분담 및 커뮤니케이션 경험`}</p>
          </div>
        </div>
      )}
    </div>
  );
}
