import React from "react";
import "../styles/pages/ChampionsDetail.scss";
import "../styles/pages/ChampionsDetail";
import champion_bg from "../assets/images/champions/thumb/champion-01.webp";

// import component

import ChampionsHeading from "../components/Contents/ChampionsHeading";
import ChampionSkills from "../components/Contents/ChampionSkills";
import ChampionSkins from "../components/Contents/ChampionSkins";
import RelatedChampions from "../components/Contents/RelatedChampions";

type Props = {};

const ChampionsDetail = (props: Props) => {
  return (
    <div className="champions-detail">
      <div className="background-img">
        <img src={champion_bg} alt="" />
      </div>
      <ChampionsHeading />
      <ChampionSkills />
      <ChampionSkins />
      <RelatedChampions />
    </div>
  );
};

export default ChampionsDetail;
