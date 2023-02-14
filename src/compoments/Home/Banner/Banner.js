import { useEffect } from "react";
import "./Banner.scss";
import MySearch from "../../Search/Search";
import MyCarousel from "../../Carousel/Carousel";

const Banner = (props) => {
  const { setSearchBar, handleSearchBar } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Justasatboiz | minhtrifit";
  }, []);

  return (
    <div className="banner-container">
      <MySearch setSearchBar={setSearchBar} handleSearchBar={handleSearchBar} />
      <MyCarousel />
    </div>
  );
};

export default Banner;
