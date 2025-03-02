import React from "react";
import ChampionsFilter from "../components/Filter/ChampionsFilter";
import ChampionsList from "../components/List/ChampionsList";
import champions_bg from "../assets/images/backgrounds/champion-bg.webp";

import "../styles/pages/Champions.scss";

type Props = {};

const Champions = (props: Props) => {
  return (
    <div className="champions-body">
      <div className="background-img">
        <img src={champions_bg} alt="" />
      </div>
      <ChampionsFilter />
      <ChampionsList />
    </div>
  );
};

export default Champions;
