import React from "react";
import { useEffect, useState } from "react";
import "./SearchBox.scss";

type Props = {};

const SearchBox = (props: Props) => {
  const [placeholder, setPlaceholder] = useState(
    "Vui lòng nhập tên vị tướng bạn muốn tìm kiếm"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setPlaceholder("Vui lòng nhập tên vị tướng bạn muốn tìm");
      } else {
        setPlaceholder("Vui lòng nhập tên vị tướng bạn muốn tìm kiếm");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="searchBox">
      <div className="icon">
        <span className="lets-icons--search-light"></span>
      </div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBox;
