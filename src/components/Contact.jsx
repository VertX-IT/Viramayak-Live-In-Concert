const Contact = ({ photo, name, position, number }) => {
  return (
    <div className="flex flex-col items-center text-primary p-5">
      <img src={photo} alt="contact" className="w-[130px]" />
      <div className="text-secondary text-center">
        <p>{name}</p>
        <p>{position}</p>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Contact;
