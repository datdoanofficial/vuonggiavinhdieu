import React from "react";
import "./Footer.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="txtFooter">
        Toàn bộ câu chuyện bối cảnh trong "Vương Giả Vinh Diệu" diễn ra ở thế
        giới giả tưởng "Vương Giả Đại Lục". Các nhân vật, địa danh và sự kiện
        liên quan đều là sáng tạo nghệ thuật, không phải là lịch sử chính thức.
        Nếu bạn quan tâm đến các nhân vật lịch sử liên quan sau khi xem câu
        chuyện Vương Giả, bạn nên tham khảo các ghi chép lịch sử chính thức.
      </div>
      <div className="copy-right">
        Copyright © 2024 DATDOAN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
