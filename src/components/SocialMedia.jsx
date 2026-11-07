import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

const SocialMedia = () => {
  return (
    <>
      <div className="flex items-center gap-8.75 mb-10">
        <a href="">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;