// import useScrollSnap from 'react-use-scroll-snap';
// import { useRef } from 'react';
import {
  Hero,
  Footer,
  VocalArtistsCircles,
  Sithpawura,
  PartnersSection,
  ContactUs,
  CommingSoon,
  Ridma,
  VocalArtistsIndividual,
  Orchestra,
} from './components';

function App() {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 20, delay: 10 });
  // ref={scrollRef}

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
      <Hero />
      <Ridma />
      <VocalArtistsCircles />
      {/* <VocalArtistsIndividual /> */}
      <Orchestra />
      <Sithpawura />
      <PartnersSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
