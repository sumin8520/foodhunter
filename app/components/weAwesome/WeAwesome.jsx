import Image from 'next/image'
import { IoSearch } from 'react-icons/io5'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdFoodBank } from 'react-icons/md'
import { MdOutlineRateReview } from 'react-icons/md'

const WeAwesome = () => {
  return (
    <>
      {/* Section containing content */}
      <section className="flex max-w-screen-2xl m-auto px-8 py-20 flex-col lg:flex-row justify-center overflow-x-hidden gap-5 lg:gap-0">
        {/* Left-side content */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-start lg:py-0 py-6 lg:px-14 px-2 w-full lg:w-2/4 gap-2"
        >
          {/* Section title */}
          <span className="text-[#00aaff]">푸드헌터</span>

          {/* Main headline */}
          <h1 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200">
            푸드헌터 사이트의 기능
          </h1>

          {/* Description */}
          <p className="py-2">앙기모</p>
          <p>앙기모 세부</p>

          {/* Icons and text sections */}
          <div className="flex flex-wrap items-center gap-5 mt-3">
            <span className="flex gap-4 items-center w-52">
              {/* Camera icon */}
              <IoSearch className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{' '}
              Search
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* File search icon */}
              <FaMapLocationDot className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{' '}
              Find it here
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* Home icon */}
              <MdFoodBank className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{' '}
              Choose food
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* Plane departure icon */}
              <MdOutlineRateReview className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{' '}
              View Review
            </span>
          </div>
        </div>

        {/* Right-side content with an image */}
        <div data-aos="fade-left">
          {/* Image component */}
          <Image src="/images/food2.webp" width={648} height={491} />
        </div>
      </section>
    </>
  )
}

export default WeAwesome
