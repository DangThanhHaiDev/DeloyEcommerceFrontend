import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./card.scss";

const HomeSectionCarousel = ({ data, section }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const preSlide = () => {
    setActiveIndex(activeIndex - 1);
    carouselRef.current.slideTo(activeIndex - 1);
  };
  const nextSlide = () => {
    setActiveIndex(activeIndex + 1);
    carouselRef.current.slideTo(activeIndex + 1);
  };
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const items = data.map((item) => {
    return <HomeSectionCard product={item} />;
  });
  return (
    <div className="relative px-4 lg:px-4 border border-gray-300 shadow-sm py-5 rounded-md">
      <h3 className="text-left text-xl text-black font-extrabold">{section}</h3>
      <div className="p-3">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          activeIndex={activeIndex}
          ref={carouselRef}
        />
        {activeIndex !== items.length - 4 && (
          <Button
            variant="contained"
            className="z-50 absolute top-1/3 bg-slate-300 right-1 px-1 py-4 rounded-sm shadow-md hover:bg-blue-500 transition-transform duration-300 else-in-out active:scale-95 active:opacity-90"
            aria-label="pre"
            onClick={nextSlide}
          >
            <KeyboardArrowLeftIcon className="text-black rotate-180" />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 absolute top-1/3 bg-slate-300 left-1 px-1 py-4 rounded-sm shadow-md hover:bg-blue-500 transition-transform duration-300 else-in-out active:scale-95 active:opacity-90"
            aria-label="pre"
            onClick={preSlide}
          >
            <KeyboardArrowLeftIcon className="text-black" />
          </Button>
        )}
      </div>
    </div>
  );
};
export default HomeSectionCarousel;
