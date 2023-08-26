import React from 'react'
import { ImLocation2, ImPhone, ImEnvelop, ImFacebook, ImWhatsapp, ImTwitter, ImGithub, ImRss } from "react-icons/im";

const Contact = () => {

  const contactInfo = [
    {
      type: 'Office Address',
      icon: <ImLocation2 />,
      desc: [{ line1: 'Panchaborno complex, bhajanpur' }, { line2: 'tetulia, panchagarh' }]
    },
    {
      type: 'Phone Number',
      icon: <ImPhone />,
      desc: [{ line1: '+880-1796-194781' }, { line2: '+880-1303-242844' }]
    },
    {
      type: 'Mail Address',
      icon: <ImEnvelop />,
      desc: [{ line1: 'ittechpointbd@gmail.com' }, { line2: 'hello@ittechpointbd.com' }]
    }
  ];
  const social = [
    {
      link: '/',
      icon: <ImFacebook />,
    },
    {
      link: '/',
      icon: <ImWhatsapp />,
    },
    {
      link: '/',
      icon: <ImTwitter />,
    },
    {
      link: '/',
      icon: <ImGithub />,
    },
    {
      link: '/',
      icon: <ImRss />,
    }
  ]

  return (
    <>

      <div className="w-full max-w-screen-2xl px-4 sm:px-3 md:px-5 lg:px-8 mx-auto lg:space-y-40 ">

        <div className='flex flex-col lg:flex-row bg-slate-50 text-slate-900 dark:bg-slate-800 mx-auto rounded-t-lg lg:rounded-lg'>
          <div className='w-full h-44 sm:h-80 lg:h-auto lg:w-1/2 lg:order-2'>
            <img className="object-cover h-full w-full rounded-t-lg lg:rounded-l-none lg:rounded-r-lg" src="/contact.jpg" alt="" />
          </div>
          <div className='px-8 md:px-12 lg:px-16 2xl:px-32 py-12 lg:py-16 w-full lg:order-1'>
            <h3 className='font-extrabold leading-tight pb-4 text-4xl xl:text-5xl text-slate-800 dark:text-slate-50'>Contact & Join Together</h3>
            <p className='text-base text-slate-500 lg:max-w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo iure velit impedit dolor sit amet ut non. Harum mollitia exercitationem officia enim dolores!</p>
            <div className='space-y-6 mt-12'>
              {contactInfo.map((item, i) => (
                <div key={i} className="flex space-x-6">
                  <div>
                    <div className='flex items-center justify-center inset-0 p-3 text-white dark:text-blue-600 bg-slate-600 dark:bg-slate-900 rounded-xl '>
                      <span className='text-xl mx-auto'>{item.icon}</span>
                    </div>
                  </div>
                  <div className='space-y-1'>
                    <h4 className='text-lg font-semibold text-slate-900 dark:text-blue-600 -translate-y-1'>{item.type}:</h4>
                    {item.desc.map((items, x) => (
                      <div key={x}>
                        <p className='text-md text-slate-500 max-w-xs'>{items.line1}</p>
                        <p className='text-md text-slate-500 max-w-xs'>{items.line2}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
            <div className="flex mt-8 space-x-8 justify-around sm:justify-start">
              {social.map((item, i) => (
                <a key={i} href={item.link} className=" text-xl md:text-2xl xl:text-3xl text-slate-400 hover:text-blue-600 transition-all duration-150">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row bg-slate-50 text-slate-900 dark:bg-slate-800 mx-auto rounded-b-lg lg:rounded-lg'>
          <hr className="h-px -mb-3 w-5/6 mx-auto bg-slate-200 border-0 dark:bg-slate-700 lg:hidden" />
          <div className='w-full h-44 hidden lg:block lg:h-auto lg:w-1/2'>
            <img className="object-cover h-full w-full rounded-t-lg lg:rounded-r-none lg:rounded-l-lg" src="/contact-2.jpg" alt="" />
          </div>

          <div id='get-quote' className='px-8 md:px-12 lg:px-16 2xl:px-32 py-16 w-full'>
            <h3 className='uppercase font-semibold pb-4 text-2xl text-slate-800 dark:text-blue-600 mb-4'>REQUEST A FREE QUOTE</h3>
            <form>
              <div className="grid lg:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-md text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="first_name" className="peer-focus:font-medium absolute text-md text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-md text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="last_name" className="peer-focus:font-medium absolute text-md text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-md text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-md text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="grid lg:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-md text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="phone" className="peer-focus:font-medium absolute text-md text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-md text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="company" className="peer-focus:font-medium absolute text-md text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <textarea name="query" id="query" className="block py-2.5 px-0 w-full text-md text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " rows='1' required />
                <label htmlFor="query" className="peer-focus:font-medium absolute text-md text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type your query</label>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact