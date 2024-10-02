import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="flex justify-between items-center pt-[40px] tablet:pt-0 mobile:pt-[33.5px]">
      <Link to="/">
        <img
          className="ml-[64px] tablet:ml-[40px] tablet:mr-[40px] mobile:w-[40px]"
          src="img/logo.svg"
          alt="Logo"
        />
      </Link>
      <div className="w-[560px] h-[1px] bg-[#979797] relative left-[45px] z-10 tablet:hidden"></div>
      <div className="w-[736px] h-[96px] bg-white/10 flex justify-evenly items-center mobile:hidden">
        <Link
          className={`flex gap-[12px] h-[96px] items-center hover:border-b-2 hover:border-b-[#979797] ${
            page === "home" ? "border-b-2 border-b-white" : ""
          }`}
          to="/"
        >
          <span className="font-barlow text-[16px] text-white">00</span>
          <span className="font-barlow text-[16px] text-white">HOME</span>
        </Link>
        <Link
          className={`flex gap-[12px] h-[96px] items-center hover:border-b-2 hover:border-b-[#979797] ${
            page === "destination" ? "border-b-2 border-b-white" : ""
          }`}
          to="/destination/moon"
        >
          <span className="font-barlow text-[16px] text-white">01</span>
          <span className="font-barlow text-[16px] text-white">
            DESTINATION
          </span>
        </Link>
        <Link
          className={`flex gap-[12px] h-[96px] items-center hover:border-b-2 hover:border-b-[#979797] ${
            page === "crew" ? "border-b-2 border-b-white" : ""
          }`}
          to="/crew/commander"
        >
          <span className="font-barlow text-[16px] text-white">02</span>
          <span className="font-barlow text-[16px] text-white">CREW</span>
        </Link>
        <Link
          className={`flex gap-[12px] h-[96px] items-center hover:border-b-2 hover:border-b-[#979797] ${
            page === "technology" ? "border-b-2 border-b-white" : ""
          }`}
          to="/technology/launchvehicle"
        >
          <span className="font-barlow text-[16px] text-white ">03</span>
          <span className="font-barlow text-[16px] text-white">TECHNOLOGY</span>
        </Link>
      </div>
      <GiHamburgerMenu
        className="hidden mobile:block w-[30px] h-[30px] text-white mr-[24px]"
        onClick={handleMenuOpen}
      />
      {menuOpen && (
        <div className="mobile:block w-[254px] h-full absolute bg-[rgba(11,13,23,0.85)] backdrop-blur-[4px] backdrop-brightness-[110%] top-0 right-0 z-50">
          <IoMdClose
            className="text-white mt-[32px] ml-[206px] w-[30px] h-[30px]"
            onClick={handleMenuOpen}
          />
          <div className="mt-[80px] w-[222px] h-[172px] ml-[32px] flex flex-col justify-between">
            <Link
              className={`${
                page === "home" ? "border-r-2 border-r-white" : ""
              }`}
              to="/"
            >
              <span className="font-barlow text-[16px] text-white">00</span>
              <span className="font-barlow text-[16px] text-white ml-[12px]">
                HOME
              </span>
            </Link>
            <Link
              className={`${
                page === "destination" ? "border-r-2 border-r-white" : ""
              }`}
              to="/destination/moon"
            >
              <span className="font-barlow text-[16px] text-white">01</span>
              <span className="font-barlow text-[16px] text-white ml-[12px]">
                DESTINATION
              </span>
            </Link>
            <Link
              className={`${
                page === "crew" ? "border-r-2 border-r-white" : ""
              }`}
              to="/crew/commander"
            >
              <span className="font-barlow text-[16px] text-white">02</span>
              <span className="font-barlow text-[16px] text-white ml-[12px]">
                CREW
              </span>
            </Link>
            <Link
              className={`${
                page === "technology" ? "border-r-2 border-r-white" : ""
              }`}
              to="/technology/launchvehicle"
            >
              <span className="font-barlow text-[16px] text-white ">03</span>
              <span className="font-barlow text-[16px] text-white ml-[12px]">
                TECHNOLOGY
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
