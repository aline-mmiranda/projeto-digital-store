import { Link } from "react-router";

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <>
      <section className="px-5">
        <div className="relative mb-5">
          <h2
            className="font-bold text-[16px] leading-6 tracking-[0.75px] text-dark-gray-2 lg:text-[24px] lg:leading-9.5"
            style={{ textAlign: titleAlign }}
          >
            {title}
          </h2>
          {link && <Link
            to={link.href}
            className="absolute top-0 right-0 font-medium text-[14px] leading-5.5 tracking-[0.25px] text-primary lg:text-[18px] lg:leading-8.5 lg:tracking-[0.75px]"
          >
            {link.text}
          </Link>}
        </div>
        {children}
      </section>
    </>
  );
};

export default Section;
