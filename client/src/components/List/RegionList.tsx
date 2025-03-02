import React from "react";
import "./RegionList.scss";
import RegionCard from "../Cards/RegionCard";
import RegionIcon from "../../assets/images/icons/region-icon.png";

type Props = {};

const RegionList = (props: Props) => {
  return (
    <div className="region-container">
      <div className="region-title">
        <img src={RegionIcon} alt="" />
        <p>Khu Vực</p>
      </div>
      <div className="region-list">
        {Array.from({ length: 11 }).map((_, index) => (
          <RegionCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default RegionList;
