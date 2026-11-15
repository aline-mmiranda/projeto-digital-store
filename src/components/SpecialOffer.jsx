import { Link } from "react-router";

const SpecialOffer = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-23 bg-white pt-10 pb-12.5 lg:flex-row lg:gap-16.75 lg:px-13 xl:pt-21.75 xl:pb-26.5">
        <div>
          <img src="special-offer.png" alt="Oferta Especial" className="w-75 lg:w-143.25" />
        </div>
        <div className="px-5 xl:w-147.25">
          <h4 className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-warning mb-2.5 lg:text-primary xl:mb-4.25">Oferta especial</h4>
          <h2 className="font-bold text-[28px] leading-9 tracking-[2px] text-dark-gray-2 mb-5 xl:text-[48px] xl:leading-12.5 xl:tracking-[1px]">Air Jordan edição de colecionador</h2>
          <p className="font-medium text-[14px] leading-5.5 tracking-[0.25px] text-dark-gray-2 mb-7.5 xl:font-normal xl:text-[16px] xl:leading-7 xl:tracking-[0.75px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          <button className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-light-gray-3 bg-primary rounded-lg w-50 h-10 ">
            <Link to="">Ver Oferta</Link>
          </button>
        </div>
      </section>
    </>
  )
}

export default SpecialOffer;