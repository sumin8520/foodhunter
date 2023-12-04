import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
export default function MySwiper() {
  return (
    <>
      {/* Initialize Swiper */}
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <div className="max-w-screen-2xl m-auto text-center">
          {/* Slide Start */}
          <SwiperSlide>
            <div className="flex flex-col items-center max-w-3xl w-[90%] m-auto text-center py-8">
              <Image
                className="rounded-full"
                src="/images/chair1.webp"
                height={100}
                width={100}
              />
              <p className="py-5">
                “프로젝트 팀장이며 팀원 태연이와 함께 프론트엔드, 백엔드 작업과
                사이트 구성도를 제작하였으며 메인화면과 사이트 소개 관련과 최종
                사이트 검토를 맡았습니다.”
              </p>
              <p className="text-gray-500 font-bold">최수민</p>
              <p>정보보호학과 92015506</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center max-w-3xl w-[90%] m-auto text-center">
              <Image
                className="rounded-full"
                src="/images/chair2.webp"
                height={100}
                width={100}
              />
              <p className="py-5">
                “안녕하세요 이랴이랴달려라팀의 이태연입니다. 팀장 수민이와 함께
                프론트엔드, 백엔드 동시에 작업했으며 지역 맞춤 음식추천 페이지와
                검색기능등을 맡았습니다.”
              </p>
              <p className="text-gray-500 font-bold">이태연</p>
              <p>정보보호학과 92015374</p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  )
}
