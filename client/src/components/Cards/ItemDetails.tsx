import React from "react";
import "./ItemDetails.scss";

type Props = {};

const ItemDetails = (props: Props) => {
  const getColor = (text: string) => {
    if (text.includes("orange")) {
      return "#ED712E";
    } else if (text.includes("green")) {
      return "#5EAF8C";
    } else if (text.includes("blue")) {
      return "#4286F5";
    } else if (text.includes("purple")) {
      return "#EB68F7";
    } else {
      return "#000"; // default color
    }
  };
  return (
    <div className="item-details">
      <div className="item-name">thiên khung</div>
      <div className="item-stats">
        <div
          className="line-01 line"
          style={{
            color: getColor("orange"),
          }}
        >
          +100 Giáp
        </div>
        <div
          className="line-02 line"
          style={{
            color: getColor("blue"),
          }}
        >
          +10% Giảm hồi chiêu
        </div>
        <div
          className="line-03 line"
          style={{
            color: getColor("green"),
          }}
        >
          +500 Máu tối đa
        </div>
      </div>
      <div className="item-passive">
        <div className="line-01 line">
          Bị động - Tàn Phế: Kỹ năng gây 30% làm chậm lên tướng địch đầu tiên
          trúng chiêu và khiến sát thương của tướng địch đó lên bản thân giảm
          20% trong 3 giây. Hiệu ứng này có 8 giây thời gian hồi chiêu.
        </div>
        <div className="line-02 line">
          Chủ động - Xua Tan: Giải trừ mọi hiệu ứng khống chế trên bản thân,
          nhận 40% giảm sát thương, tăng 30% tốc chạy và không bị địa hình cản
          trở trong 3 giây. Nếu hạ gục tướng địch trong thời gian này, thời gian
          hiệu lực sẽ được làm mới. Hiệu ứng có 90 giây thời gian hồi chiêu.
        </div>
      </div>
      <div className="item-story">
        Trong khoảnh khắc giao thoa giữa ánh sáng và bóng tối, vị vua chìm trong
        do dự và mất mát, cuối cùng đã đưa ra quyết định định mệnh.
      </div>
    </div>
  );
};

export default ItemDetails;
