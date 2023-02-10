import { useEffect } from "react";
import "./Banner.scss";
import MySearch from "../../Search/Search";
import MyCarousel from "../../Carousel/Carousel";

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Justasatboiz | minhtrifit";
  }, []);

  return (
    <div className="banner-container">
      <MySearch />
      <MyCarousel />
    </div>
  );
};

export default Banner;
