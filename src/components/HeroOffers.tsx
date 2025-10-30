const HeroOffers = () => {
  return (
    <div className="flex flex-col xs:flex-row justify-center items-center gap-4 sm:gap-6 mt-12">
      <div>
        <span className="text-white text-2xl font-bold">$69 </span>
        <span className="text-secondary-dark text-sm sm:text-base line-through">
          $130{" "}
        </span>
        <span className="text-white text-sm sm:text-base">
          / one time payment
        </span>
      </div>
      <div className="hidden xs:inline-block h-7 w-0.5 bg-gray-100/60"></div>
      <div className="inline-block xs:hidden h-0.5 w-12 bg-gray-100/60"></div>
      <div>
        <span className="text-2xl  font-bold text-white">47% off </span>
        <span className="text-white text-sm sm:text-base">
          for first-time writers
        </span>
      </div>
    </div>
  );
};

export default HeroOffers;
