import Contact from './Contact';
import { contactList } from '../assets/constants';
import Heading from './Heading';

const ContactUs = () => {
  return (
    <section id="contactus" className="flex flex-col items-center p-12">
      <Heading main="Contact Us" secondary="FOR ANY OF YOUR INQUIRIES" />
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
