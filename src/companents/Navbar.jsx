function Navbar() {
  return (
    <div className="w-full h-21.5 flex justify-around items-center">
      <div>
        <h1 className="text-black text-4xl font-bold font-serif">
          VOLUMENZEIT
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5">
        <ul className="flex justify-center items-center gap-5">
          <li className="text-gray-600 hover:text-black text-[14px] font-semibold hover:border-b cursor-pointer">
            Watches
          </li>
          <li className="text-gray-600 hover:text-black text-[14px] font-semibold hover:border-b cursor-pointer">
            Accessories
          </li>
          <li className="text-gray-600 hover:text-black text-[14px] font-semibold hover:border-b cursor-pointer">
            Accessories
          </li>
          <li className="text-gray-600 hover:text-black text-[14px] font-semibold hover:border-b cursor-pointer">
            Brand
          </li>
          <li className="text-gray-600 hover:text-black text-[14px] font-semibold hover:border-b cursor-pointer">
            Watches
          </li>
        </ul>
        <button className="w-43.75 h-13.75 bg-[#735CFF] rounded-lg text-[14px] text-[#FFFFFF] font-normal cursor-pointer">
          Design you watch
        </button>
        <div>
          <img src="2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
