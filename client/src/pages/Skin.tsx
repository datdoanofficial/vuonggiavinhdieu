import React from "react";
import SkinFilter from "../components/Filter/SkinFilter";
import SkinList from "../components/List/SkinList";
import skin_bg from "../assets/images/backgrounds/skin-bg.webp";

import "../styles/pages/Skin.scss";

type Props = {};

const Skin = (props: Props) => {
  return (
    <div className="skin-body">
      <div className="background-img">
        <img src={skin_bg} alt="" />
      </div>
      <SkinFilter />
      <SkinList />
    </div>
  );
};

export default Skin;
