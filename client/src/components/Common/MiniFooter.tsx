import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import wechatQR from "../../assets/images/icons/wechat-qr.png";
import qqQR from "../../assets/images/icons/qq-qr.png";
import instaQR from "../../assets/images/icons/insta-qr.png";

import brandName from "../../assets/images/logos/brand-name.png";
import "./MiniFooter.scss";

type Props = {};

const MiniFooter = (props: Props) => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer">
      <div className="download-guide">
        <Logo />
        {!isTablet && <span className="text">Hướng dẫn tải game</span>}
        <Link to="/download-guide" className="download-btn">
          {isMobile ? "Tải game" : isTablet ? "Hướng dẫn tải game" : "Truy cập"}
        </Link>
        <div className="social-contact">
          <span className="copy-right-txt">
            Design and Development <img src={brandName} alt="" />
          </span>
          <div className="wechat-contact" id="wechat-contact">
            <span className="ic--sharp-wechat"></span>
          </div>
          <div className="qq-contact" id="qq-contact">
            <span className="basil--qq-solid"></span>
          </div>
          <div className="insta-contact" id="insta-contact">
            <span className="lets-icons--insta-duotone-line"></span>
          </div>
        </div>
      </div>
      <div className="wechat-contact-popup popup">
        <span className="line-md--close wechat-closeBtn"></span>
        <img src={wechatQR} alt="" />
        Liên hệ với admin qua Wechat.
      </div>
      <div className="qq-contact-popup popup">
        <span className="line-md--close qq-closeBtn"></span>
        <img src={qqQR} alt="" />
        Liên hệ với admin qua QQ.
      </div>
      <div className="insta-contact-popup popup">
        <span className="line-md--close insta-closeBtn"></span>
        <img src={instaQR} alt="" />
        Liên hệ với admin qua Instagram.
      </div>
    </div>
  );
};

export default MiniFooter;
