function Main2() {
  return (
    <div className="w-full h-300">
      <div className="w-full h-150 bg-[#735CFF] relative flex flex-col justify-center items-center gap-20 ">
        <h1 className="text-[42px] text-[#FFFFFF] font-normal">
          Design your Watch
        </h1>
        <img className="absolute -top-2" src="11.png" alt="" />
        <img className="absolute right-0 -bottom-20 z-1" src="12.png" alt="" />
        <img src="10.png" alt="" />
        <p className="absolute text-white text-[32px] font-normal left-86 top-[46%]">
          1
        </p>
        <p className="absolute text-white text-[32px] font-normal left-140 top-[46%]">
          2
        </p>
        <p className="absolute text-white text-[32px] font-normal left-194 top-[46%]">
          3
        </p>
        <p className="absolute text-white text-[32px] font-normal left-247 top-[46%]">
          4
        </p>
        <button className="w-52 h-13 bg-[#000000] rounded-lg text-white">
          Design Your Watch
        </button>
      </div>
      <div className="w-full h-150 bg-[#000000] relative flex justify-between items-center">
        <img className=" h-full" src="14.png" alt="" />
        <img className="absolute bottom-0" src="13.png" alt="" />
        <div className="px-70">
          <div className="w-101.5 text-white flex flex-col gap-2.5">
            <h1 className="text-[42px] font-normal">Our Mission</h1>
            <p className="text-[14px] font-normal">
              We have invested 6 year of our lifes to invent a new technology of
              production a 3D dials with quality of wristwatch industry. All
              what we need to turn on our imagination on maximum.
            </p>
            <br />
            <p className="text-[14px] font-normal">
              We love Out-of-the-box designs and believe there are many people
              who thinks the same.
            </p>
            <button className="w-43.75 h-13.75 bg-[#735CFF] rounded-lg text-[14px] text-[#FFFFFF] font-normal cursor-pointer">
              Design you watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main2;
