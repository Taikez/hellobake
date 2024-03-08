import React from 'react';
import bgBanner from '../assets/banner.jpg';

const Hero = () => {
  return (
    <div className="bg-cover bg-center" style={{backgroundImage: `url(${bgBanner})`, height: '80vh'}}>
        <div className="flex justify-center md:justify-start items-center h-full w-full py-10 md:py-28" data-aos="fade" data-aos-duration="1000">
            <div className="w-[36rem] bg-white bg-opacity-70 h-full rounded-2xl mx-12 md:ml-24 p-8">
                <h1 className="text-lg md:text-3xl font-bold mb-5 md:mb-16" data-aos="fade" data-aos-duration="1000" data-aos-delay="1000">Freshly baked with love!</h1>
                <p className="text-sm md:text-lg leading-6 md:leading-10 mb-6 md:mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">Whether it's a special occasion or a simple moment of joy, let <b>Hello Bake</b> be a part of your story. From birthdays to weddings, anniversaries to just-because days, our creations are here to add a touch of sweetness to every milestone. Because life is too short to skip dessert, and at <b>Hello Bake</b>, we believe in celebrating the sweetness of life, one freshly baked treat at a time.</p>
                <a className="bg-[#554a4a] hover:bg-[#342d2d] hover:ease-in-out hover:transition-all text-white rounded-lg text-xs md:text-base px-4 py-2" href="https://wa.link/8k7nd7" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1500">Order Now</a>
            </div>
        </div>
    </div>
  );
};

export default Hero;
