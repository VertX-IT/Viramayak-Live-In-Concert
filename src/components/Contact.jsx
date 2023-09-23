const Contact = ({ photo, name, position, number }) => {
  return (
    <div className="flex flex-col items-center text-primary p-5">
      <img src={photo} alt="contact" className="max-w-[130px] mb-3" />
      <div className="text-secondary text-center">
        <p className="mb-[0.5px]">{name}</p>
        <p className="mb-[0.5px]">{position}</p>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Contact;
