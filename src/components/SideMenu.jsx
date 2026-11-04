const SideMenu = () => {
  return (
    <>
      <div className="w-77 h-81.25 rounded-sm p-7.5 bg-white flex flex-col gap-5 fixed top-16.5 left-0 z-99">
        <nav>
          <span className="font-bold text-[16px] leading-6 tracking-[0.75px] text-dark-gray-2">
            Páginas
          </span>
          <ul className="flex flex-col gap-2.5 mt-5">
            <li className="text-[16px] leading-7 tracking-[0.75px] text-dark-gray-2 cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="text-[16px] leading-7 tracking-[0.75px] text-dark-gray-2 cursor-pointer">
              <a href="">Produtos</a>
            </li>
            <li className="text-[16px] leading-7 tracking-[0.75px] text-dark-gray-2 cursor-pointer">
              <a href="">Categorias</a>
            </li>
            <li className="text-[16px] leading-7 tracking-[0.75px] text-dark-gray-2">
              <a href="">Meus Pedidos</a>
            </li>
          </ul>
        </nav>

        <hr className="w-62 border border-light-gray-2" />
        <div className="flex justify-center items-center gap-4.25">
          <button className="w-28.5 h-10 bg-primary rounded-lg font-bold text-[14px] leading-5.5 tracking-[0.75px] horizontal-align-center vertical-align-middle text-light-gray-3">
            Entrar
          </button>
          <a
            href=""
            className="text-[16px] leading-7 tracking-[0.75px] underline decoration-solid text-dark-gray-2"
          >
            Cadastre-se
          </a>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
