import Image from 'next/image'
import React from 'react'
import { AnimatedGroup } from '../motion-primitives/animated-group'
import About from './aboutme'
import Skills from './skills'
import Experiences from './exp'

export default function Personal() {
  return (
    <div className='pt-5 text-[#004030] font-sans'>
      <AnimatedGroup variants={{
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
            x:-300,  
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

      <div className='relative w-[28rem] h-[28rem] mx-auto mb-5'>
        <Image fill alt="peter muthama's photo" src="/profile-pic.png"/>
        </div>
      </AnimatedGroup>
      <About/>
      <Skills/>
      <Experiences/>
    </div>
  )
}
