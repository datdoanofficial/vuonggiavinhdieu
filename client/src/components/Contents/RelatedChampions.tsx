import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // import Link
import "./RelatedChampions.scss";

import chevronInactive from "../../assets/images/icons/chevron-inactive.png";
import chevronActive from "../../assets/images/icons/chevron-active.png";
import dot from "../../assets/images/icons/dot.png";

import championsThumb from "../../assets/images/champions/champions.webp";

type Props = {};

const RelatedChampions = (props: Props) => {
  const totalSkins = 8;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleRange, setVisibleRange] = useState({
    start: 0,
    end:
      windowWidth <= 375
        ? 1
        : windowWidth <= 576
        ? 2
        : windowWidth <= 768
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
          width <= 375
            ? Math.min(prev.start + 1, totalSkins - 1)
            : width <= 576
            ? Math.min(prev.start + 2, totalSkins - 1)
            : width <= 768
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
          windowWidth <= 375
            ? Math.min(newStart + 1, totalSkins)
            : windowWidth <= 576
            ? Math.min(newStart + 2, totalSkins)
            : windowWidth <= 768
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
          windowWidth <= 375
            ? newStart + 1
            : windowWidth <= 576
            ? newStart + 2
            : windowWidth <= 768
            ? newStart + 3
            : newStart + 4;

        setActiveSkinIndex(0);
        return { start: newStart, end: newEnd };
      });
    }
  };

  return (
    <div className="related-champions">
      <div className="heading">
        {/* "Trang phục" is Vietnamese for "Skins". Using non-English words for localization. */}
        <div className="related-title">Tướng liên quan</div>
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
      <div className="related-item">
        {[...Array(totalSkins)].map((_, index) => (
          <div
            key={index}
            className={`related-item-inner ${
              index === activeSkinIndex ? "active" : ""
            }`}
            onClick={() => setActiveSkinIndex(index)}
          >
            <Link to="/champions-detail" className="champions">
              <div className="overlay-ha">
                <span className="txtName">Phi</span>
                <div className="learn-more">Tìm hiểu thêm</div>
              </div>
              <div className="related-img-container">
                <img src={championsThumb} alt="" />
              </div>
              <div className="championName">
                <span>Phi {index + 1 + visibleRange.start}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedChampions;
