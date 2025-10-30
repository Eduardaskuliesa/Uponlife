const HeroAcions = () => {
  return (
    <div className="flex flex-col items-center xs:flex-row gap-4 sm:gap-6 mt-6">
      <button className="rounded-full w-full flex-1 sm:text-lg bg-secondary hover:bg-secondary/80 cursor-pointer transition-colors font-normal flex justify-center items-center p-3">
        START YOUR BOOK TODAY
      </button>
      <button className="rounded-full sm:text-lg w-[80%] xs:w-auto   bg-amber-100/20 hover:bg-amber-100/10 cursor-pointer transition-colors font-normal text-white flex justify-center items-center py-3 px-6">
        LEARN MORE
      </button>
    </div>
  );
};

export default HeroAcions;
