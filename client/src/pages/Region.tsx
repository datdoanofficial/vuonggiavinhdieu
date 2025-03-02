import React from "react";
import "../styles/pages/Region.scss";
import RegionList from "../components/List/RegionList";
import region_bg from "../assets/images/backgrounds/region-bg.webp";

type Props = {};

const Region = (props: Props) => {
  return (
    <div className="region-body">
      <div className="background-img">
        <img src={region_bg} alt="" />
      </div>
      <RegionList />
    </div>
  );
};

export default Region;
