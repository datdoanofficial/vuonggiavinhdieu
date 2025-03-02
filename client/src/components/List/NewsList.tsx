// Importing necessary libraries and styles
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // import Link
import "./NewsList.scss";

// import image news list
import img1 from "../../assets/images/news/news-list/item-01.webp";
import img2 from "../../assets/images/news/news-list/item-02.webp";
import img3 from "../../assets/images/news/news-list/item-03.webp";

// Defining the type for the props
type Props = {};

// Defining the NewsList component
const NewsList = (props: Props) => {
  const [maxLength, setMaxLength] = useState(400);

  const getMaxLength = (width: number) => {
    if (width <= 480) return 200;
    if (width <= 576) return 300;
    if (width <= 768) return 400;
    if (width <= 860) return 150;
    if (width <= 900) return 200;
    if (width <= 950) return 250;
    if (width <= 1024) return 300;
    if (width <= 1100) return 450;
    if (width <= 1330) return 600;
    return 600;
  };

  useEffect(() => {
    const handleResize = () => {
      setMaxLength(getMaxLength(window.innerWidth));
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncateText = (text: string) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const newsContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium arcu quis vestibulum. Morbi finibus urna vel leo tempus condimentum. Donec lacinia semper dolor ut tristique. Integer vulputate, metus et mattis feugiat, velit mi ultrices turpis, lacinia vestibulum odio nulla a ante. In gravida auctor efficitur. Sed quis viverra ipsum. Etiam congue maximus scelerisque. Vestibulum id odio non turpis blandit feugiat a sit amet erat. Fusce semper velit tortor, nec luctus eros dapibus non. Sed eget nunc urna. Sed sed elit lectus.";

  return (
    // The main container for the news list
    <div className="news-list">
      {/* The heading for the news list */}
      <div className="title-heading">Tin mới nhất</div>
      {/* The container for the list items */}
      <div className="list-item">
        {/* A single news item */}
        <div className="item">
          {/* The container for the news image */}
          <div className="news-img">
            <img src={img1} alt="news" />
          </div>
          {/* The container for the news item details */}
          <div className="news-item-details">
            {/* The container for the title and date of the news item */}
            <div className="tag-and-date">
              {/* The tag of the news item */}
              <div className="news-tag">sự kiện</div>
              {/* The date of the news item */}
              <div className="news-date">8 giờ trước</div>
            </div>
            {/* The content of the news item */}
            <div className="news-content">{truncateText(newsContent)}</div>
            {/* The button related to the news item */}
            <Link to="/news" className="news-button">
              Xem thêm
            </Link>
          </div>
        </div>

        {/* Another news item */}
        <div className="item">
          {/* The container for the news image */}
          <div className="news-img">
            <img src={img2} alt="news" />
          </div>
          {/* The container for the news item details */}
          <div className="news-item-details">
            {/* The container for the title and date of the news item */}
            <div className="tag-and-date">
              {/* The tag of the news item */}
              <div className="news-tag">sự kiện</div>
              {/* The date of the news item */}
              <div className="news-date">8 giờ trước</div>
            </div>
            {/* The content of the news item */}
            <div className="news-content">{truncateText(newsContent)}</div>
            {/* The button related to the news item */}
            <Link to="/news" className="news-button">
              Xem thêm
            </Link>
          </div>
        </div>

        {/* Another news item */}
        <div className="item">
          {/* The container for the news image */}
          <div className="news-img">
            <img src={img3} alt="news" />
          </div>
          {/* The container for the news item details */}
          <div className="news-item-details">
            {/* The container for the title and date of the news item */}
            <div className="tag-and-date">
              {/* The tag of the news item */}
              <div className="news-tag">sự kiện</div>
              {/* The date of the news item */}
              <div className="news-date">8 giờ trước</div>
            </div>
            {/* The content of the news item */}
            <div className="news-content">{truncateText(newsContent)}</div>
            {/* The button related to the news item */}
            <Link to="/news" className="news-button">
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the NewsList component to be used in other parts of our application
export default NewsList;
