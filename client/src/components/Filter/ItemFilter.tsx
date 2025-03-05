import React, { useState, useEffect } from "react";
import chevron_down from "../../assets/images/icons/chevron-down.png";
import "./ItemFilter.scss";

const ItemFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Trang bị");
  const [activeType, setActiveType] = useState("attack-damage");
  const [isMobile, setIsMobile] = useState(false);

  const options = ["Trang bị", "Phép bổ trợ"];
  const itemTypes = [
    { id: "all", label: "Tất cả" },
    { id: "attack-damage", label: "Công kích" },
    { id: "ability-power", label: "Pháp thuật" },
    { id: "defense", label: "Phòng ngự" },
    { id: "movement-speed", label: "Di chuyển" },
    { id: "jungle", label: "Đi rừng" },
    { id: "roaming", label: "Hỗ trợ" },
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
    return (
      itemTypes.find((type) => type.id === activeType)?.label || "Công kích"
    );
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="filter-items">
      <div className="searchFilter">
        <span className="lets-icons--search-light"></span>
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <div className="hollow"></div>
      {isMobile ? (
        <div className="item-type-dropdown">
          <div className="dropdown">
            <button
              className="type-toggle"
              onClick={() => setIsTypeOpen(!isTypeOpen)}
            >
              {getCurrentTypeLabel()}
              <img
                src={chevron_down}
                alt=""
                className={`chevron-down ${isTypeOpen ? "rotate" : ""}`}
              />
            </button>
            {isTypeOpen && (
              <ul className="dropdown-menu">
                {itemTypes.map((type) => (
                  <li
                    key={type.id}
                    className={activeType === type.id ? "active" : ""}
                    onClick={() => handleTypeClick(type.id)}
                  >
                    {type.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className="item-type">
          {itemTypes.map((type) => (
            <div
              key={type.id}
              className={`${type.id} type ${
                activeType === type.id ? "active" : ""
              }`}
              onClick={() => handleTypeClick(type.id)}
            >
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

export default ItemFilter;
