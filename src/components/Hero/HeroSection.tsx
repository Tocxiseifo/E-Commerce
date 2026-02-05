//=====================Motion=====================
import { motion } from "framer-motion";

//=====================Router==============
// import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <>
            <motion.section  className="flex flex-col h-110 bg-[url('https://cdn.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png')] overflow-hidden bg-cover items-center bg-no-repeat justify-center xl:items-start  xl:h-150 w-full">
                <motion.div  className="absolute inset-0 h-110 xl:h-150 mt-18 flex bg-linear-to-r from-black/50 to-transparent"></motion.div>
                <motion.div initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay:0.2}} className="flex flex-col text-center md:items-center lg:items-start  xl:text-left lg:mr-120 xl:mr-0  xl:ml-20 gap-4 relative ">
                    <motion.h1 initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className="text-text-color text-4xl font-semibold">Discover Products You’ll Love</motion.h1>
                    <motion.p initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0}} transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-gray-300 text-lg">Shop the latest trends with fast delivery and exclusive deals.</motion.p>
                    <div className="flex flex-row gap-6 items-start m-auto md:m-0">
                        <button className="cursor-pointer text-[16px] border-main text-main bg-transparent duration-500 transition hover:duration-500 hover:bg-main hover:text-white hover:border-main border w-30  h-12 xl:w-34 xl:h-12 text-center flex justify-center items-center rounded-md">Shop Now</button>    
                        <button className="cursor-pointer text-sm h-12 lg:text-[16px] border-main text-white bg-main duration-500 transition hover:duration-500 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 border w-30  lg:w-34 xl:h-12 text-center flex justify-center items-center rounded-md">Browse Products</button>    
                    </div>
                </motion.div>
            </motion.section>
        </>
    )
}