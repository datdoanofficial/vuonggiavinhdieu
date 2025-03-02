import React from "react";
import "../styles/main/Home";
import "../styles/main/Home.scss";
import SearchBox from "../components/Common/SearchBox";
import CardAnimation from "../components/Cards/CardAnimation";
import MiniFooter from "../components/Common/MiniFooter";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="homeBody">
      <div className="header">
        <h1 className="title">
          欢迎来到<span>王者荣耀</span>
        </h1>
        <SearchBox />
      </div>
      <CardAnimation />
      <MiniFooter />
    </div>
  );
};

export default Home;
