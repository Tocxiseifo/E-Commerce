// src/pages/Home.tsx
// ====================Components===================
import HeroSection from "../components/Hero/HeroSection";
import ProductSection from "../components/Products Section/ProductSection";
import PromoSection from "../components/Promo Section/PromoSection";
import WhyChooseUsSection from "../components/Why Choose Us Section/WhyChooseUsSection";

export default function Home () {
    return(
        <>
            <HeroSection />
            <ProductSection />
            <PromoSection />
            <WhyChooseUsSection />
        </>
    )
}