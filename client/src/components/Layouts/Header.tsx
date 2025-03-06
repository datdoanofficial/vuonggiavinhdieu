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
    setIsMenuOpen(false); // Close menu when route changes
    window.scrollTo(0, 0);
  }, [location]);

  // Close menu on page load/reload
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

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
                {/* menu links */}
                <ul className="menu-links">
                  {[
                    {
                      path: "/",
                      icon: "mingcute--home-3-line",
                      label: "Trang Chủ",
                    },
                    {
                      path: "/champions",
                      icon: "game-icons--kenku-head",
                      label: "Tướng",
                    },
                    {
                      path: "/skin",
                      icon: "majesticons--t-shirt-line",
                      label: "Trang Phục",
                    },
                    {
                      path: "/item",
                      icon: "ph--sword-fill",
                      label: "Trang Bị",
                    },
                    {
                      path: "/region",
                      icon: "basil--location-solid",
                      label: "Khu Vực",
                    },
                    {
                      path: "/news",
                      icon: "material-symbols--breaking-news-alt-1-outline-rounded",
                      label: "Tin Tức",
                    },
                  ].map(({ path, icon, label }) => (
                    <li
                      key={path}
                      className={activePage === path ? "active" : ""}
                    >
                      <Link to={path}>
                        <div className="icon">
                          <span className={icon}></span>
                        </div>
                        {label}
                      </Link>
                    </li>
                  ))}
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
