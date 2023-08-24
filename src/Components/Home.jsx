import React from 'react'
import { Link } from 'react-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';

const Home = () => {
  const headline = {
    translateY: [0, 10],
    scale: [1, 0.95, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    className: 'max-w-screen-2xl mx-auto flex items-center',
    expanded: false,
    children: (
      <div className="mx-auto mb-72 md:mb-60 w-full max-w-screen-2xl px-4 mt-24 sm:mt-32 xl:mt-40 sm:px-6 lg:px-8">
        <h1 className="mt-4 max-w-[36rem] text-5xl font-extrabold tracking-tight text-slate-50 sm:text-7xl xl:max-w-[43.5rem]">
          We create best digital products.
        </h1>
        <p className="mt-4 md:mt-8 max-w-lg text-lg text-slate-300 hover:text-slate-200 transition-all duration-150">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolorum commodi et suscipit eum saepe accusamus voluptate numquam cupiditate vitae. Sequi accusantium atque delectus deleniti assumenda cupiditate omnis optio? Dolorem delectus sit ducimua sequi? Odio, tempore blanditiis.
        </p>
        <div className="mt-10 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link to="projects" duration={500} smooth={true} className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-blue-700 text-white hover:bg-blue-800 cursor-pointer transition-all duration-150">EXPLORE OUR WORK</Link>
        </div>
      </div>
    ),
  };


  const foregroundLaptop = {
    translateY: [10, 40],
    shouldAlwaysCompleteAnimation: true,
    className: 'hidden lg:block max-w-screen-2xl mx-auto',
    children: (
      <div className='absolute inset-0 flex justify-center items-center -top-[20vh]'>
        <img
          src="/foreground-laptop.png"
          alt="Foreground Laptop"
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
  };

  const foregroundScreen = {
    translateY: [10, 20],
    opacity: [0.6, 0],
    scale: [1, 1.05],
    className: 'hidden xl:block max-w-screen-2xl mx-auto',
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className='absolute inset-0 flex justify-center items-center -top-[20vh]'>
        <img
          src="/foreground-screens.png"
          alt="Foreground screens"
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
  };

  const backgroundDots = {
    translateY: [10, 30],
    shouldAlwaysCompleteAnimation: true,
    className: 'hidden xl:block max-w-screen-2xl mx-auto',
    children: (
      <div className='absolute inset-0 flex justify-center items-center -top-[20vh]'>
        <img
          src="/background-dots.png"
          alt="Background dots"
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
  };
  const background = {
    image:
      '/background-blue.png',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };
  return (
    <ParallaxBanner
      layers={[background, backgroundDots, foregroundLaptop, foregroundScreen, headline]}
      className="h-[120vh] bg-slate-900"
    />
  );
}

export default Home