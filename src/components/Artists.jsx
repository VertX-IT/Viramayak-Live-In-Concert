import Artist from "./Artist";
import { artistsList } from "../assets/constants";

const Artists = () => {
  return (
    <section id="artists">
      {artistsList.map((artist, index) => {
        return (
          <Artist
            key={index}
            image={artist.image}
            name={artist.name}
            line1={artist.line1}
          />
        );
      })}
    </section>
  );
};

export default Artists;
