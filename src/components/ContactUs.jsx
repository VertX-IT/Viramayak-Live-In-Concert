import Contact from './Contact';
import { contactUsList } from '../assets/constants';
import Heading from './Heading';

const ContactUs = () => {
  return (
    <section id="contactus" className="flex flex-col items-center p-12">
      <Heading main="Contact Us" secondary="FOR ANY OF YOUR INQUIRIES" />
      <div className="flex flex-row flex-wrap items-center justify-center">
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
      </div>
    </section>
  );
};

export default ContactUs;
