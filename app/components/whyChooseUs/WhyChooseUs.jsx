import Image from 'next/image'

import { BsTrophy } from 'react-icons/bs'
import { HiMiniInformationCircle } from 'react-icons/hi2'
import { FaMapLocationDot } from 'react-icons/fa6'
const WhyChooseUs = () => {
  return (
    <>
      {/* Section containing content */}
      <section className="flex max-w-screen-2xl m-auto px-8 py-20 flex-col lg:flex-row text-white justify-center overflow-x-hidden">
        {/* Left-side content with image */}
        <div data-aos="fade-right" className="">
          {/* Image component */}
          <Image src="/images/food3.webp" width={648} height={491} />
        </div>

        {/* Right-side content with text and icons */}
        <div
          data-aos="fade-left"
          className="bg-[#133ea1f6] flex flex-col justify-center items-start lg:py-0 py-6 lg:px-14 px-2 w-full lg:w-2/4 gap-6 -mt-20 lg:-mt-0"
        >
          <div>
            {/* Title */}
            <h2 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200 text-white ">
              오늘도 고민하는 당신에게 추천합니다!
            </h2>
            {/* Description */}
            <p className="text-[#ffffff80] mt-1">
              매일매일 무엇을 먹을지 고민하는 당신, 친구들과 놀러나왔는데
              고민하는 당신, 색다른 맛을 찾기 원하는 당신을 위해 만들었습니다!
            </p>
          </div>

          {/* Icon and text sections */}
          <div className="flex gap-5 ">
            {/* Icon and text section 1 */}
            <div className="flex flex-col gap-1">
              {/* Icon */}
              <FaMapLocationDot className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">위치</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">당신에게 맞는 위치의 맛집!</p>
            </div>

            {/* Icon and text section 2 */}
            <div className="flex flex-col gap-1">
              {/* Icon */}
              <HiMiniInformationCircle className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">정보</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                정확한 정보, 원하는 정보를 이용하여 찾으세요!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
