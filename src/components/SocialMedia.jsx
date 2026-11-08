import { Link } from "react-router";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

const SocialMedia = () => {
  return (
    <>
      <div className="flex items-center gap-8.75 mb-10">
        <Link to="/facebook">
          <img src={facebook} alt="Facebook" />
        </Link>
        <Link to="/instagram">
          <img src={instagram} alt="Instagram" />
        </Link>
        <Link to="/twitter">
          <img src={twitter} alt="Twitter" />
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;
