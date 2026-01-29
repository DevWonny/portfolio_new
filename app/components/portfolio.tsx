"use client";
import { useState } from "react";
// components
import PortfolioFanfan from "./portfolio_fanfan";
import PortfolioAuton from "./portfolio_auton";
import PortfolioBookmarker from "./portfolio_bookmarker";
import PortfolioDashboard from "./portfolio_stockdashboard";

// style
import "@/styles/components/portfolio.scss";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onClickLabel = (labelIndex: number) => {
    if (labelIndex === activeIndex) {
      setActiveIndex(null);
      return;
    }

    setActiveIndex(labelIndex);
  };

  return (
    <div className="portfolio-wrap h-full">
      <h1 className="title">Portfolio</h1>
      <div className="division"></div>

      <div className="portfolio-contents flex justify-between h-full">
        <div className="list-container">
          <div className="company-container">
            <h2 className="label">Company Projects</h2>
            <p
              className={`project-label ${activeIndex === 1 && "active"}`}
              onClick={() => onClickLabel(1)}
            >
              FanFan Project
            </p>
            <p
              className={`project-label ${activeIndex === 2 && "active"}`}
              onClick={() => onClickLabel(2)}
            >
              오토엔 Project
            </p>
          </div>

          <div className="personal-container">
            <h2 className="label">Personal Projects</h2>
            <p
              className={`project-label ${activeIndex === 3 && "active"}`}
              onClick={() => onClickLabel(3)}
            >
              Bookmarker
            </p>
            <p
              className={`project-label ${activeIndex === 4 && "active"}`}
              onClick={() => onClickLabel(4)}
            >
              StockDashboard
            </p>
          </div>
        </div>

        <div className="detail-wrap">
          {activeIndex === 1 ? (
            <PortfolioFanfan />
          ) : activeIndex === 2 ? (
            <PortfolioAuton />
          ) : activeIndex === 3 ? (
            <PortfolioBookmarker />
          ) : (
            activeIndex === 4 && <PortfolioDashboard />
          )}
        </div>
      </div>
    </div>
  );
}
