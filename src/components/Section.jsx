import { Link } from "react-router";

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <>
      <div className="relative">
        <h1 className={`text-dark-gray-2 text-2xl ${titleAlign}`}>{title}</h1>
        <Link to={link.href} className="text-primary text-[18px]">
          {link.text}
        </Link>
      </div>
      {children}
    </>
  );
};

export default Section;
