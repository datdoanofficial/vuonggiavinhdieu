import React, { useEffect, useRef, useState } from "react";
import skinThumb from "../../assets/images/skin/skin-01.webp";
import VanillaTilt from "../../styles/main/Tilt.js";
import "../../styles/main/Tilt.js";
import "./SkinList.scss";

type Props = {};

const SkinList = (props: Props) => {
  const tiltElementsRef = useRef<NodeListOf<Element> | null>(null);
  const [visibleItems, setVisibleItems] = useState(20);
  const totalSkins = 677;

  useEffect(() => {
    tiltElementsRef.current = document.querySelectorAll("[data-tilt]");
    VanillaTilt.init(Array.from(tiltElementsRef.current!));
  });

  // Create array of skins
  const champions = Array.from({ length: totalSkins }, (_, i) => i + 1);

  // Handle show more button click
  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 20, totalSkins));
  };

  return (
    <>
      <div className="image-contain">
        {champions.slice(0, visibleItems).map((skin, index) => (
          <div
            key={index}
            className="lst-skin"
            data-tilt
            data-tilt-glare
            data-tilt-speed="1000"
            data-tilt-max="4"
            data-tilt-max-glare="0.6"
          >
            {index === 0 && <span className="new-tag">Mới</span>}
            <img src={skinThumb} alt={`${skin}`} />
            <div className="iconStar">
              <span className="ph--star-four-fill iconify"></span>
            </div>
            <div className="championName">
              <span className="skinName">Đát Kỷ - Cửu Vỹ Thanh Khâu</span>
            </div>
          </div>
        ))}
      </div>
      {visibleItems < totalSkins && (
        <div className="show-more">
          <button onClick={handleShowMore}>Xem thêm</button>
        </div>
      )}
    </>
  );
};

export default SkinList;
