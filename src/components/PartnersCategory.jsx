import Partner from './Partner';

const PartnersCategory = ({ partners }) => {
  return (
    <section className="">
      <h2>{partners.type}</h2>
      {partners.map((partner, index) => {
        return <Partner image={partner.image} name={partner.name} />;
      })}
    </section>
  );
};

export default PartnersCategory;
