import Heading from './Heading';
import { partnersImageList } from '../assets/images/partners';

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
      {partnersImageList.map((image, index) => {
        return <img src={image} key={index} className="" />;
      })}
    </section>
  );
};

export default Partners;
