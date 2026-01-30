//===============Components=================
import ProductCard from "./ProductCard";

//=====================Motion=====================

export default function ProductSection() {
    return(
        <>
            <section id="Most-popular" className="flex flex-col justify-center items-center h-100  w-full bg-background">
                <div className="flex flex-col lg:flex-row w-full h-50 justify-center  items-center gap-5 ">
                    <ProductCard />
                </div>
            </section>
        </>
    )
        
}