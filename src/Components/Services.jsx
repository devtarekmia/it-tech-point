import React from 'react'
import { CgEditBlackPoint } from "react-icons/cg";
import { Link } from 'react-scroll';
import { CgOrganisation, CgCalculator, CgSmartphoneChip, CgWebsite } from "react-icons/cg";
const Services = () => {
  const service_list = [
    {
      title: 'Business Management',
      logo: <CgSmartphoneChip />
    },
    {
      title: 'Business Portfolio',
      logo: <CgOrganisation />
    },
    {
      title: 'Transaction Management',
      logo: <CgCalculator />
    },
    {
      title: 'Website Development',
      logo: <CgWebsite />
    },

  ]
  return (
    <>
      <div className=''>
        <div className="max-w-screen-2xl px-4 lg:px-8 mx-auto">
          <div className='bg-slate-100 rounded-xl z-50 -translate-y-40 lg:-translate-y-24 bg-light-gradient dark:bg-none dark:bg-slate-800 bg-no-repeat bg-cover' >
            <div className="px-8 xl:px-14 py-10 md:py-16 xl:p-20 w-full max-w-screen-2xl">
              <div className="flex flex-col md:flex-row space-y-16 md:space-x-16 md:space-y-0">
                <div className='flex md:basis-2/5 flex-col justify-around'>
                  <div className="space-y-4 mb-8">
                    <h4 className='text-slate-800 dark:text-slate-200 text-3xl lg:text-4xl xl:text-5xl capitalize font-bold tracking-tight mb-4'><span className='text-blue-700 dark:text-blue-500'>services</span> we can help you with !</h4>
                    <p className="font-normal text-gray-500 dark:text-gray-400">consequuntur sit ratione, cum rerum quis cupiditate neque ducimus doloremque? Officia aspernatur alias nobis minus quis ratione eos saepe tenetur!</p>
                    <ul className='flex flex-col font-semibold text-gray-500 dark:text-gray-400 mb-4'>
                      <li className='inline-flex items-center'><CgEditBlackPoint className='me-2 -mb-1 text-lg text-blue-600' /> Lorem ipsum dolor sit amet.</li>
                      <li className='inline-flex items-center'><CgEditBlackPoint className='me-2 -mb-1 text-lg text-blue-600' /> Lorem ipsum dolor sit.</li>
                    </ul>
                  </div>
                  <div className='flex items-center flex-col sm:flex-row justify-between sm:divide-x divide-blue-600'>
                    <div className='flex w-full flex-col sm:flex-row items-center justify-start min-w-max sm:me-3'>
                      <div>
                        <img src="/avater-64x64.jpg" alt="CEO" className='h-24 w-24 sm:h-14 sm:w-14 rounded-full border-blue-600 border-2 sm:mr-4' />
                      </div>
                      <div>
                        <h6 className='capitalize text-center sm:text-left font-semibold text-slate-800 dark:text-slate-200 text-xl sm:text-lg pb-1 mt-2 sm:mt-0 whitespace-nowrap'>Jayed bin apu</h6>
                        <p className='capitalize text-center sm:text-left text-sm font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap'>CEO, founder</p>
                      </div>
                    </div>
                    <hr className="h-px w-5/6 mx-auto bg-blue-300 border-0 dark:bg-slate-700 my-6 sm:hidden" />
                    <div className='flex w-full items-center justify-center min-w-max'>
                      <div className='mx-auto sm:ps-3'>
                        <Link to="projects" duration={500} smooth={true} className="inline-flex justify-center rounded-full text-sm text-center font-semibold py-3 px-4 bg-blue-700 text-white hover:bg-blue-800 cursor-pointer transition-all duration-150">OUR PROJECTS</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex md:basis-3/5 '>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-stretch w-full">
                    {service_list.map((item, i) => (
                      <div key={i} className='relative flex flex-col md:max-w-sm p-6 bg-neutral-100 bg-opacity-50 backdrop-blur-lg border border-neutral-200 hover:bg-neutral-50 hover:bg-opacity-60 hover:border-neutral-200 hover:scale-105 rounded-lg shadow dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600 dark:hover:border-slate-500 dark:hover:bg-opacity-70 overflow-hidden min-w-[15rem] transition-all duration-300'>
                        <div className="absolute bg-slate-500 bg-opacity-10 dark:bg-slate-200 dark:bg-opacity-10 rounded-full h-44 w-44 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"></div>
                        <div className='mx-auto text-5xl pp-2 text-blue-700 dark:text-blue-400'>{item.logo}</div>
                        <h5 className="p-4 md:px-0 text-2xl font-semibold text-center text-blue-700 dark:text-slate-100 dark:hover:text-slate-200 z-10">{item.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Services