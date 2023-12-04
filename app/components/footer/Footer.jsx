import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaSnapchat,
  FaWhatsapp,
  FaGithub,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className=" bg-[#efefef]">
      <div className="max-w-screen-2xl m-auto py-8 px-8">
        <div className="flex justify-between lg:flex-row flex-col gap-12 lg:gap-0">
          {/* About Stodeo */}
          <div>
            <div className="mb-12">
              <h3 className="text-[#3369e7] uppercase mb-3">
                About Foodhunter
              </h3>
              <p className="max-w-md">
                푸드헌터의 기능을 이용하여 당신의 배를 불리세요!
              </p>
            </div>
            <div>
              {/* Social Icons */}
              <h3 className="text-[#3369e7] uppercase mb-3">Connect</h3>
              <div className="flex gap-2">
                <FaGithub className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#3369e7] hover:text-white duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-[#3369e7] uppercase mb-3">기능사용</h3>
            <ul className="space-y-3">
              <li className="relative pl-2 cursor-pointer group">
                HTML5
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                MongoDB
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Javascript
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Next JS
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Tailwind CSS
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Swiper JS
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
            </ul>
          </div>
          {/* Services Links */}
          <div>
            <h3 className="text-[#3369e7] uppercase mb-3">
              다운받은 패키지 목록
            </h3>
            <ul className="space-y-3">
              <li className="relative pl-2 cursor-pointer group">
                react-icons
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                autoprefixer
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                postcss
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                Next.js Website
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                nextauth
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#3369e7]  group-hover:scale-y-100"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Copyright */}
      <div className="text-center py-8 flex flex-col bg-gray-600 text-white">
        <span>
          Copyright ©2023 All rights reserved | This template is made for
          practice purposes by{' '}
          <span className="text-[#3369e7] font-bold"> 이랴이랴달려라</span>
        </span>
      </div>
    </section>
  )
}

export default Footer
