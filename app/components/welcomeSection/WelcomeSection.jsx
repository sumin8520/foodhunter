import Image from 'next/image'

const WelcomeSection = () => {
  return (
    <>
      {/* Section containing an image and a text box */}
      <section className="flex  items-start max-w-screen-2xl m-auto lg:px-8 flex-col lg:flex-row px-8 py-20 relative">
        {/* Image on the left */}
        <Image
          className="w-full lg:w-2/4 -mb-10 lg:-mb-0"
          data-aos="fade-right"
          src="/images/food1.webp"
          width={748}
          height={567}
          alt="Welcome Image"
        />
        {/* Text box on the right */}
        <div
          data-aos="fade-up"
          className="bg-[#133ea1] px-10 py-10 md:px-14 md:py-14 xl:px-20 lg:absolute lg:w-[60%] lg:right-0 lg:bottom-5  w-[95%]"
        >
          {/* Text content */}
          <p className="text-[#ffffff]" style={{ fontSize: '20px' }}>
            푸드헌터란? 음식 사냥이 아닌 트레저헌터와 비슷한 형태의 의미로
            당신들에게 맞는 음식을 찾아드립니다!
          </p>
        </div>
      </section>
    </>
  )
}

export default WelcomeSection
