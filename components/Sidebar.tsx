import Link from "next/link";
import { IoCard, IoHome, IoLogOutOutline, IoPerson } from "react-icons/io5";
import MyIcon from "../public/risingdijital.svg";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="min-h-full w-full lg:w-20 bg-[#F7FAFC] text-gray-600 flex flex-col items-center pt-12 space-y-12  border-r-2 border-[#E6E8EB]">
      <span className="flex items-center justify-center w-12 h-12 cursor-pointer">
        <Image alt="Rising Dijital Logo" src={MyIcon} />
      </span>
      <Link href="/dashboard">
        {" "}
        <span className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg cursor-pointer">
          <IoHome className="text-2xl text-blue-800" />
        </span>
      </Link>
      <Link href="">
        <span>
          <IoCard className="text-2xl hover:text-blue-800" />
        </span>
      </Link>
      <Link href="">
        <span>
          <IoPerson className="text-2xl hover:text-blue-800" />
        </span>
      </Link>
      <Link href="">
        <span>
          <IoLogOutOutline className="text-2xl hover:text-blue-800" />
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
