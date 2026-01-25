//====================== Material UI ===================
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReplayIcon from '@mui/icons-material/Replay';
import ShieldIcon from '@mui/icons-material/Shield';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const features = [
    {
        id:0,
        img:<LocalShippingIcon className='h-6'/>,
        description:'Free Shipping',
        p:'On orders over $50'
    },
    {
        id:1,
        img:<ReplayIcon className='h-6'/>,
        description:'Easy Returns',
        p:'30-day return policy'
    },
    {
        id:2,
        img:<ShieldIcon className='h-6'/>,
        description:'Secure Payment',
        p:'100% secure checkout'
    },
    {
        id:3,
        img:<HeadsetMicIcon className='h-6'/>,
        description:'24/7 Support',
        p:'Always here to help'
    },
]

export default function WhyChooseUsSection() {
    return(
        <>
            <section id="features-section" className="py-16 flex flex-row flex-wrap items-center justify-center  w-full mx-auto px-6">
                <div className="flex flex-row flex-wrap gap-15 md:gap-7 w-full  text-center justify-center  ">
                    {features.map((feature) => (
                        <div key={feature.id} className='flex flex-col md:w-80   items-center justify-evenly text-center'>
                            <div  className="w-16 h-16 bg-gray-50 rounded-full flex flex-col gap-2 items-center justify-center mx-auto mb-4 text-center">
                                <i className='text-main text-2xl text-center flex items-center justify-center'>
                                    {feature.img}
                                </i>
                            </div>
                            <h3 className='font-semibold text-main-color mb-2'>{feature.description}</h3>
                            <p className='text-subtitles w-100'>{feature.p}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}