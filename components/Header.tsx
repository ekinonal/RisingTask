import { IoIosClose } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 bg-[#78B6FF] w-3/4 mx-auto mt-6 min-h-12 rounded-md ">
      <span className="text-sm">
        Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card.
        Start Free Trial
      </span>{" "}
      <IoIosClose className="text-lg shrink-0" />
    </div>
  );
};

export default Header;
