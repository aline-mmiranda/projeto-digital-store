import { Link } from "react-router";

const Section = ({ title, titleAlign = "left", children }) => {
  return (
    <>
      <div className="relative">
        <h1 className={`text-dark-gray-2 text-2xl ${titleAlign}`}>{title}</h1>
        <Link to="" className="text-primary text-[18px]">
          Ver todos →
        </Link>
      </div>
      {children}
    </>
  );
};

export default Section;
