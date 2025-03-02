import React from "react";
import largeBanner from "../../assets/images/news/banner/banner-01.webp";
import miniBanner1 from "../../assets/images/news/banner/banner-02.webp";
import miniBanner2 from "../../assets/images/news/banner/banner-03.webp";
import miniBanner3 from "../../assets/images/news/banner/banner-04.webp";
import miniBanner4 from "../../assets/images/news/banner/banner-05.webp";
import "./NewsBanner.scss";

type Props = {};

const NewsBanner = (props: Props) => {
  return (
    <div className="news-wrapper">
      <div className="title">Tin giới thiệu</div>
      <div className="all-banner">
        <div className="large-banner">
          <img src={largeBanner} alt="" />
          <div className="text-in-banner">Bất dạ Trường An</div>
        </div>
        <div className="mini-banner">
          <div className="mini-banner-item">
            <img src={miniBanner1} alt="" />
            <div className="text-in-banner">
              Các dĩ văn truyền, nhất tự thiên niên.
            </div>
          </div>
          <div className="mini-banner-item">
            <img src={miniBanner2} alt="" />
            <div className="text-in-banner">
              Điêu Thuyền yêu nhĩ khoái lạc Hồ Toàn
            </div>
          </div>
          <div className="mini-banner-item">
            <img src={miniBanner3} alt="" />
            <div className="text-in-banner">Vĩnh vô quy kỳ đích ước định.</div>
          </div>
          <div className="mini-banner-item">
            <img src={miniBanner4} alt="" />
            <div className="text-in-banner">
              Tiền thế kim sinh, giai hướng tây hành.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
