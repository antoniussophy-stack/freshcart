import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/NewsLetter";
import OurCategories from "../components/OurCategories";
import PromoCards from "../components/PromoCards";
import PromoPanner from "../components/PromoPanner";
import Slider from "../components/Slider";

export default function HomeScreen() {
    return (
        <>
            <Slider />
            <PromoPanner/>
            <OurCategories/>
            <PromoCards/>
            <FeaturedProducts/>
            <Newsletter/>
        </>
    )
}
