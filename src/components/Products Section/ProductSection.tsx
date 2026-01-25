import ProductCard from "./ProductCard";

export default function ProductSection() {
    return(
        <>
            <section className="flex flex-col justify-center items-center h-100  w-full bg-background">
                <div className="flex flex-row w-full h-50 justify-center  items-center gap-5 ">
                    <ProductCard />
                </div>
            </section>
        </>
    )
        
}