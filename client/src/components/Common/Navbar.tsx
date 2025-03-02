import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Menu from "./Menu";

const Navbar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  const navItems = [
    { path: "/champions", label: "Tướng" },
    { path: "/skin", label: "Trang Phục" },
    { path: "/item", label: "Trang Bị" },
    { path: "/region", label: "Khu Vực" },
    { path: "/news", label: "Tin Tức" },
  ];

  return (
    <div className="header_nav">
      {isTablet ? (
        <Menu />
      ) : (
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={
                  activePage === item.path ? "nav-link active" : "nav-link"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
