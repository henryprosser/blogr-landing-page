export default function Footer() {
  return (
    <footer className="grid grid-cols-1 justify-items-center bg-gray-950 rounded-tr-[6.25rem] px-[24px] py-[72px] gap-[72px]">
      <img
        src="/assets/logo.svg"
        className="h-[40px] w-auto"
        alt="Blogr logo"
      />
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[32px] text-center">
          <h4 className="text-preset-6 text-white">Product</h4>
          <ul className="text-preset-7 text-white opacity-75">
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[32px] text-center">
          <h4 className="text-preset-6 text-white">Company</h4>
          <ul className="text-preset-7 text-white opacity-75">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[32px] text-center">
          <h4 className="text-preset-6 text-white">Connect</h4>
          <ul className="text-preset-7 text-white opacity-75">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
