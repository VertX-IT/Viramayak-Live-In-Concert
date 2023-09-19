import {
  sithpawura0,
  sithpawura1,
  sithpawura2,
  sithpawura3,
  sithpawura4,
} from "../assets/images";

const Sithpawura = () => {
  return (
    <section id="sithpawura" className="flex flex-col items-center text-center">
      <h3 className="text-secondary">
        Viramayak is a fund raising project for <br />
        <strong>Sith Pawura</strong>
        <br /> a charitable program done by the <br />
        Faculty of Engineering <br />
        University of Sri Jayewardenepura
      </h3>
      <h4 className="text-primary"> Sith Pawura projects</h4>
      <div className="flex flex-col">
        {/* // ? develop see more section
        <img className="w-fit pb-3" src={sithpawura0} alt="sithpawura" />
        <div className="">
          <img className="w-fit pb-3" src={sithpawura1} alt="sithpawura" />
        </div> */}
        <div className="">
          <img className="w-fit pb-3" src={sithpawura0} alt="sithpawura" />
          <img className="w-fit pb-3" src={sithpawura1} alt="sithpawura" />
          <img className="w-fit pb-3" src={sithpawura2} alt="sithpawura" />
          <img className="w-fit pb-3" src={sithpawura3} alt="sithpawura" />
        </div>
      </div>
    </section>
  );
};

export default Sithpawura;
