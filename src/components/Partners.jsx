import { PartnerCategory } from "../components"
import { partnersList } from "../assets/constants";

const Partners = () => {
  return (
    <section id="partners" className="flex flex-col items-center">
      <h3>Our Partners</h3>
      {partnersList.map((partnerCategory, index) => {
        return (
          <PartnerCategory
            key={index}
            type={partnerCategory.type}
            partners={partnerCategory.partners}
          />
        );
      })}
    </section>
  );
};

export default Partners;
