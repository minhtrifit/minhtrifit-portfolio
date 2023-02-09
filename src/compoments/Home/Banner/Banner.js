import "./Banner.scss";
import MySearch from "../../Search/Search";
import MyCarousel from "../../Carousel/Carousel";

const Banner = () => {
  return (
    <div className="banner-container">
      <MySearch />
      <MyCarousel />
    </div>
  );
};

export default Banner;
