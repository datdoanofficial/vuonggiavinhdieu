import React from "react";
import { Link } from "react-router-dom";
import "./NewsFeatured.scss";
import featured1 from "../../assets/images/news/featured/featured-01.webp";
import featured2 from "../../assets/images/news/featured/featured-02.webp";
import featured3 from "../../assets/images/news/featured/featured-03.webp";
import featured4 from "../../assets/images/news/featured/featured-04.webp";

type Props = {};

const NewsFeatured = (props: Props) => {
  return (
    <div className="featured">
      <div className="title">Tin nổi bật</div>
      <div className="news-featured">
        <div className="featured-item">
          <img src={featured1} alt="" />
          <div className="inner-text">
            <div className="title">Tin tức trang phục</div>
            <Link to="/news" className="read-more">
              <span className="text">Xem thêm</span>
              <span className="guidance--right-arrow"></span>
            </Link>
          </div>
        </div>
        <div className="featured-item">
          <img src={featured2} alt="" />
          <div className="inner-text">
            <div className="title">Tin tức anh hùng</div>
            <Link to="/news" className="read-more">
              <span className="text">Xem thêm</span>
              <span className="guidance--right-arrow"></span>
            </Link>
          </div>
        </div>
        <div className="featured-item">
          <img src={featured3} alt="" />
          <div className="inner-text">
            <div className="title">Tin tức sự kiện</div>
            <Link to="/news" className="read-more">
              <span className="text">Xem thêm</span>
              <span className="guidance--right-arrow"></span>
            </Link>
          </div>
        </div>
        <div className="featured-item">
          <img src={featured4} alt="" />
          <div className="inner-text">
            <div className="title">Tin tức giải đấu</div>
            <Link to="/news" className="read-more">
              <span className="text">Xem thêm</span>
              <span className="guidance--right-arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeatured;
