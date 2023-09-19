import { viramayak_circular_logo } from "../assets/images";

const CommingSoon = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
        <section className="flex flex-col items-center text-center">
        <img
            src={viramayak_circular_logo}
            alt="viramayak_circular_logo"
            className="max-w-[400px] mb-8"
        />
        <h1 className="font-headings text-4xl text-primary">
            Viramayak Live In Concert <br />
            23 September 2023 <br />
            Maharagama Youth centre
        </h1>
        </section>
    </div>
  );
};

export default CommingSoon;