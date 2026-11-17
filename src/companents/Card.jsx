function Card({ children, textH1, textH2 }) {
  return (
    <div className="w-83.5 h-120 flex flex-col justify-center items-center gap-2.5">
      <div>{children}</div>
      <h1 className="text-[#939393] text-[16px] font-normal">{textH1}</h1>
      <h2 className="text-[#000000] text-[26px] font-normal">{textH2}</h2>
    </div>
  );
}
export default Card;
