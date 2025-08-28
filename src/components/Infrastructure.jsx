export default function Infrastructure() {
  return (
    <section className="relative flex flex-col mt-[100px] md:mt-[81px]">
      {/* Phones floating above the section */}
      <div className="relative w-full h-[10rem] lg:h-0">
        <img
          src="/assets/illustration-phones.svg"
          alt="Phones"
          className="absolute max-h-[380px] lg:max-h-[499px] top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-[12%] lg:-translate-x-0 lg:-translate-y-0 lg:top-[50%]"
        />
      </div>

      <div className="relative flex flex-col lg:flex-row-reverse items-center text-center lg:text-left bg-gradient-1 rounded-bl-[6.25rem] rounded-tr-[6.25rem] pt-[220px] pb-[100px] md:pb-[55px] lg:py-[110px] lg:pr-[165px] overflow-hidden z-[-1]">
        {/* Background circle */}
        <div className="absolute flex justify-center -top-60 z-0 lg:scale-[1.65] lg:left-[-1%]">
          <div className="w-[600px] h-[600px] bg-[url('/assets/bg-pattern-circles.svg')] bg-no-repeat bg-contain"></div>
        </div>

        <div className="relative z-20 px-6 text-white flex flex-col gap-[32px]">
          <h2 className="text-preset-2">State of the Art Infrastructure</h2>
          <p className="text-preset-5 max-w-[540px]">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
}
