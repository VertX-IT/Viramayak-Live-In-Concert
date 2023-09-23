import Heading from './Heading';

import { vocalArtistsCircle } from '../assets/images/vocalArtistsCircle';

const VocalArtistsCircles = () => {
  return (
    <section id="artists" className="p-12 overflow-y-auto">
      <div>
        <Heading main="VOCAL ARTISTS" secondary="BY FACULTY OF ENGINEERING" />
      </div>
      <div className="flex flex-row flex-wrap justify-center w-4/5 mx-auto">
        {vocalArtistsCircle.map((artist, index) => {
          return <img src={artist} alt="singer" key={index} className="w-48" />;
        })}
      </div>
    </section>
  );
};

export default VocalArtistsCircles;
