'use client'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      {/*////////////////////////////////////////////
      ——————————————— Header section ———————————————
      ///////////////////////////////////////////////*/}
      <header className="flex justify-between items-center max-w-screen-2xl m-auto py-5 px-8 relative ">
        {/*////////////////////////////////////////////
           ————————————————— Logo —————————————————
        ///////////////////////////////////////////////*/}
        <div>
          <Link className="text-[#3369e7] text-2xl font-bold" href="/">
            Foodhunter
          </Link>
        </div>

        {/*////////////////////////////////////////////
        ————————————————— Navigation —————————————————
        ///////////////////////////////////////////////*/}
        <nav className="lg:block hidden">
          <ul className="flex gap-5 text-[#3369e7b3]">
            <li>
              <Link
                className="hover:text-[#3369e7] ease-in-out duration-200"
                href="/"
              >
                메인화면
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#3369e7] ease-in-out duration-200"
                href="/whyus"
              >
                사이트 기능
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#3369e7] ease-in-out duration-200"
                href="/services"
              >
                지역
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#3369e7] ease-in-out duration-200"
                href="/gallery"
              >
                음식추천
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
