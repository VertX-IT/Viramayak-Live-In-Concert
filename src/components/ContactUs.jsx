import Contact from './Contact';
import { contactUsList } from '../assets/constants';
import Heading from './Heading';

const ContactUs = () => {
  return (
    <section id="contactus" className="flex flex-col items-center p-12">
      <Heading main="CONTACT US" secondary="FOR ANY OF YOUR INQUIRIES" />
      {contactUsList.map((contact, index) => {
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
