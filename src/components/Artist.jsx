const Artist = ({ image, line1, name }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <img src={image} alt={name} />
      <div className="text-primary text-center">
        <p>{line1}</p>
        <p className="font-headings text-4xl">{name}</p>
      </div>
    </div>
  );
};

export default Artist;
