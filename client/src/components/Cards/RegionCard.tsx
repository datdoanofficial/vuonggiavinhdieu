import React from "react";
import "./RegionCard.scss";
import regionImage from "../../assets/images/region/huyen-ung-thanh.webp";
type Props = {};

const RegionCard = (props: Props) => {
  return (
    <div className="region-card">
      <div className="region">
        <div className="overlay"></div>
        <div className="image-container">
          <img src={regionImage} alt="" />
        </div>
        <div className="card-info">
          <div className="name">Huyền Ung Thành</div>
          <div className="description">chùy luyện cường giả chi lô.</div>
        </div>
      </div>
    </div>
  );
};

export default RegionCard;
