import { viramayak_circular_logo } from "../assets/images";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center text-center">
      <img
        src={viramayak_circular_logo}
        alt="viramayak_circular_logo"
        className="max-w-[220px] mb-8"
      />
      <h1 className="font-headings text-4xl text-primary">
        Viramayak Live In Concert <br />
        23 September 2023 <br />
        Maharagama Youth centre
      </h1>
    </section>
  );
};

export default Hero;
