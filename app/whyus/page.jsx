'use client'
import React from 'react'
import Hero from '../components/hero/Hero'
import WeAwesome from '../components/weAwesome/WeAwesome'
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs'
import Testimonial from '../components/testimonial/Testimonial'

const whyus = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero pageName="푸드헌터의 기능" title="푸드헌터를 사용하는 이유" />
      {/* We Awesome Section */}
      <WeAwesome />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      {/* Testimonial Section */}
      <Testimonial />
    </>
  )
}

export default whyus
