const FooterInfo = ({ title, informations }) => {
  return (
    <>
      <div>
        <h3 className="font-semibold text-lg leading-[100%] tracking-[0%] mb-2.5 xl:mb-7">{title}</h3>
        <ul className="text-[16px] leading-7.75 tracking-[0%] xl:leading-9.5">
          {informations.map((info, index) => (
            <li key={index}>
              <a href={info.link}>{info.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterInfo;
