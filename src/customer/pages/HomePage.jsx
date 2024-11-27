import { mens_kurta } from "../../Data/menA";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <>
      <MainCarousel />
      <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10 bg-white">
        <HomeSectionCarousel data={mens_kurta} section="Men's Kurta"/>
        <HomeSectionCarousel data={mens_kurta} section="Men's shoes"/>
        <HomeSectionCarousel data={mens_kurta} section="Men's Shirt"/>
        <HomeSectionCarousel data={mens_kurta} section="Women's Sharee"/>
        <HomeSectionCarousel data={mens_kurta} section="Women's Dress"/>
      </div>
    </>
  );
};

export default HomePage;
