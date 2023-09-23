import Heading from './Heading';
import { partnersList } from '../assets/constants';
import PartnersCategory from './PartnersCategory';

const PartnersSection = () => {
  return (
    <section id="partners" className="p-12 h-screen">
      <Heading main="PARTNERS" secondary="OF VIRAMAYAK LIVE IN CONCERT" />
      {partnersList.map((partnersCategory, index) => {
        return <PartnersCategory key={index} partners={partnersCategory} />;
      })}
    </section>
  );
};

export default PartnersSection;
