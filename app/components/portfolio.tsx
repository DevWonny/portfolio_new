"use client";
// style
import "@/styles/components/portfolio.scss";
export default function Portfolio() {
  return (
    <div className="portfolio-wrap">
      <h1 className="title">Portfolio</h1>
      <div className="division"></div>

      <div className="portfolio-contents flex justify-between">
        <div className="list-container">
          <div className="company-container">
            <h2 className="label">Company Projects</h2>
            <p className="project-label active">FanFan Project</p>
            <p className="project-label">오토엔 Project</p>
          </div>

          <div className="personal-container">
            <h2 className="label">Personal Projects</h2>
            <p className="project-label">Bookmarker</p>
            <p className="project-label">StockDashboard</p>
          </div>
        </div>

        <div className="detail-container"></div>
      </div>
    </div>
  );
}
