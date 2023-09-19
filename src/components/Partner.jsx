const Partner = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center text-primary">
      <img src={image} alt="partner" className="w-[120px]" />
      <div className="text-secondary text-center">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Partner;
