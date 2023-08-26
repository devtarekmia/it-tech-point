import './App.css';
import Navbar from './Components/Navbar'
import Services from './Components/Services';
import Home from './Components/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Clients from './Components/Clients';
import Projects from './Components/Projects';
import Reviews from './Components/Reviews';


function App() {

  return (
    <>
      <ParallaxProvider>
        <header id='home'>
          <Navbar />
          <Home />
        </header>
        <section id='services' className='bg-slate-200 dark:bg-slate-900'>
          <Services />
        </section>
        <section id='clients' className='bg-slate-200 dark:bg-slate-900 py-8'>
          <Clients />
        </section>
        <section id='projects' className='bg-slate-200 dark:bg-slate-900 pb-20 sm:pb-32 md:pb-40'>
          <Projects />
        </section>
        <section id='testimonial' className='bg-slate-200 dark:bg-slate-900 pb-20 sm:pb-32 md:pb-40'>
          <Reviews />
        </section>
        <section id='contact' className='bg-slate-200 dark:bg-slate-900 pb-20 sm:pb-32 md:pb-40'>
          <Contact />
        </section>
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default App;
