import { Link } from "react-router";

const SpecialOffer = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-23 bg-white pt-10 pb-12.5">
        <div className="">
          <img src="special-offer.png" alt="Oferta Especial" className="w-75" />
        </div>
        <div>
          <h4 className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-warning mb-2.5">Oferta especial</h4>
          <h2 className="font-bold text-[28px] leading-9 tracking-[2px] text-dark-gray-2 mb-5">Air Jordan edição de colecionador</h2>
          <p className="font-medium text-[14px] leading-5.5 tracking-[0.25px] text-dark-gray-2 mb-7.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          <button className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-light-gray-3 bg-primary rounded-lg w-50 h-10 ">
            <Link to="">Ver Oferta</Link>
          </button>
        </div>
      </section>
    </>
  )
}

export default SpecialOffer;