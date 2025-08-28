export default function Future() {
  return (
    <section className="flex flex-col gap-[56px] lg:gap-0 justify-center text-center my-[100px]">
      <h2 className="text-preset-3 text-blue-900 md:text-preset-2">
        Designed for the future
      </h2>
      <picture className="flex flex-col justify-center items-center lg:hidden">
        <img
          src="/assets/illustration-editor-mobile.svg"
          className="w-full"
          alt="Editor"
        />
      </picture>

      <div className="lg:flex lg:items-center lg:overflow-hidden">
        <div className="flex flex-col gap-[56px] md:gap-[64px] mx-[24px] md:px-[74px] lg:text-left lg:pl-[141px]">
          <div className="flex flex-col gap-[16px] md:gap-[32px]">
            <h3 className="text-preset-3 text-blue-900">
              Introducing an extensible editor
            </h3>
            <p className="text-preset-5 text-gray-600">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="flex flex-col gap-[16px] md:gap-[32px]">
            <h3 className="text-preset-3 text-blue-900">
              Robust content management
            </h3>
            <p className="text-preset-5 text-gray-600">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </div>

        <picture className="hidden lg:flex lg:flex-shrink-0 lg:w-[890px] lg:relative lg:-mr-[240px]">
          <img
            src="/assets/illustration-editor-desktop.svg"
            className="w-full h-auto block"
            alt="Editor"
          />
        </picture>
      </div>
    </section>
  );
}
