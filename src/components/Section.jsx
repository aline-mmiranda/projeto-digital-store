import { Link } from "react-router";

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <>
      <div className="relative">
        <h1 className={`font-bold text-[16px] leading-6 tracking-[0.75px] text-dark-gray-2 xl:text-2xl xl:leading-9.5 ${titleAlign}`}>{title}</h1>
        <Link to={link.href} className="font-medium text-[14px] leading-5.5 tracking-[0.25px] text-primary xl:font-normal xl:text-[18px] xl:leading-8.5 xl:tracking-[0.75px]">
          {link.text}
        </Link>
      </div>
      {children}
    </>
  );
};

export default Section;
