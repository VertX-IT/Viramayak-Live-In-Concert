const Partner = ({ image, type }) => {
  return (
    <div className="">
      <img className="" src={image} alt="partner" />
      <p>{type}</p>
    </div>
  );
};

export default Partner;
