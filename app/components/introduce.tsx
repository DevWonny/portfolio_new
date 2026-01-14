"use client";

// style
import "@/styles/components/introduce.scss";
import { Github, FileUser } from "lucide-react";

export default function Introduce() {
  return (
    // * 각 라벨 옆에 아이콘 넣기(맥북에서)!
    <div className="introduce-wrap flex flex-col items-center">
      <div className="profile-container flex flex-col items-center">
        <div className="profile-picture"></div>
        <p className="profile-name">윤철원</p>
        <p className="profile-category">Frontend Developer</p>
      </div>

      <div className="bot-container flex flex-col">
        <div className="birth-container">
          <p className="label">BIRTH</p>
          <p className="content">1994.02.16</p>
        </div>

        <div className="phone-container">
          <p className="label">PHONE</p>
          <p className="content">010-9243-9717</p>
        </div>

        <div className="email-container">
          <p className="label">EMAIL</p>
          {/* 클릭 시 복사 */}
          <p className="content">cjfdnjs1994@naver.com</p>
        </div>

        <div className="etc-container flex justify-between">
          <div className="git-container flex flex-col items-center">
            <p className="label">GITHUB</p>
            <div className="icon flex items-center justify-center">
              <Github />
              {/* 아이콘 넣기. 클릭시 해당 페이지 새창 오픈 */}
            </div>
          </div>

          <div className="resume-container flex flex-col items-center">
            <p className="label">RESUME</p>
            <div className="icon flex items-center justify-center">
              <FileUser />
              {/* 아이콘 넣기. 클릭시 다운로드 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
