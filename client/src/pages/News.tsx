import React from "react";
import NewsBanner from "../components/Cards/NewsBanner";
import NewsFeatured from "../components/Cards/NewsFeatured";
import NewsList from "../components/List/NewsList";

import "../styles/pages/News.scss";

type Props = {};

const News = (props: Props) => {
  return (
    <div className="news-body">
      <NewsBanner />
      <NewsFeatured />
      <NewsList />
    </div>
  );
};

export default News;
