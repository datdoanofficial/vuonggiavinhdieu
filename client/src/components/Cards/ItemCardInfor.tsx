import React from "react";
import itemImg from "../../assets/images/items/items.webp";
import "./ItemCardInfor.scss";

type Props = {};

const ItemCardInfor = (props: Props) => {
  return (
    <div className="items">
      <img src={itemImg} className="itemImg" alt="item" />
      <div className="info-wrapper">
        <div className="item-name">Đúc Mộng · Phá Không</div>
        <div className="item-price">
          <span className="mingcute--copper-coin-fill"></span>
          <span className="numPrice">3370</span>
        </div>
        <div className="item-sell">
          <span className="mingcute--copper-coin-fill"></span>
          <span className="numPrice">2022</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCardInfor;
