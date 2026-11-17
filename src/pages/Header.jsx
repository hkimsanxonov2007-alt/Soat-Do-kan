function Header() {
  return (
    <div className="w-full h-[110vh] relative">
      <div className="w-200 flex flex-col gap-1.5 px-25 py-25">
        <h1 className="w-120 text-[80px] text-[#000000] font-normal font-serif">
          Find your dream watch
        </h1>
        <h2 className="w-130 text-[14px] text-[#939393] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi
          elementum commodo ipsum. Aenean aenean adipiscing lect
        </h2>
        <button className="w-43.75 h-13.75 bg-[#735CFF] rounded-lg text-[14px] text-[#FFFFFF] font-normal cursor-pointer">
          Design you watch
        </button>
      </div>
      <img className="absolute right-0 bottom-0" src="1.png" alt="" />
      <img className="absolute left-5 top-30" src="3.png" alt="" />
      <div className="w-56.75 h-43.25 rounded-xl shadow-2xl absolute top-0 right-30 bg-[#FFFFFF] flex flex-col justify-center items-center gap-2.5">
        <button className="w-40.5 h-12 bg-[#000000] rounded-lg text-white text-[12px] font-normal">
          Login
        </button>
        <button className="w-40.5 h-12 border rounded-lg  text-black text-[12px] font-normal">
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default Header;
