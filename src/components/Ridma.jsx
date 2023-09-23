import { ridma } from '../assets/images';
import Heading from './Heading';

const Ridma = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:mx-28 mx-3">
      <Heading main="Featuring" secondary="RIDMA WEERAWARDNE" />
      <div className="flex flex-col lg:flex-row mx-auto items-center max-w-full lg:w-9/12 h-min-[60vh]">
        <img src={ridma} alt="Ridma" className="lg:max-w-[600px] object-contain lg:mr-4 md:max-w-[500px]" />
        <p className="hidden lg:block text-center text-xl w-5/6">
          Ridma Weerawardena is one of Sri Lanka's most celebrated singers and his musical journey is a tapestry of
          emotions and melodies that truly stands out. With numerous chart-topping hits and successful collaborations,
          he has garnered critical acclaim, firmly establishing himself as a prominent figure in the country's music
          industry. Ridma's talent as a composer further showcases his versatility as a multifaceted musician and with a
          voice that resonates with the soul, he has won the hearts of music lovers across the nation. <br /> Don't miss
          the chance to witness Ridma's extraordinary talent and his unforgettable contribution to the world of music at
          the Viramayak Live in Concert.
        </p>
      </div>
    </section>
  );
};

export default Ridma;
