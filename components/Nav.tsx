const Nav = () => {
  return (
    <div className="w-full border-b border-[#E6E8EB]">
      <div className="flex flex-col w-3/4 mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold">
            Proxies & Scraping Infrastructure
          </h1>
        </div>

        <nav className="rounded">
          <ul className="flex space-x-4">
            <li className="">My proxies</li>
            <li className="border-b-4 border-[#0C6DFC] text-[#0C6DFC]">
              Dashboard
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
