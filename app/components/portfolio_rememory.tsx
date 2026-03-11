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
      <h2 className="title">Re:Memory</h2>
      <div className="brief-intro flex flex-col">
        <p>소속 회사 : 개인 프로젝트</p>
        <p>
          사용 스택 : Next.js / Typescript / Tailwind CSS / SCSS / Three.js /
          Zustand / Swiper.js / Supabase / Vercel / Github Actions
        </p>
        <p>기간 : 2025.12 ~ 2026.03</p>
        <p>현재 상태 : Live</p>
        <a
          href="https://rememory-dev.vercel.app/"
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
            <p>{`Re:Memory는 여행지에서의 순간들을 카메라에 담아 보관하듯 기록할 수 있는 감성 기반 앨범 서비스입니다.`}</p>
            <p>{`단순히 사진을 나열하는 게시판 형태를 넘어, Three.js를 활용한 인터랙티브한 네비게이션과\n필름 프레임 UI를 통해 사용자에게 '기록의 즐거움'을 주는 프론트엔드 설계를 목표로 했습니다.`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>기획 의도</h2>
            <p>{`카메라와 필름이라는 아날로그적 매개체를 통해, 여행의 추억을 단순히 저장하는 것이 아니라\n"인화하고 간직하는"느낌의 특별한 기록 공간을 만들고자 했습니다.`}</p>
            <p>{`2D 웹 레이아웃에서 벗어나, 사용자가 3D 오브젝트를 직접 조작하고 반응을 얻는 과정을 통해\n서비스 진입 단계부터 몰입감을 느낄수 있는 인터랙티브 UX를 설계하고자 했습니다.`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>주요 기능</h2>
            <p>{`Blender로 모델링한 카메라 오브젝트를 마우스 드래그로 360도 회전하며 조작 가능`}</p>
            <p>{`카메라 오브젝트 상단의 셔터 버튼 클릭 시 업로드 페이지로 이동하는 직관적인 UX 설계`}</p>
            <p>{`유저가 생성한 여행지별 폴더 리스트를 메인 우측에서 한눈에 파악`}</p>
            <p>{`실제 사진 인화 느낌의 프레임 디자인을 적용하여 개별 사진 및 설명 확인 가능`}</p>
            <p>{`여행지 정보, 날짜, 사진들을 자유롭게 추가/삭제/수정할 수 있는 관리 기능`}</p>
            <p>{`Supabase Auth를 통한 안정적인 로그인 및 회원 정보 관리`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>기술적 포인트</h2>
            <p>{`Three.js의 Raycaster를 통해 캔버스 내 3D 모델의 특정 영역을 정확히 인식하여 이벤트를 처리하는 기능 구현`}</p>
            <p>{`로그인 및 회원가입의 인증 로직과 입력값 유효성 검사를 커스텀 훅으로 분리하여 가독성을 높이고 코드 유지보수성을 개선`}</p>
            <p>{`인터페이스 정의를 통해 유저 및 앨범 데이터의 타입을 엄격히 관리하여 런타임 에러를 사전에 방지`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>아쉬운 점</h2>
            <p>{`페이지 전환 시 애니메이션이나 효과음 등 사용자에게 즉각적인 피드백을 줄 수 있는 장치가 부족했던 점`}</p>
            <p>{`무료 티어 서버 사용으로 인한 고용량 이미지 로딩 속도의 한계`}</p>
          </div>

          <div className="detail-content flex flex-col">
            <h2>성과 및 경험</h2>
            <p>{`Blender로 직접 제작한 모델을 웹 환경에 맞게 최적화하여 렌더링하는 전체 프로세스를 경험`}</p>
            <p>{`단순한 시각화를 넘어, 유저의 입력 이벤트에 반응하는 몰입형 UI를 설계하며 UX 디자인 감각을 키움`}</p>
            <p>{`폼 처리와 인증 과정을 커스텀 훅으로 관리하며, 프론트엔드에서 효율적인 로직 설계를 직접 체감`}</p>
            <p>{`any타입 사용을 지양하고 엄격한 타입 정의를 지향함으로써, 데이터 흐름을 명확히 파악하고\n협업에 용이한 코드 작성 습관을 키움`}</p>
            <p>{`Supabase를 활용해 백엔드 인프라를 직접 구축하고 연동하며 서비스 전체 라이프 사이클을 이해 `}</p>
          </div>
        </div>
      )}
    </div>
  );
}
