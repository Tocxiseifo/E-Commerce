//====================== Material UI ===================
import {Instagram}  from "@mui/icons-material"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FooterSection() {
    return(
        <>
<<<<<<< HEAD
            <footer id="Support" className="bg-gray-800 h-250  md:h-140 w-full lg:h-100 overflow-hidden  text-white pt-16 pb-8 relative top-390 md:top-120 lg:top-0">
=======
            <footer id="Support" className="bg-gray-800 h-fit  md:h-140 w-full lg:h-100 overflow-hidden  text-white pt-16 pb-8 relative top-390 lg:top-0">
>>>>>>> 6f1d0f81a63aba97d40036363c19468d50cc3053
               <div className="mx-auto px-6 flex flex-col ">
                    <div className="flex flex-row flex-wrap gap-5 lg:gap-10 w-79 md:w-170 lg:w-240 xl:w-full relative lg:left-12 xl:left-0 items-center justify-evenly mb-12">
                        <div className="flex flex-col gap-2 relative right-12 md:right-6">
                            <h3 className="text-2xl font-bold mb-6 text-white">Shoply</h3>
                            <p className="text-gray-400 text-sm mb-4 w-55">Your destination for premium fashion and lifestyle products.</p>
                            <div className="flex space-x-4">
                                <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition" href="#">
                                    <FacebookIcon />
                                </a>
                                <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition" href="#">
                                    <Instagram />
                                </a>
                                <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition" href="#">
                                    <XIcon />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-start items-start cursor-pointer relative right-5">
                            <h4 className="font-semibold mb-4 text-xl text-center">Shop</h4>
                            <ul className="space-y-2 text-sm text-gray-400 ">
                                <li className="hover:text-white transition ">New Arrivals</li>
                                <li className="hover:text-white transition ">Best Sellers</li>
                                <li className="hover:text-white transition ">Sale</li>
                                <li className="hover:text-white transition ">Gift Cards</li>
                            </ul>
                        </div>       
                        <div className="flex flex-col gap-2 text-start items-start cursor-pointer relative right-5">
                            <h4 className="font-semibold mb-4 text-xl text-center">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-400 ">
                                <li className="hover:text-white transition">About Us</li>
                                <li className="hover:text-white transition">Careers</li>
                                <li className="hover:text-white transition">Sustainability</li>
                                <li className="hover:text-white transition">Press</li>
                            </ul>
                        </div> 
                        <div className="flex flex-col gap-2 text-start items-start cursor-pointer relative right-5">
                            <h4 className="font-semibold mb-4 text-xl text-center">Help</h4>
                            <ul className="space-y-2 text-sm text-gray-400 ">
                                <li className="hover:text-white transition ">Customer Service</li>
                                <li className="hover:text-white transition ">Shipping Info</li>
                                <li className="hover:text-white transition ">Returns</li>
                                <li className="hover:text-white transition ">Size Guide</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2 relative right-13 md:right-52 lg:right-14">
                            <h4 className="font-semibold mb-4 text-xl ">Newsletter</h4>
                            <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive offers</p>
                            <div className="flex ">
                                <input type="email" placeholder="Enter Your Email" className="flex-1 px-4 py-2 lg:px-3 rounded-l-md bg-white text-gray-800 text-sm focus:outline-none" />
                                <button className="bg-main px-4 py-2 lg:px-3 lg:mr-4 rounded-r-md hover:bg-yellow-600 transition cursor-pointer"><ArrowForwardIcon /></button>
                            </div>
                        </div>          
                    </div>
                    <div className="border-t border-gray-700 pt-8 flex  justify-center ml-42 w-100 relative right-58 lg:right-40 xl:right-0 md:w-220 lg:w-280  items-center text-sm text-gray-400 [@media(min-width:2560px)]:w-550  [@media(min-width:2560px)]:right-0 [@media(min-width:2560px)]:left-10">
                        <div className="flex flex-col lg:flex-row justify-between lg:justify-evenly xl:justify-between   xl:w-full items-center  relative lg:right-70 xl:right-0 ">
                            <p>© 2026 Shoply. All rights reserved.</p>
                            <div className="flex space-x-6 relative lg:left-100 xl:left-0 xl:right-65">
                                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition">Terms of Service</a>
                                <a href="#" className="hover:text-white transition">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
