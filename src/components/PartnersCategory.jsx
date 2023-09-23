import Partner from './Partner';

const PartnersCategory = ({ partners }) => {
  return (
    <section className="">
      <h2>{partners.type}</h2>
      {partners.partners.map((partner, index) => {
        return <Partner key={index} image={partner.image} name={partner.name} />;
      })}
    </section>
  );
};

export default PartnersCategory;
