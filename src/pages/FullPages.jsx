import React from 'react'
import { Affix, Drawer } from '../comps'
import About from '../comps/About'
import Banner from '../comps/Banner'
import Contact from '../comps/Contact'
import CoverFlow from '../comps/CoverFlow'
import Footer from '../comps/Footer'
import Portfolio from '../comps/Portfolio'
import Resume from '../comps/Resume'
import Service from '../comps/Service'
import Skills from '../comps/Skills'

const FullPages = () => {
  return (
    <div>
            <Affix />
      <Drawer />
      <Banner />
      <About />
      {/* <Facts /> */}
      <Skills />
      <CoverFlow />
      {/* <Resume /> */}
      <Portfolio />
      <Service />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default FullPages