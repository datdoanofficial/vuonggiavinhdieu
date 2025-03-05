import React, { useState, useEffect } from "react";
import chevron_down from "../../assets/images/icons/chevron-down.png";
import "./SkinFilter.scss";

type Props = {};

const SkinFilter = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Mới ra mắt");
  const [activeType, setActiveType] = useState("all-type");

  const options = ["Mới ra mắt", "Tên tướng"];
  const skinTypes = [
    { id: "all-type", label: "Tất cả" },
    { id: "treasured", label: "Điển tàng" },
    { id: "unparalleled", label: "Vô song" },
    { id: "legendary", label: "Truyền thuyết" },
    { id: "epic", label: "Sử thi" },
    { id: "brave", label: "Dũng giả" },
    { id: "unranked", label: "Không bậc" },
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
    return skinTypes.find((type) => type.id === activeType)?.label || "Tất cả";
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="filter-skins">
      <div className="searchFilter">
        <span className="lets-icons--search-light"></span>
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <div className="hollow"></div>
      {isMobile ? (
        <div className="skin-type-dropdown">
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
                {skinTypes.map((type) => (
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
        <div className="skin-type">
          {skinTypes.map((type) => (
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

export default SkinFilter;
