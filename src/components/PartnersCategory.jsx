import Partner from './Partner';

const PartnersCategory = ({ partners }) => {
  console.log(partners.partners);
  console.log(partners.partners.length);
  return (
    <section className="m-5">
      <div className="flex flex-auto flex-wrap justify-center shrink-0">
        {partners.partners.map((partner, index) => {
          return <Partner key={index} image={partner.image} />;
        })}
      </div>
      <h2 className="text-center mt-3 text-lg text-primary font-semibold">{partners.type}</h2>
    </section>
  );
};

export default PartnersCategory;
