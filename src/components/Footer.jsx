import { socialMedias } from "../assets/constants";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="" alt="Uni Logo" />
        <div>
          <p>Art and Literary Sub Committe</p>
          <p>Faculty of Engineering</p>
          <p>University Of Sri Jayewardenepura</p>
        </div>
      </div>

      <div>
        {socialMedias.map((socialMedia, index) => {
          return (
            <a href={socialMedia.url} key={index}>
              <img src={socialMedia.image} alt={socialMedia.name}/>
            </a>
          );          
        })}
      </div>
    </footer>
  );
};

export default Footer;
