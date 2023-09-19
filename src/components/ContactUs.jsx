import Contact from "./Contact";
import { contactList } from "../assets/constants";

const ContactUs = () => {
  return (
    <section id="contactus" className="flex flex-col items-center">
      <h3>Contact US</h3>
      {contactList.map((contact, index) => {
        return (
          <Contact
            key={index}
            photo={contact.image}
            name={contact.name}
            position={contact.position}
            number={contact.number}
          />
        );
      })}
    </section>
  );
};

export default ContactUs;
