import React from 'react';
import Image from "../assets/avatar.svg"
import {FaGithub,FaYoutube,FaDribbble} from "react-icons/fa"
import {TypeAnimation} from "react-type-animation"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

const Banner = () => {
  return <section className='section' id='home'>
    <div className="container mx-auto">
      <div>
        {/* text */}
        <div>
          <h1>VIKASH <span>SHARMA</span></h1>
          <div className='mb-6 text-[36px] font-secondary font-semibold uppercase leading-[1] lg:text-[60px]'>
            <span className=' text-white mr-4'>I am a </span>
            <TypeAnimation sequence={[
              'Frontend Devloper',
              2000,
              'Designer',
              2000,
              'Frontend Devloper',
              2000,
              'Designer',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
           
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur qui quam. Facere perspiciatis laboriosam deserunt ad mollitia, numquam repellendus.z</p>
        </div>
        {/* Imgae */}
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
