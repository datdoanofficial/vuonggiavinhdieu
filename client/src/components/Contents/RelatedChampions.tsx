import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link
import "./RelatedChampions.scss";

import chevronInactive from "../../assets/images/icons/chevron-inactive.png";
import chevronActive from "../../assets/images/icons/chevron-active.png";
import dot from "../../assets/images/icons/dot.png";

import championsThumb from "../../assets/images/champions/champions.webp";

type Props = {};

const RelatedChampions = (props: Props) => {
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
