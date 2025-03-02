import React, { useState, useEffect } from "react";
import "./ChampionSkins.scss";

import chevronInactive from "../../assets/images/icons/chevron-inactive.png";
import chevronActive from "../../assets/images/icons/chevron-active.png";
import dot from "../../assets/images/icons/dot.png";

import skinDemo from "../../assets/images/skin/skin-demo.webp";

const ChampionSkins = () => {
  const totalSkins = 8; // Assuming 5 or more skins
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 4 }); // State to track visible range
  const [activeSkinIndex, setActiveSkinIndex] = useState(0); // Initialize with 0

  const handleRightChevronClick = () => {
    if (visibleRange.end < totalSkins) {
      setVisibleRange((prevRange) => {
        const newStart = prevRange.start + 1;
        const newEnd = prevRange.end + 1;

        // Always set activeSkinIndex to 0 (the first skin)
        setActiveSkinIndex(0); // Thay đổi ở đây

        return {
          start: newStart,
          end: newEnd,
        };
      });
    }
  };

  const handleLeftChevronClick = () => {
    if (visibleRange.start > 0) {
      setVisibleRange((prevRange) => {
        const newStart = prevRange.start - 1;
        const newEnd = prevRange.end - 1;

        // Always set activeSkinIndex to 0 (the first skin)
        setActiveSkinIndex(0); // Thay đổi ở đây

        return {
          start: newStart,
          end: newEnd,
        };
      });
    }
  };

  // Update activeSkinIndex when visibleRange.start changes
  useEffect(() => {
    setActiveSkinIndex(0);
  }, [visibleRange]);

  return (
    <div className="all-skins">
      <div className="heading">
        {/* "Trang phục" is Vietnamese for "Skins". Using non-English words for localization. */}
        <div className="skins-title">Trang phục</div>
        <div className="navigation">
          <img
            src={chevronInactive}
            alt=""
            className={`chevron ${visibleRange.start === 0 ? "disabled" : ""}`}
            onClick={handleLeftChevronClick}
          />
          <img src={dot} alt="" className="dot" />
          <img
            src={chevronActive}
            alt=""
            className={`chevron ${
              visibleRange.end >= totalSkins ? "disabled" : ""
            }`}
            onClick={handleRightChevronClick}
          />
        </div>
      </div>
      <div className="skins-item">
        {[...Array(totalSkins)].map((_, index) => (
          <div
            key={index}
            className={`skins-item-inner ${
              index === activeSkinIndex ? "active" : ""
            }`}
            onClick={() => setActiveSkinIndex(index)}
          >
            <div className="banner">
              <div className="banner-content">
                <div className="num">0{index + 1 + visibleRange.start}</div>
                <div className="skin-name">Tinh Giới Du hiệp</div>
              </div>
            </div>
            <div className="skins-item-image">
              <img src={skinDemo} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionSkins;
