import React from 'react'

const Reviews = () => {
  const testimonials = [
    {
      name: 'Alex Smith',
      title: 'Business Owner',
      image: '/clients-0.jpg',
      quote: 'Your business management app streamlined our operations efficiently. Impressive!',
    },
    {
      name: 'Emily Johnson',
      title: 'Store Manager',
      image: '/clients-2.jpg',
      quote: 'The inventory management app saved us time and reduced errors. Great tool!',
    },
    {
      name: 'John Doe',
      title: 'Web Developer',
      image: '/clients-1.jpg',
      quote: 'Our website development was seamless, and the final result exceeded expectations!',
    },
    {
      name: 'Sarah Miller',
      title: 'Auction Organizer',
      image: '/clients-3.jpg',
      quote: 'The auction management app made hosting auctions a breeze. Highly recommended!',
    },
    {
      name: 'Michael Thompson',
      title: 'Business Consultant',
      image: '/clients-4.jpg',
      quote: 'Our business portfolio looks stunning thanks to your creative touch. Excellent work!',
    },
    {
      name: 'Jessica Lee',
      title: 'Financial Analyst',
      image: '/clients-5.jpg',
      quote: 'The transaction management app boosted our efficiency and accuracy. Thumbs up!',
    },
    {
      name: 'David Clark',
      title: 'Entrepreneur',
      image: '/clients-6.jpg',
      quote: 'Your business management app helped us stay organized and improved productivity.',
    },
    {
      name: 'Olivia White',
      title: 'Inventory Supervisor',
      image: '/clients-7.jpg',
      quote: 'The inventory management app is a game-changer. It simplified our processes!',
    },
    {
      name: 'Robert Brown',
      title: 'Auctioneer',
      image: '/clients-4.jpg',
      quote: 'Outstanding work on our auction management app. It\'s user-friendly and powerful.',
    },
  ];

  const x = Math.ceil(testimonials.length / 3);
  const testimonial_cols = [];
  for (let i = 0; i < testimonials.length; i += x) {
    testimonial_cols.push(testimonials.slice(i, i + x));
  }

  return (
    <>
      <div className="text-center px-8 mb-20 sm:mb-32 md:mb-40">
        <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">“Best practices” don’t actually work.</h2>
        <figure>
          <blockquote>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-700 dark:text-slate-300">I’ve written <a href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/" className="text-blue-500 font-semibold dark:text-blue-400">a few thousand words</a> on why traditional “semantic className names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
            <img src="/avater-64x64.jpg" alt="" className="w-14 h-14 rounded-full" loading="lazy" decoding="async" />
            <div>
              <div className="text-slate-900 font-semibold dark:text-white">Jayed Bin Apu</div>
              <div className="mt-0.5 text-sm leading-6 text-slate-500 dark:text-slate-400">CEO, Founder</div>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-3 md:px-5 lg:px-8 focus:outline-none">
        <h2 className="sr-only">Testimonials</h2>
        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonial_cols.map((items, x) => (
            <ul key={x} className={`space-y-8 ${x === 0 ? '' : (x === 1 ? 'hidden sm:block' : x === 2 ? 'hidden lg:block' : '')}`}>
              {items.map((item, i) => (
                <li key={i * Math.random()} className='text-sm leading-6'>
                  <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5 md:hover:scale-105 transition-all duration-300">
                    <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
                      <p>{item.quote}</p>
                    </blockquote>
                    <figcaption className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async" />
                      <div className="flex-auto">
                        <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
                          {item.name}
                        </div>
                        <div className="mt-0.5 text-slate-500 dark:text-slate-400">
                          {item.title}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              ))}

            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default Reviews