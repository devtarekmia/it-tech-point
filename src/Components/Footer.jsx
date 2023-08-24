import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { DiReact } from "react-icons/di";
const Footer = () => {
  const foot = [
    {
      title: 'company',
      links: [
        {
          link: '/',
          title: 'about',
        },
        {
          link: '/',
          title: 'careers',
        },
        {
          link: '/',
          title: 'brand center',
        },
        {
          link: '/',
          title: 'blog',
        },
      ]
    },
    {
      title: 'help center',
      links: [
        {
          link: '/',
          title: 'discord server',
        },
        {
          link: '/',
          title: 'twitter',
        },
        {
          link: '/',
          title: 'facebook',
        },
        {
          link: '/',
          title: 'contact us',
        },
      ]
    },
    {
      title: 'legal',
      links: [
        {
          link: '/',
          title: 'privacy policy',
        },
        {
          link: '/',
          title: 'licensing',
        },
        {
          link: '/',
          title: 'term\'s & condition',
        },
      ]
    },
    {
      title: 'download',
      links: [
        {
          link: '/',
          title: 'IOS',
        },
        {
          link: '/',
          title: 'android',
        },
        {
          link: '/',
          title: 'windows',
        },
        {
          link: '/',
          title: 'macOS',
        },
      ]
    },

  ]


  return (
    <>
      <footer className="bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl ">
          <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4 px-4 sm:px-6 lg:px-8">
            {foot.map((items, i) => (
              <div key={i}>
                <h2 className="mb-6 text-sm font-semibold text-slate-900 uppercase dark:text-blue-600">{items.title}</h2>
                <ul className="text-slate-500 dark:text-slate-400 font-medium capitalize">
                  {items.links.map((item, x) => (
                    <li key={x} className="mb-4">
                      <a href={item.link} className=" hover:text-blue-600 transition-all duration-150">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-slate-700">
          <div className="mx-auto w-full max-w-screen-2xl py-6 md:flex md:items-center md:justify-between px-4 sm:px-6 lg:px-8">
            <div className='text-center'>
              <span className="text-sm text-slate-500 dark:text-slate-300 sm:text-center">© 2023 <a href="https://flowbite.com/">IT TECH POINT</a>. All Rights Reserved.</span>
            </div>
            <div className="flex mt-4 space-x-5 items-center justify-center md:mt-0 text-slate-400">
              <span className='inline-flex items-center'>Made with <span className='slow-spin' title='React.JS'><DiReact className='mx-1 scale-150' /></span> by
                <a href="https://tarekmia.com" rel='noreferrer' target='_blank' title='Open tarekmia.com in new tab' className="ms-1 text-slate-500 hover:text-blue-600 dark:text-blue-300 transition-all duration-150 inline-flex items-start">tarekmia <MdOutlineArrowOutward className='text-xs align-super' /></a>
              </span>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer