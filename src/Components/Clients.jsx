import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brands from '../utils';

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };
  const reverse = {
    ...settings,
    rtl: true
  }

  return (

    <>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-3 md:px-5 lg:px-8 focus:outline-none">
        <h2 className="text-center font-extrabold leading-tight pb-4 text-3xl lg:text-4xl 2xl:text-5xl text-slate-800 dark:text-slate-50 mb-8 2xl:mb-16">Clients we are proud of</h2>
        <div className='py-8 dark:px-4 dark:bg-slate-800 dark:rounded-lg dark:border dark:border-slate-700'>
          <div className="pb-8">
            <Slider {...settings}>
              {brands.map((item, i) => (
                <div key={i} className='text-center h-16 overflow-hidden'>
                  <img src={item} alt='brand-logo' className='h-full w-auto object-contain mx-auto dark:grayscale dark:invert' />
                </div>
              ))}
            </Slider>
          </div >
          <div className="">
            <Slider {...reverse}>
              {brands.map((item, i) => (
                <div key={i} className='text-center h-16 overflow-hidden'>
                  <img src={item} alt='brand-logo' className='h-full w-auto object-contain mx-auto dark:grayscale dark:invert' />
                </div>
              ))}
            </Slider>
          </div >
        </div>
      </div >
    </>
  )
}

export default Clients