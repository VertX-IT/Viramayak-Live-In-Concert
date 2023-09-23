import { viramayak_circular_logo, liyawalHero } from '../assets/images';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center text-center max-w-full bg-hero-pattern bg-cover bg-center mb-6 md:mb-24 lg:h-screen"
    >
      <Navbar />

      <div className="flex lg:flex-row flex-col items-center mx-3 lg:mx-0 my-auto">
        <img
          src={viramayak_circular_logo}
          alt="viramayak_circular_logo"
          className="md:my-12 md:max-w-[550px] lg:max-w-[500px] lg:mr-6"
        />
        <div className="flex flex-col lg:ml-6">
          <p className="font-headings text-6xl font-semibold text-secondary">Viramayak</p>
          <p className="font-headings text-4xl font-bold text-secondary">Live In Concert</p>
          <img src={liyawalHero} alt="decoration" className="my-5" />
          <p className="font-secondary text-3xl text-secondary">
            <strong> 23 September 2023 </strong> <br />
            Maharagama Youth centre
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
