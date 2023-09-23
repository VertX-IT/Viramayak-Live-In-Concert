import Heading from './Heading';

import { orchestra } from '../assets/images';

const Ochestra = () => {
  return (
    <section className="py-12 lg:p-12">
      <Heading main="Orchestra" secondary="BY FACULTY OF ENGINEERING" />
      <img src={orchestra} alt="orchestra" className="w-full" />
    </section>
  );
};

export default Ochestra;
