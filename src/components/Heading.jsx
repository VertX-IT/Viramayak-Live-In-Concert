const Heading = ({ main, secondary }) => {
  return (
    <div className="text-center mb-24">
      <h1 className="font-headings text-primary text-5xl">{main}</h1>
      <h2 className="text-3xl">{secondary}</h2>
    </div>
  );
};

export default Heading;
