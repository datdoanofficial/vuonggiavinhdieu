import React from "react";
import { Link } from "react-router-dom";
import championImage from "../../assets/images/champions/champions.webp";
import "./ChampionsCard.scss";

type Props = {};

const ChampionsCard = (props: Props) => {
  // list champions
  const champions = Array.from({ length: 1 }, (_, i) => i + 1);
  return (
    <div className="all-champions">
      {champions.map((champion, index) => (
        <Link to="/champions-detail" key={champion} className="champions">
          <div className="overlay">
            <span className="txtName">Phi</span>
            <div className="learn-more">Tìm hiểu thêm</div>
          </div>
          {index === 0 && <span className="new-tag">Mới</span>}
          <div className="image-container">
            <img src={championImage} alt={`Champion ${champion}`} />
          </div>
          <div className="championName">
            <span>Phi</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChampionsCard;
