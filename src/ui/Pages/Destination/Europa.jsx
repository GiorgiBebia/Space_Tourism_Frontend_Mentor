import { Link } from "react-router-dom";
import { Header } from "../../Header";
import { useEffect } from "react";

function Europa() {
  useEffect(function () {
    document.title = `Europa | Space Tourism | Frontend Mentor`;
  }, []);

  return (
    <div className="max-w-[1440px] tablet:max-w-[768px] mobile:w-[375px] w-full min-h-screen bg-[url('/img/destination/background-destination-desktop.jpg')] tablet:bg-[url('/img/destination/background-destination-tablet.jpg')] mobile:bg-[url('/img/destination/background-destination-mobile.jpg')] bg-no-repeat bg-cover bg-center tablet:overflow-hidden">
      <Header page="destination" />
      <EuropaMain />
    </div>
  );
}

export default Europa;

function EuropaMain() {
  return (
    <div className="w-[1110px] tablet:w-[768px] mobile:w-[375px] h-[792px] tablet:h-[928px] mobile:h-[792px] mt-[48px] tablet:mt-[40px] mx-auto">
      <div className="flex gap-[24px] tablet:ml-[40px]">
        <span className="font-barlow font-bold text-[28px] mobile:text-[16px] tracking-[4.72px] text-gray-600">
          01
        </span>
        <span className="font-barlow text-[28px] mobile:text-[16px] text-white">
          PICK YOUR DESTINATION
        </span>
      </div>
      <div className="w-[1110px] tablet:w-[768px] mobile:w-[327px] flex justify-between mt-[157px] tablet:mt-[66px] mobile:mt-[50.5px] tablet:flex-col tablet:items-center mobile:mx-auto">
        <img
          className="w-[480px] tablet:w-[300px] mobile:w-[150px] h-[480px] tablet:h-[300px] mobile:h-[150px]"
          src="img/destination/image-europa.png"
          alt=""
        />
        <div className="w-[445px] mobile:w-[327px] h-[468px] mobile:h-[466px] tablet:mt-[74px] mobile:mt-[58.5px] tablet:flex tablet:flex-col tablet:items-center">
          <div className="w-[260px] h-[32px] flex justify-between">
            <Link
              className="font-barlow text-gray-300 hover:border-b-2 hover:border-b-[#979797]"
              to="/destination/moon"
            >
              MOON
            </Link>
            <Link
              className="font-barlow text-gray-300 hover:border-b-2 hover:border-b-[#979797]"
              to="/destination/mars"
            >
              MARS
            </Link>
            <Link
              className="font-barlow text-white border-b-2 border-b-white"
              to="/destination/europa"
            >
              EUROPA
            </Link>
            <Link
              className="font-barlow text-gray-300 hover:border-b-2 hover:border-b-[#979797]"
              to="/destination/titan"
            >
              TITAN
            </Link>
          </div>
          <h1 className="font-barlow text-[96px] mobile:text-[56px] text-white mt-[40px] tablet:mt-0">
            EUROPA
          </h1>
          <p className="font-barlow text-[18px] tablet:text-[16px] mobile:text-[15px] text-gray-300 tablet:text-center tablet:w-[514px] mobile:w-[327px]">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="w-[445px] tablet:w-[514px] mobile:w-[327px] h-[1px] bg-[#979797] my-[40px] tablet:my-[24px]"></div>
          <div className="flex justify-between tablet:text-center mobile:flex-col mobile:gap-[24px]">
            <div className="w-[210px] h-[61px]">
              <span className="font-barlow text-[14px] text-gray-300">
                AVG. DISTANCE
              </span>
              <h3 className="font-barlow text-[28px] text-white mt-[12px] mobile:mt-0">
                628 MIL. KM
              </h3>
            </div>
            <div className="w-[210px] h-[61px]">
              <span className="font-barlow text-[14px] text-gray-300">
                EST. TRAVEL TIME
              </span>
              <h3 className="font-barlow text-[28px] text-white mt-[12px] mobile:mt-0">
                3 YEARS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
