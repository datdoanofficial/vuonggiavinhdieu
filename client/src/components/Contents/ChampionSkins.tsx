import React, { useState, useEffect } from "react";
import "./ChampionSkins.scss";

import chevronInactive from "../../assets/images/icons/chevron-inactive.png";
import chevronActive from "../../assets/images/icons/chevron-active.png";
import dot from "../../assets/images/icons/dot.png";

import skinDemo from "../../assets/images/skin/skin-demo.webp";

const ChampionSkins = () => {
  const totalSkins = 8;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleRange, setVisibleRange] = useState({
    start: 0,
    end:
      windowWidth <= 768
        ? 1
        : windowWidth <= 1024
        ? 2
        : windowWidth <= 1200
        ? 3
        : 4,
  });
  const [activeSkinIndex, setActiveSkinIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setVisibleRange((prev) => ({
        start: prev.start,
        end:
          width <= 768
            ? Math.min(prev.start + 1, totalSkins - 1)
            : width <= 1024
            ? Math.min(prev.start + 2, totalSkins - 1)
            : width <= 1200
            ? Math.min(prev.start + 3, totalSkins - 1)
            : Math.min(prev.start + 4, totalSkins - 1),
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [totalSkins]);

  const handleRightChevronClick = () => {
    if (visibleRange.end < totalSkins) {
      setVisibleRange((prevRange) => {
        const newStart = prevRange.start + 1;
        const newEnd =
          windowWidth <= 768
            ? Math.min(newStart + 1, totalSkins)
            : windowWidth <= 1024
            ? Math.min(newStart + 2, totalSkins)
            : windowWidth <= 1200
            ? Math.min(newStart + 3, totalSkins)
            : Math.min(newStart + 4, totalSkins);

        setActiveSkinIndex(0);
        return { start: newStart, end: newEnd };
      });
    }
  };

  const handleLeftChevronClick = () => {
    if (visibleRange.start > 0) {
      setVisibleRange((prevRange) => {
        const newStart = prevRange.start - 1;
        const newEnd =
          windowWidth <= 768
            ? newStart + 1
            : windowWidth <= 1024
            ? newStart + 2
            : windowWidth <= 1200
            ? newStart + 3
            : newStart + 4;

        setActiveSkinIndex(0);
        return { start: newStart, end: newEnd };
      });
    }
  };

  // Update activeSkinIndex when visibleRange.start changes
  useEffect(() => {
    setActiveSkinIndex(0);
  }, [visibleRange]);

  return (
    <div className="all-skins">
      {/* heading */}
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
                <div className="skin-name">Mai Cốt Tiền</div>
              </div>
            </div>
            <div className="banner-576">
              <div className="num">0{index + 1 + visibleRange.start}</div>
              <span>·</span>
              <div className="skin-name">Mai Cốt Tiền</div>
            </div>
            <div className="skins-item-image">
              <img src={skinDemo} alt="" />
            </div>
            <img src={skinDemo} alt="" className="img-576" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionSkins;
