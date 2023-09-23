import { vocalArtistsIndividual } from '../assets/images/vocalArtistsIndividual';

const VocalArtistsIndividual = () => {
  return (
    <section className="p-12">
      <div className="flex flex-row flex-wrap justify-center w-4/5 mx-auto">
        {vocalArtistsIndividual.map((artist, index) => {
          return <img src={artist} alt="singer" key={index} className="w-48" />;
        })}
      </div>
    </section>
  );
};

export default VocalArtistsIndividual;
