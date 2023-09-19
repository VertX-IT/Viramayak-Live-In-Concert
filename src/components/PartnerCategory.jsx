import Partner from "./Partner";


const PartnerCategory = ({ type, partners }) => {
  return (
    <div className="flex flex-col items-center">
      <h3>{type}</h3>
      {partners.map((partner, index) => {
        return (
          <Partner
            key={index}
            image={partner.image}
            name={partner.name}
          />
        );
      })}
    </div>
  );
};

export default PartnerCategory;
