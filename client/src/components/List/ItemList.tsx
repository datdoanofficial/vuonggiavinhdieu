import React, { useEffect, useState } from "react";
import "./ItemList.scss";
import ItemCardInfor from "../Cards/ItemCardInfor";
import ItemDetails from "../Cards/ItemDetails";

const ItemList = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth <= 1024);
      setIsTablet(window.innerWidth <= 768);
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderItemColumns = () => {
    const allItems = Array.from({ length: 34 });

    if (isMobile) {
      return (
        <div className="item-col">
          {allItems.map((_, index) => (
            <ItemCardInfor key={`single-${index}`} />
          ))}
        </div>
      );
    }

    if (isTablet) {
      const midPoint = Math.ceil(allItems.length / 2);
      return (
        <>
          <div className="item-col">
            {allItems.slice(0, midPoint).map((_, index) => (
              <ItemCardInfor key={`col1-${index}`} />
            ))}
          </div>
          <div className="item-col">
            {allItems.slice(midPoint).map((_, index) => (
              <ItemCardInfor key={`col2-${index}`} />
            ))}
          </div>
        </>
      );
    }

    return (
      <>
        <div className="item-col-01">
          {Array.from({ length: 7 }).map((_, index) => (
            <ItemCardInfor key={index} />
          ))}
        </div>
        <div className="item-col-02">
          {Array.from({ length: 13 }).map((_, index) => (
            <ItemCardInfor key={index} />
          ))}
        </div>
        <div className="item-col-03">
          {Array.from({ length: 14 }).map((_, index) => (
            <ItemCardInfor key={index} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="item-body">
      {isDesktop && <ItemDetails />}
      <div className="item-list">{renderItemColumns()}</div>
      {!isDesktop && <ItemDetails />}
    </div>
  );
};

export default ItemList;
