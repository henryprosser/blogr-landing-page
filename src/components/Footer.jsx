export default function Footer() {
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
    <footer className="grid grid-cols-1 md:grid-cols-[1fr_3fr] justify-items-center md:justify-items-start bg-gray-950 rounded-tr-[6.25rem] px-[24px] md:pl-[40px] md:pr-[80px] lg:px-[163px] py-[72px] gap-[72px]">
      <img
        src="/assets/logo.svg"
        className="h-[40px] w-auto"
        alt="Blogr logo"
      />
      <div
        className="flex flex-col md:flex-row"
        style={{ gap: "clamp(3rem, -0.8952rem + 16.62vw, 14.0625rem)" }}
      >
        {menuItems.map(({ title, subMenu }) => (
          <div
            key={title}
            className="flex flex-col gap-[32px] text-center md:text-left"
          >
            <h4 className="text-preset-6 text-white">{title}</h4>
            <ul className="text-preset-7 text-white opacity-75">
              {subMenu.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
