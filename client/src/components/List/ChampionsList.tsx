import React, { useState } from "react";
import { Link } from "react-router-dom";
import championImage from "../../assets/images/champions/champions.webp";
import "./ChampionsList.scss";

type Props = {};

const ChampionsList = (props: Props) => {
  const [visibleItems, setVisibleItems] = useState(20);
  const totalChampions = 119;
  // list champions
  // list champions
  const champions = Array.from({ length: totalChampions }, (_, i) => i + 1);

  // Handle show more button click
  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 20, totalChampions));
  };

  return (
    <>
      <div className="all-champions">
        {champions.slice(0, visibleItems).map((champion, index) => (
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
      {visibleItems < totalChampions && (
        <div className="show-more">
          <button onClick={handleShowMore}>Xem thêm</button>
        </div>
      )}
    </>
  );
};

export default ChampionsList;
