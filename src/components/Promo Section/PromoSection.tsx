//===============Assets=================
import Shopping from '../../assets/images/woman-with-shopping-bags.jpg';
//=====================Motion=====================
import { motion } from "framer-motion";

export default function PromoSection() {
    return(
        <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay: 0.4}} className="w-full lg:h-100 bg-yellow-400 flex flex-col-reverse lg:flex-row justify-between items-center mt-110 overflow-hidden   bg-cover bg-center h-130 relative top-390 md:top-120 lg:top-0 ">
            <motion.div initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className='xl:ml-35 lg:ml-10'>
                <motion.h2 initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay: 1.2}} className="lg:text-5xl text-3xl text-center lg:text-start font-bold text-white mb-4">Special Promotion!</motion.h2>
                <motion.p initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1.5}} className="lg:text-lg text-[16px] text-gray-500 mb-6 text-center lg:text-start">Get 20% off on all products. Limited time offer!</motion.p>
                <div className='flex justify-center lg:justify-start w-full mb-4 lg:mb-0'>
                    <button className="bg-white text-yellow-400 font-semibold px-6 py-3 rounded-md hover:bg-gray-100  transition duration-300 cursor-pointer">Shop Now</button>
                </div>
            </motion.div>
            <motion.div initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1.5}}  className="lg:w-96 lg:h-80 w-65 md:w-70 overflow-hidden  rounded-lg lg:mr-5  xl:mr-20">
                <img src={Shopping} className="w-full h-full object-cover mt-10 mb-12 rounded-lg" loading='lazy' />
            </motion.div>
        </motion.div>
    )
}
