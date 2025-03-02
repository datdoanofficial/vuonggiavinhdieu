import React from "react";
import lineIcon from "../../assets/images/icons/line.png";
import hrline from "../../assets/images/icons/hr.png";
import chevronDownIcon from "../../assets/images/icons/chevron-down.png";
import "./ChampionsHeading.scss";

type Props = {};

const ChampionsHeading = (props: Props) => {
  return (
    <>
      <div className="champions-name">
        Phi
        <img src={chevronDownIcon} alt="" />
      </div>
      <div className="title">
        <img src={lineIcon} alt="" className="left-line" />
        <div className="title-text">Tự đắc kỳ lạc, thục thị thục phi.</div>
        <img src={lineIcon} alt="" className="right-line" />
      </div>
      <img src={hrline} alt="" className="hrline" />
      <div className="introduction">
        Phi ở Ngọc Thành có thể nói là nhà nhà đều biết: một là vì ra tay hào
        phóng và thân phận đại vương tử, hai là nhờ vào việc "không làm việc
        đàng hoàng" của anh ta. Nhưng mọi người không hề biết, vị đại vương tử
        này nhìn như phóng túng hoang phí, chơi bời lêu lổng, lại luôn âm thầm
        lặng lẽ bảo vệ tất cả, tìm kiếm chân tướng đằng sau sự phồn hoa của Ngọc
        Thành... Mặc dù mọi người bàn tán xôn xao, nhưng anh ta không quan tâm,
        cũng lười trở thành hình mẫu mà ai đó công nhận. Chỉ là khi đêm khuya
        thanh vắng, liệu có ai chú ý đến bóng dáng nhẹ nhàng phóng khoáng trên
        mái nhà trong thành?
      </div>
      <button className="see-more-btn">Xem thêm</button>
    </>
  );
};

export default ChampionsHeading;
