import React, { useEffect } from "react";
import "../styles/pages/Items.scss";
import ItemFilter from "../components/Filter/ItemFilter";
import ItemList from "../components/List/ItemList";
import item_bg from "../assets/images/backgrounds/item-bg.webp";

type Props = {};

const Items = (props: Props) => {
  useEffect(() => {
    let itemdetails = document.getElementsByClassName("item-details")[0];

    const handleScroll = () => {
      let scrollTop = window.scrollY;
      let viewportHeight = window.innerHeight;

      if (scrollTop >= viewportHeight * 0.97) {
        // 100% of the viewport height
        itemdetails.classList.add("onScroll");
      } else {
        itemdetails.classList.remove("onScroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array means this effect runs once on mount and cleanup on unmount
  return (
    <div className="items-body">
      <div className="background-img">
        <img src={item_bg} alt="" />
      </div>
      <ItemFilter />
      <ItemList />
    </div>
  );
};

export default Items;
