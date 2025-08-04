export default function Infrastructure() {
  return (
    <section className="relative mt-[250px]">
      {/* Phones floating above the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[45%] z-10 w-full">
        <img src="/assets/illustration-phones.svg" alt="Phones" />
      </div>

      <div className="relative flex flex-col items-center text-center bg-gradient-1 rounded-bl-[6.25rem] rounded-tr-[6.25rem] pt-[220px] pb-[100px] overflow-hidden">
        {/* Background circle */}
        <div className="absolute flex justify-center -top-60 z-0">
          <div className="w-[600px] h-[600px] bg-[url('/assets/bg-pattern-circles.svg')] bg-no-repeat bg-contain"></div>
        </div>

        <div className="relative z-20 px-6 text-white flex flex-col gap-[32px]">
          <h2 className="text-preset-2">State of the Art Infrastructure</h2>
          <p className="text-preset-5">
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
