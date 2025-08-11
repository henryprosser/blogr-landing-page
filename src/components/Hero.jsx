import { useState } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menuTitle) => {
    setOpenSubMenu((prev) => (prev === menuTitle ? null : menuTitle));
  };

  const menuItems = [
    {
      title: "Product",
      subMenu: [
        "Overview",
        "Pricing",
        "Marketplace",
        "Features",
        "Integrations",
      ],
    },
    {
      title: "Company",
      subMenu: ["About", "Team", "Blog", "Careers"],
    },
    {
      title: "Connect",
      subMenu: ["Contact", "Newsletter", "LinkedIn"],
    },
  ];

  return (
    <section className="flex justify-center">
      <div className="relative flex justify-center bg-gradient-3 rounded-bl-[6.25rem] overflow-hidden w-full">
        <div className="absolute top-0 w-full h-full rounded-bl-[6.25rem] bg-[url('/assets/bg-pattern-intro-mobile.svg')] md:bg-[url('/assets/bg-pattern-intro-desktop.svg')] bg-no-repeat bg-[left_-21rem_top_-15.25rem] md:bg-[left_-47rem_top_-480rem] lg:bg-[left_-27rem_top_-480rem] z-0"></div>
        <div className="flex flex-col w-full justify-between px-[16px] md:px-[40px] lg:px-[164px] py-[56px] lg:py-[59px] gap-[96px] lg:gap-[120px] relative z-10">
          <nav className="flex items-center justify-between w-full px-[10.5px] md:px-0">
            <div className="flex items-center gap-[64px]">
              <img
                src="/assets/logo.svg"
                className="h-[32px] lg:h-[39.4px] w-auto"
                alt="Blogr logo"
              />
              {/* Desktop left side: nav */}
              <ul className="hidden lg:flex gap-[32px] items-center">
                {menuItems.map(({ title, subMenu }) => (
                  <li key={title} className="flex flex-col w-full">
                    <button
                      onClick={() => toggleSubMenu(title)}
                      aria-expanded={openSubMenu === title}
                      aria-controls={`${title}-submenu`}
                      className="flex justify-center items-center gap-[8px] text-preset-6 text-white"
                    >
                      {title}

                      <img
                        src="/assets/icon-arrow-light.svg"
                        alt=""
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          openSubMenu === title ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubMenu === title && (
                      <div className="absolute justify-center bg-white rounded-[5px] mt-[32px] pl-[24px] pr-[57px] py-[24px]">
                        <ul
                          id={`${title}-submenu`}
                          className="flex flex-col gap-[8px] items-left"
                        >
                          {subMenu.map((item) => (
                            <li
                              key={item}
                              className="text-preset-7 text-(--color-purple-950) hover:!font-bold"
                            >
                              <a href="#">{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preload images to avoid flicker on first toggle */}
            <div className="hidden">
              <img src="/assets/icon-hamburger.svg" alt="" />
              <img src="/assets/icon-close.svg" alt="" />
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img
                src={
                  isMenuOpen
                    ? "/assets/icon-close.svg"
                    : "/assets/icon-hamburger.svg"
                }
                className={`w-auto ${isMenuOpen ? "h-[24px]" : "h-[18px]"}`}
                alt={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </button>

            {/* Desktop right side: login/signup buttons */}
            <div className="hidden lg:flex gap-[32px] items-center">
              <button className="text-preset-6 text-white opacity-75">
                Login
              </button>
              <button className="bg-white rounded-full px-[39.5px] py-[15px] text-preset-6 text-(--color-red-500) hover:bg-red-400 hover:text-white transition-colors duration-200 ease-in-out">
                Sign Up
              </button>
            </div>
          </nav>

          <div className="flex flex-col gap-[40px] md:gap-[32px] lg:gap-[48px] pb-[98px]">
            <div className="flex flex-col text-center gap-(--spacing-300) md:gap-(--spacing-400) w-full">
              <h1 className="text-preset-2 md:text-preset-1 text-white">
                A modern <br className="lg:hidden" />
                publishing platform
              </h1>
              <h2 className="text-preset-4 text-white">
                Grow your audience and build your online brand
              </h2>
            </div>
            <div className="flex justify-center gap-[16px]">
              <button className="w-[137px] h-[48px] rounded-full bg-white text-preset-6 text-(--color-red-500) hover:bg-red-400 hover:text-white transition-colors duration-200 ease-in-out">
                Start for Free
              </button>
              <button className="w-[137px] h-[48px] rounded-full bg-transparent text-preset-6 text-white border border-white hover:bg-white hover:border-none hover:text-(--color-red-400) transition-colors duration-200 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet hamburger menu */}
      <nav
        className={
          isMenuOpen
            ? "absolute flex flex-col justify-center gap-[24px] bg-white shadow-[0_20px_40px_0_rgba(0,0,0,0.05)] w-[calc(100vw-52px)] md:w-[calc(100vw-80px)] max-w-[1200px] z-100 top-[125px] rounded-[5px] px-[24px] pt-[32px] pb-[40px]"
            : "hidden"
        }
      >
        <div className="flex flex-col gap-[32px]">
          <ul className="flex flex-col gap-[32px] items-center">
            {menuItems.map(({ title, subMenu }) => (
              <li key={title} className="flex flex-col w-full">
                <button
                  onClick={() => toggleSubMenu(title)}
                  aria-expanded={openSubMenu === title}
                  aria-controls={`${title}-submenu`}
                  className="flex justify-center items-center gap-[16px] text-preset-6 text-(--color-blue-900)"
                >
                  {title}
                  <img
                    src="/assets/icon-arrow-dark.svg"
                    alt=""
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${
                      openSubMenu === title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSubMenu === title && (
                  <div className="flex justify-center bg-(--color-gray-100) rounded-[5px] mt-[32px] py-[19px]">
                    <ul
                      id={`${title}-submenu`}
                      className="flex flex-col gap-[8px] items-center"
                    >
                      {subMenu.map((item) => (
                        <li
                          key={item}
                          className="text-preset-7 text-(--color-blue-900) opacity-75"
                        >
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-(--color-gray-100) h-[1px] w-full"></div>

        <div className="flex flex-col items-center gap-[24px] md:flex-row md:justify-center md:gap-[56px]">
          <button className="text-preset-6 text-(--color-blue-900)">
            Login
          </button>
          <button className="bg-gradient-2 rounded-full px-[39.5px] py-[15px] text-preset-6 text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </section>
  );
}
