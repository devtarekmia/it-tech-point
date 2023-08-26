import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Projects = () => {
  const recent_projects = [
    {
      title: 'e-Auction Management',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores aperiam sit porro vero illo?',
      image: '/auction.png',
      url: '/',
    },
    {
      title: 'Inventory Management',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores aperiam sit porro vero illo?',
      image: '/inventory.png',
      url: '/',
    },
    {
      title: 'Transaction Management',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores aperiam sit porro vero illo?',
      image: '/management.png',
      url: '/',
    },
    {
      title: 'Export/Import Business',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores aperiam sit porro vero illo?',
      image: '/export.png',
      url: '/',
    },
    {
      title: 'Business Portfolio',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores aperiam sit porro vero illo?',
      image: '/portfolio.png',
      url: '/',
    },
    {
      title: 'Custom Website',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores aperiam sit porro vero illo?',
      image: '/website.jpg',
      url: '/',
    },
  ]
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-3 md:px-5 lg:px-8 focus:outline-none">
        <h2 className="text-center font-extrabold leading-tight pb-4 text-3xl lg:text-4xl 2xl:text-5xl text-slate-800 dark:text-slate-50 mb-8 2xl:mb-16">Our Recent Projects</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center">
          {recent_projects.map((item, i) => (
            <div key={i} className="min-w-sm sm:max-w-sm 2xl:max-w-md bg-slate-50 border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700 m-4 hover:scale-105 transition-all duration-300">
              <img className="rounded-t-lg" src={item.image} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{item.title}</h5>
                <p className="mb-3 font-normal text-slate-700 dark:text-slate-300">{item.desc}</p>
                <a href={item.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  View Live <HiOutlineArrowNarrowRight className='text-xl ms-1' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects