import Card from "../companents/Card";

function Main3() {
  return (
    <div className="w-full h-[150vh]] flex flex-col justify-start items-center py-10 gap-10">
      <div className="w-[80%] h-25">
        <h1 className=" w-170 text-[42px] text-[#000000] font-normal">
          Watches
        </h1>
        <p className=" w-170 text-[#939393] text-[14px] font-normal">
          Volumenzeit gives you a total of 48 style combinations with 4 dial
          types, 4 dial colors, 3 case colors, multiple stylish strap
          combinations, and customized engraving options.
        </p>
      </div>
      <div className="w-full h-130 flex justify-center gap-5 items-center">
        <Card textH1={"Volumenzeit S 2"} textH2={"$17,588"}>
          <img src="17.png" alt="" />
        </Card>
        <Card textH1={"Volumenzeit S 2"} textH2={"$17,588"}>
          <img src="15.png" alt="" />
        </Card>
        <Card textH1={"Volumenzeit S 2"} textH2={"$17,588"}>
          <img src="16.png" alt="" />
        </Card>
        <Card textH1={"Volumenzeit S 2"} textH2={"$17,588"}>
          <img src="17.png" alt="" />
        </Card>
      </div>
      <div className="w-[80%] h-auto flex justify-between items-center">
        <div className="w-20 flex justify-between items-center">
          <i class="fa-solid fa-arrow-left-long"></i>
          <i class="fa-solid fa-arrow-right-long"></i>
        </div>
        <button className="w-43.75 h-13.75 bg-[#735CFF] rounded-lg text-[14px] text-[#FFFFFF] font-normal cursor-pointer">
          Design you watch
        </button>
      </div>
    </div>
  );
}
export default Main3;
