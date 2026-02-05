//====================== Material UI ===================
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReplayIcon from '@mui/icons-material/Replay';
import ShieldIcon from '@mui/icons-material/Shield';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

//======================Motion=====================
import { motion } from 'framer-motion';

//======================Data======================
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
            <section
            id="features-section"
            className="
              py-16
              flex
              justify-center
              items-center
              mb-20
              w-full
              px-4
              relative 
              top-390
              md:top-120
              lg:top-0
            "
            >
            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-8
                max-w-7xl
                w-full
                text-center
              "
            >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
                className="
                  flex
                  flex-col
                  items-center
                  justify-start
                  text-center
                  w-full
                  sm:w-64
                  lg:w-82
                  xl:w-72
                "
              >
              <div
                className="
                  w-16
                  h-16
                  bg-gray-50
                  rounded-full
                  flex
                  items-center
                  justify-center
                  mb-4
                "
              >
                <i className="text-main text-2xl">
                  {feature.img}
                </i>
              </div>

              <h3 className="font-semibold text-main-color mb-2">
                {feature.description}
              </h3>

              <p className="text-subtitles max-w-xs">
                {feature.p}
              </p>
            </motion.div>
      ))}
        </div>
    </section>
 
        </>
    )
}
