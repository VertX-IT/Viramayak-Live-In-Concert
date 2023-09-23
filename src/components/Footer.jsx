import { uniLogo } from '../assets/images';

const Footer = () => {
  return (
    <footer className="bg-white max-h-[250px]">
      <div className="flex flex-row mx-auto justify-center items-center py-6">
        <img src={uniLogo} alt="Uni Logo" className="max-w-[100px] mr-2" />
        <div className="text-black ml-2 font-semibold">
          <p>Art and Literary Sub Committe</p>
          <p>Faculty of Engineering</p>
          <p>University Of Sri Jayewardenepura</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
