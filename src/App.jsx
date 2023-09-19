import {
  Navbar,
  Hero,
  Footer,
  Artists,
  Sithpawura,
  Partners,
  ContactUs,
  CommingSoon
} from "./components";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 background-animate text-white">
      <div>
        <CommingSoon />
      </div>
      {/* <div className="bg-gradient-to-l from-slate-700 to-slate-900 px-4 py-2">
        <Navbar />
      </div>
      <div className="mx-8">
        <div>
          <Hero />
        </div>

        <div>
          <Artists />
        </div>

        <div>
          <Sithpawura />
        </div>

        <div>
          <Partners />
        </div>

        <div>
          <ContactUs />
        </div>
        <div>
          <Footer />
        </div>
      </div> */}
    </div>
  );
}

export default App;
