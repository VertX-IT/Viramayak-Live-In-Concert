import Heading from './Heading';
import { partnersList } from '../assets/constants';
import PartnersCategory from './PartnersCategory';

const PartnersSection = () => {
  return (
    <section id="partners" className="py-12 lg:p-12 flex flex-col max-w-[1600px] mx-auto">
      <Heading main="PARTNERS" secondary="OF VIRAMAYAK LIVE IN CONCERT" />
      <div className="flex flex-row flex-wrap justify-center items-center">
        {partnersList.map((partnersCategory, index) => {
          return <PartnersCategory key={index} partners={partnersCategory} />;
        })}
      </div>
    </section>
  );
};

export default PartnersSection;
