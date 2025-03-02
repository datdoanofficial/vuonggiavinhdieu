import React from "react";
import { Link } from "react-router-dom"; // import Link
import "./StoreBtn.scss";

type Props = {};

const StoreBtn = (props: Props) => {
  return (
    <Link to="/store" className="store_button">
      <span className="mingcute--coin-3-fill icon"></span>
      Cửa hàng
    </Link>
  );
};

export default StoreBtn;
