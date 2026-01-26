import Shopping from '../../assets/images/woman-with-shopping-bags.jpg';

export default function PromoSection() {
    return(
        <div className="w-full h-100 bg-yellow-400 flex flex-row justify-between items-center mt-110 rounded-lg bg-cover bg-center">
            <div className='ml-35'>
                <h2 className="text-5xl font-bold text-white mb-4">Special Promotion!</h2>
                <p className="text-lg text-white mb-6">Get 20% off on all products. Limited time offer!</p>
                <button className="bg-white text-yellow-400 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer">Shop Now</button>
            </div>
            <div className="lg:w-96 lg:h-80 w-65 md:w-70 overflow-hidden rounded-lg  lg:mr-20">
                <img src={Shopping} className="w-full h-full object-cover mt-10 mb-12 rounded-lg" loading='lazy' />
            </div>
        </div>
    )
}