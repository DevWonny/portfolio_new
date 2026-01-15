/* eslint-disable @next/next/no-img-element */
"use client";
import { Icon } from "@iconify-icon/react";
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
        <ul className="text">
          <li>{`기능을 구현하기 전에 기획 및 디자인을 확인하고 구현 가능 범위에 대해
        사전에 공유합니다.`}</li>
          <li>{`애매한 요구사항은 개발 이전에 담당자와 빠르게
        논의하여 방향을 명확히 합니다.`}</li>
          <li>{`코드 구조와 네이밍은 길어지더라도
        의도가 명확히 들어나도록 작성하며, 협업 중인 팀원들이 바로 이해할 수
        있는 형태를 지향합니다.`}</li>
        </ul>
      </div>

      <div className="stack-container">
        <div className="badge">Stack</div>
        <div className="stack-list flex flex-wrap justify-start w-full">
          {/* Language */}
          <div className="stack-item ">
            <h3>Language</h3>
            <div className="item-container ">
              <div className="item">
                <Icon icon="devicon-plain:javascript" width="64" height="64" />
                <p className="label">Javascript</p>
              </div>

              <div className="item">
                <Icon icon="devicon-plain:typescript" width="64" height="64" />
                <p className="label">Typescript</p>
              </div>
            </div>
          </div>

          {/* Framework */}
          <div className="stack-item ">
            <h3>Framework</h3>
            <div className="item-container ">
              <div className="item">
                <Icon icon="simple-icons:react" width="64" height="64" />
                <p className="label">React</p>
              </div>
              <div className="item">
                <Icon icon="simple-icons:vuedotjs" width="64" height="64" />
                <p className="label">Vue</p>
              </div>
            </div>
          </div>

          {/* Meta Framework */}
          <div className="stack-item ">
            <h3>Meta Framework</h3>
            <div className="item-container ">
              <div className="item">
                <Icon icon="devicon-plain:nextjs" width="64" height="64" />
                <p className="label">Next.js</p>
              </div>
              <div className="item">
                <Icon icon="devicon-plain:nuxtjs" width="64" height="64" />
                <p className="label">Nuxt.js</p>
              </div>
            </div>
          </div>

          {/* Styling */}
          <div className="stack-item">
            <h3>Styling</h3>
            <div className="item-container">
              <div className="item">
                <Icon icon="simple-icons:sass" width="64" height="64" />
                <p className="label">SCSS</p>
              </div>
              <div className="item">
                <Icon icon="simple-icons:tailwindcss" width="64" height="64" />
                <p className="label">Tailwind CSS</p>
              </div>
            </div>
          </div>

          {/* State Management */}
          <div className="stack-item">
            <h3>State Management</h3>
            <div className="item-container">
              <div className="item">
                <Icon icon="devicon-plain:zustand" width="64" height="64" />
                <p className="label">Zustand</p>
              </div>
              <div className="item">
                <Icon icon="simple-icons:pinia" width="64" height="64" />
                <p className="label">Pinia</p>
              </div>
            </div>
          </div>

          {/* Collaboration */}
          <div className="stack-item">
            <h3>Collaboration</h3>
            <div className="item-container">
              <div className="item">
                <Icon icon="simple-icons:github" width="64" height="64" />
                <p className="label">GitHub</p>
              </div>
              <div className="item">
                <Icon icon="simple-icons:bitbucket" width="64" height="64" />
                <p className="label">Bitbucket</p>
              </div>
              <div className="item">
                <Icon icon="simple-icons:jira" width="64" height="64" />
                <p className="label">Jira</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certification-container">
        <div className="badge">Certification</div>
        <div className="text">{`정보처리기사 (2021.06)`}</div>
      </div>
    </div>
  );
}
