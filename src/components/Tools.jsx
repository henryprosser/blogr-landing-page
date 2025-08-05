export default function Tools() {
  return (
    <section className="flex flex-col gap-[56px] mt-[70px] mb-[108px] p">
      <picture className="flex flex-col justify-center items-center">
        <img
          src="/assets/illustration-laptop-mobile.svg"
          className="w-full"
          alt="Laptop"
        />
      </picture>

      <div className="flex flex-col gap-[56px] text-center">
        <div className="flex flex-col gap-[16px] mx-[24px] px-[2px]">
          <h3 className="text-preset-3 text-blue-900">Free, open, simple</h3>
          <p className="text-preset-5 text-gray-600">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] mx-[24px] px-[2px]">
          <h3 className="text-preset-3 text-blue-900">Powerful tooling</h3>
          <p className="text-preset-5 text-gray-600">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
}
