import { Hero, Footer, VocalArtistsCircles, Sithpawura, Partners, ContactUs, CommingSoon, Ridma } from './components';

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
      {/* <div>
        <CommingSoon />
      </div> */}
      <Hero />
      <Ridma />
      <VocalArtistsCircles />
      {/* <Sithpawura />
      <Partners />
      <ContactUs />
      <Footer /> */}
    </div>
  );
}

export default App;
