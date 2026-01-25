export default function HeroSection() {
    return (
        <>
            <section className="flex flex-col bg-[url('https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png')] bg-cover   bg-no-repeat justify-center items-start  h-150 w-full">
                <div className="absolute inset-0 h-168 hidden lg:flex bg-linear-to-r from-black/50 to-transparent"></div>
                <div className="flex flex-col text-left ml-20 gap-4 relative ">
                    <h1 className="text-text-color text-4xl font-semibold">Discover Products You’ll Love</h1>
                    <p className="text-subtitles text-lg">Shop the latest trends with fast delivery and exclusive deals.</p>
                    <div className="flex flex-row gap-6 items-start">
                        <button className="cursor-pointer text-[16px] border-main text-main bg-transparent duration-500 transition hover:duration-500 hover:bg-main hover:text-white hover:border-main border  w-34 h-12 text-center flex justify-center items-center rounded-md">Shop Now</button>    
                        <button className="cursor-pointer text-[16px] border-main text-white bg-main duration-500 transition hover:duration-500 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 border  w-34 h-12 text-center flex justify-center items-center rounded-md">Browse Products</button>    
                    </div>
                </div>
            </section>
        </>
    )
}