import Image from 'next/image'
import React from 'react'
import { AnimatedGroup } from '../motion-primitives/animated-group'
import About from './aboutme'
import Howedoit from './howedoit'
import Services from './services'
import Projects from './projects'
import Footer from './footer'

export default function Personal() {
  return (
    <div className='pt-5 text-[#dfe8ea] font-sans h-full w-full overflow-x-hidden'>
      <AnimatedGroup className='mt-20 w-full' variants={{
        container: {
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        },
        item: {
          hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 300,
            x:300,  
            rotateX: 0,
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            x:0,
            rotateX: 0,
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 1,
            },
          },
        },
      }}>

      <div className='relative lg:w-[28rem] lg:h-[28rem] w-[20rem] h-[20rem] mx-auto mb-5 shadow rounded-full'>
        <Image fill alt="ciado agency logo" src="/ciado.png" className='rounded-full'/>
        </div>
      </AnimatedGroup>
      <About/>
      <Services/>
      <Howedoit/>
      <Projects/>
      <Footer/>
    </div>
  )
}
