import Heading from './Heading';

const Partners = () => {
  return (
    <section id="partners" className="p-12">
      <Heading main="PARTNERS" secondary="OF VIRAMAYAK LIVE IN CONCERT" />
      {/* <h3>Our Partners</h3>
      {partnersList.map((partnerCategory, index) => {
        return (
          <PartnerCategory
            key={index}
            type={partnerCategory.type}
            partners={partnerCategory.partners}
          />
        );
      })} */}
    </section>
  );
};

export default Partners;
