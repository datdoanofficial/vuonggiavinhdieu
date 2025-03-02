import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import GrowthGuardianBtn from "../Common/GrowthGuardianBtn";
import StoreBtn from "../Common/StoreBtn";
import Button from "../Common/Button";
import Logo from "../Common/Logo";
import Navbar from "../Common/Navbar";
import growthIcon from "../../assets/images/icons/growth_icon.png";

// scss
import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActivePage(location.pathname);
    window.scrollTo(0, 0);
  }, [location]);

  const headerClass =
    activePage === "/" ? "homepage-header" : "otherpage-header";

  return (
    <div className={`header-wrapper ${headerClass}`}>
      <Logo />
      <Navbar />
      <div className="nav_tool">
        <div className="menu-container">
          <div
            className={`menu-icon ${isMenuOpen ? "active" : ""}`}
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <span className="ic--round-dashboard"></span>
            {isMenuOpen && (
              <div className="menu-dropdown">
                <Link to="/store" className="menu-item store">
                  <span className="mingcute--coin-3-fill icon"></span>
                  Cửa hàng
                </Link>
                <Link to="/health-system" className="menu-item growth-guardian">
                  <img src={growthIcon} alt="growth_guardian" />
                  Hệ thống y tế
                </Link>
                <Link to="/login" className="menu-item login-button">
                  <span className="material-symbols--login-rounded icon"></span>
                  Đăng Nhập
                </Link>
                <ul className="menu-links">
                  <li>
                    <a href="/">
                      <div className="icon">
                        <span className="mingcute--home-3-line"></span>
                      </div>
                      Trang Chủ
                    </a>
                  </li>
                  <li>
                    <a href="/champions">
                      <div className="icon">
                        <span className="game-icons--kenku-head"></span>
                      </div>
                      Tướng
                    </a>
                  </li>
                  <li>
                    <a href="/skin">
                      <div className="icon">
                        <span className="majesticons--t-shirt-line"></span>
                      </div>
                      Trang Phục
                    </a>
                  </li>
                  <li>
                    <a href="/item">
                      <div className="icon">
                        <span className="ph--sword-fill"></span>
                      </div>
                      Trang Bị
                    </a>
                  </li>
                  <li>
                    <a href="/region">
                      <div className="icon">
                        <span className="basil--location-solid"></span>
                      </div>
                      Khu Vực
                    </a>
                  </li>
                  <li>
                    <a href="/news">
                      <div className="icon">
                        <span className="material-symbols--breaking-news-alt-1-outline-rounded"></span>
                      </div>
                      Tin Tức
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <StoreBtn />
        <GrowthGuardianBtn />
        <Button />
      </div>
    </div>
  );
};

export default Header;
