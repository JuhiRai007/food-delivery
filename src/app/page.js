import HeroBanner from "./components/HeroBanner";
import PopularDishes from "./components/PopularDishes";
import ArtSection from "./components/ArtSection";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
   <>
   <HeroBanner/>
   <PopularDishes/>
   <ArtSection/>
   <Banner/>
   <Testimonials/>
   </>
  );
}