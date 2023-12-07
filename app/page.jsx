'use client'

// Importing various components used in the Home component
import Hero from './components/hero/Hero'
import Testimonial from './components/testimonial/Testimonial'
import WeAwesome from './components/weAwesome/WeAwesome'
import WelcomeSection from './components/welcomeSection/WelcomeSection'
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs'

// Defining the Home component as a default export
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        pageName="푸드헌터에 오신 여러분을 환영합니다."
        title="그대들에게 맞는 음식을 찾아보세요!"
        bgColor="#ffffff"
      />
      {/* Welcome Section */}
      <WelcomeSection />
      {/* Why Stodeo Section */}

      <WhyChooseUs />
      {/* Recent Blog Section */}

      <WeAwesome />
      {/* Testimonial Section */}
      <Testimonial />
    </>
  )
}
