import React, { useState, useEffect } from "react";
import chevron_down from "../../assets/images/icons/chevron-down.png";

import "./ChampionsFilter.scss";

// import icons
import all_lane_icon from "../../assets/images/icons/all-lane-icon.png";
import assassins_icon from "../../assets/images/icons/assassin-icon.png";
import fighters_icon from "../../assets/images/icons/fighter-icon.png";
import mages_icon from "../../assets/images/icons/mage-icon.png";
import marksmen_icon from "../../assets/images/icons/marksmen-icon.png";
import supports_icon from "../../assets/images/icons/support-icon.png";
import tanks_icon from "../../assets/images/icons/tanks-icon.png";

type Props = {};

const ChampionsFilter = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Mới ra mắt");
  const [activeType, setActiveType] = useState("all-lanes");
  const [isMobile, setIsMobile] = useState(false);

  const options = ["Mới ra mắt", "Tên tướng"];
  const heroTypes = [
    { id: "all-lanes", label: "Tất cả", icon: all_lane_icon },
    { id: "assassins", label: "Sát thủ", icon: assassins_icon },
    { id: "fighters", label: "Đấu sĩ", icon: fighters_icon },
    { id: "mages", label: "Pháp sư", icon: mages_icon },
    { id: "marksmen", label: "Xạ thủ", icon: marksmen_icon },
    { id: "supports", label: "Hỗ trợ", icon: supports_icon },
    { id: "tanks", label: "Đỡ đòn", icon: tanks_icon },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTypeClick = (type: string) => {
    setActiveType(type);
    setIsTypeOpen(false);
  };

  const getCurrentTypeLabel = () => {
    return heroTypes.find((type) => type.id === activeType)?.label || "Tất cả";
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option); // Updates the selected value
    setIsOpen(false);
  };

  return (
    <div className="filter-champions">
      <div className="searchFilter">
        <span className="lets-icons--search-light"></span>
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <div className="hollow"></div>
      {isMobile ? (
        <div className="hero-type-dropdown">
          <div className="dropdown">
            <button
              className="type-toggle"
              onClick={() => setIsTypeOpen(!isTypeOpen)}
            >
              <img
                src={heroTypes.find((type) => type.id === activeType)?.icon}
                alt=""
                className="type-icon"
              />
              {getCurrentTypeLabel()}
              <img
                src={chevron_down}
                alt=""
                className={`chevron-down ${isTypeOpen ? "rotate" : ""}`}
              />
            </button>
            {isTypeOpen && (
              <ul className="dropdown-menu">
                {heroTypes.map((type) => (
                  <li
                    key={type.id}
                    className={activeType === type.id ? "active" : ""}
                    onClick={() => handleTypeClick(type.id)}
                  >
                    <img src={type.icon} alt="" />
                    {type.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className="hero-type">
          {heroTypes.map((type) => (
            <div
              key={type.id}
              className={`${type.id} type ${
                activeType === type.id ? "active" : ""
              }`}
              onClick={() => handleTypeClick(type.id)}
            >
              <img src={type.icon} alt="" />
              {type.label}
            </div>
          ))}
        </div>
      )}
      <div className="sort">
        <div className="dropdown">
          <button onClick={() => setIsOpen(!isOpen)}>{selectedOption}</button>
          {isOpen && (
            <ul className="dropdown-menu">
              {options.map((option) => (
                <li
                  key={option}
                  className={selectedOption === option ? "active" : ""}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <img
          src={chevron_down}
          alt=""
          className={`chevron-down ${isOpen ? "rotate" : "no-rotate"}`}
        />
      </div>
    </div>
  );
};

export default ChampionsFilter;
