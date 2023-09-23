import { ridma } from '../assets/images';
import Heading from './Heading';

const Ridma = () => {
  return (
    <section className="flex flex-col h-screen items-center justify-center mx-28">
      <Heading main="FEATURING" secondary="RIDMA WEERAWARDNE" />
      <div className="flex flex-row mx-auto items-center w-9/12 h-min-[60vh]">
        <img src={ridma} alt="Ridma" className="w-[600px] object-contain mr-4" />
        <p className="text-center text-xl w-5/6">
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
