import { Fade } from 'react-awesome-reveal';
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
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
      <Fade>
        <Hero />
        <Ridma />
        <VocalArtistsCircles />
        {/* <VocalArtistsIndividual /> */}
        <Orchestra />
        <Sithpawura />
        <PartnersSection />
        <ContactUs />
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
