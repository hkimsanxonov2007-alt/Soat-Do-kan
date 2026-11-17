function Footer() {
  return (
    <div className="w-full h-auto flex flex-col gap-20  relative">
      <img src="19.png" alt="" />
      <div className="flex flex-col gap-5 absolute right-60 py-5">
        <h1 className=" w-211.5 text-[36px] text-[#FFFFFF] font-bold text-center">
          Don't miss your chance to get free Giveaway Sing up to our newsletter
        </h1>
        <p className="w-181.5 text-center text-[14px] text-[#FFFFFF] font-normal">
          We will inform you about coming Giveaways, Offers, Online Store
          preparation progress and start of sales
        </p>
        <div className="flex w-164.24 justify-center items-center gap-5 ">
          <input
            className="w-79.75 h-13.75 bg-[#FFFFFF] rounded-lg"
            type="text"
          />
          <input
            className="w-79.75 h-13.75 bg-[#FFFFFF] rounded-lg"
            type="text"
          />
        </div>
        <button className="w-40 h-13.75 rounded-2xl m-auto text-[14px] text-[#FFFFFF] font-medium bg-[#000000]">
          Sign Up
        </button>
      </div>
      <img src="20.png" alt="" />
    </div>
  );
}
export default Footer;
