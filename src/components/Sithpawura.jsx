import Heading from './Heading';

import { liyawalHero } from '../assets/images';
import { sithpawuraImageList } from '../assets/images/sithpawura';

const Sithpawura = () => {
  return (
    <section id="sithpawura" className="flex flex-col items-center p-12 bg-sithpawura-pattern bg-no-repeat bg-top">
      <Heading main="Sith Pawura" secondary="THE CHARITABLE PROGRAMME" />
      <p className="text-center mt-[-30px] max-w-5xl">
        The Sith Paura project is a yearly initiative undertaken by engineering students from University of Sri
        Jayewardenepura to provide educational assistance to hard-to-learn children. The aim of this project is to help
        children who face difficulty in learning due to various factors such as economic, social, and psychological
        barriers. <br />
        The project is designed to provide a holistic learning experience for the children, with a focus on improving
        their academic performance and enhancing their overall development. The project encompasses various activities
        such as teaching basic literacy and numeracy skills, providing individual attention and counseling to children,
        conducting extracurricular activities, and providing educational materials such as books, stationery, and other
        resources. The project involves a team of dedicated volunteers who work tirelessly to make a positive impact on
        the lives of these children. The volunteers undergo training sessions to equip them with the necessary skills
        and knowledge required to work with children from diverse backgrounds. <br />
        Overall, the Sith Paura project is a commendable initiative that seeks to empower children with the tools and
        resources necessary to overcome their learning barriers and achieve their full potential. It is a testament to
        the power of education to transform lives and make a positive impact on society.
      </p>
      <img src={liyawalHero} className="max-w-[400px] my-8" />
      <div className="max-w-[1500px]">
        <div className="flex flex-row flex-wrap items-center justify-center mx-auto">
          {sithpawuraImageList.map((image, index) => {
            return <img src={image} alt="sithpawura" className="w-[450px] p-2" key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Sithpawura;
