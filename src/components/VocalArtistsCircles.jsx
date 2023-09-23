import Heading from './Heading';

import { vocalArtistsCircle } from '../assets/images/vocalArtistsCircle';

const VocalArtistsCircles = () => {
  return (
    <section id="artists" className="py-12 lg:p-12 mb-12">
      <div>
        <Heading main="Vocal Artist" secondary="BY FACULTY OF ENGINEERING" />
      </div>
      <div className="flex flex-row flex-wrap justify-center w-full lg:w-4/5 mx-auto">
        {vocalArtistsCircle.map((artist, index) => {
          return <img src={artist} alt="singer" key={index} className="m-2 lg:m-0 w-36 lg:w-48" />;
        })}
      </div>
    </section>
  );
};

export default VocalArtistsCircles;
