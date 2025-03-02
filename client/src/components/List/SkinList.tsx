import React, { useEffect, useRef } from "react";
import skinThumb from "../../assets/images/skin/skin-01.webp";
import VanillaTilt from "../../styles/main/Tilt.js";
import "../../styles/main/Tilt.js";
import "./SkinList.scss";

type Props = {};

const SkinList = (props: Props) => {
  const tiltElementsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    tiltElementsRef.current = document.querySelectorAll("[data-tilt]");
    VanillaTilt.init(Array.from(tiltElementsRef.current!));
  });
  // list skins
  const champions = Array.from({ length: 677 }, (_, i) => i + 1); //607 skin
  return (
    <div className="image-contain">
      {champions.map((skin, index) => (
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
  );
};

export default SkinList;
