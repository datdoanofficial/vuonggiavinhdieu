import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import chevron_down from "../../assets/images/icons/chevron-down.png";
import "./Menu.scss";

const Menu = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Trang Chủ" },
    { path: "/champions", label: "Tướng" },
    { path: "/skin", label: "Trang Phục" },
    { path: "/item", label: "Trang Bị" },
    { path: "/region", label: "Khu Vực" },
    { path: "/news", label: "Tin Tức" },
  ];

  // Find current page label
  const currentPageLabel =
    navItems.find((item) => item.path === activePage)?.label || "Trang Chủ";

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div className="mobile-menu">
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {currentPageLabel}
          <img
            src={chevron_down}
            alt=""
            className={`chevron ${isMenuOpen ? "active" : ""}`}
          />
        </button>
        {isMenuOpen && (
          <ul className="dropdown-menu">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={
                    activePage === item.path ? "nav-link active" : "nav-link"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
