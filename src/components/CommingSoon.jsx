import { viramayak_circular_logo } from "../assets/images";

const CommingSoon = () => {
  return (
    <div className=" flex flex-col justify-center overflow-hidden">
        <section className="flex flex-col items-center text-center">
        <img
            src={viramayak_circular_logo}
            alt="viramayak_circular_logo"
            className="max-w-[280px] md:max-w-[350px] xl:max-w-[380px] 2xl:max-w-[420px]  mb-8"
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