import { Link } from "react-router-dom";
import { Header } from "../../Header";
import { useEffect } from "react";

function Pilot() {
  useEffect(function () {
    document.title = `Pilot | Space Tourism | Frontend Mentor`;
  }, []);

  return (
    <div className="max-w-[1440px] tablet:max-w-[768px] mobile:w-[375px] w-full min-h-screen bg-[url('/img/crew/background-crew-desktop.jpg')] tablet:bg-[url('/img/crew/background-crew-tablet.jpg')] mobile:bg-[url('/img/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover bg-center tablet:overflow-hidden">
      <Header page="crew" />
      <PilotMain />
    </div>
  );
}

export default Pilot;

function PilotMain() {
  return (
    <div className="w-[1110px] tablet:w-[768px] mobile:w-[375px] h-[792px] tablet:h-[928px] mobile:h-[792px] mt-[48px] tablet:mt-[40px] mx-auto">
      <div className="flex gap-[24px] tablet:ml-[40px] mobile:w-[190px] mobile:h-[19px] mobile:mx-auto">
        <span className="font-barlow font-bold text-[28px] tablet:text-[20px] mobile:text-[16px] tracking-[4.72px] text-gray-600">
          02
        </span>
        <span className="font-barlow text-[28px] tablet:text-[20px] mobile:text-[16px] text-white">
          MEET YOUR CREW
        </span>
      </div>
      <div className="w-[1110px] tablet:w-[768px] mobile:w-[327px] flex justify-between mt-[53px] tablet:mt-[24px] mobile:mt-0 tablet:flex-col tablet:items-center mobile:mx-auto">
        <div className="mt-[168px] tablet:mt-[32px] mobile:mt-[64px] tablet:text-center tablet:w-[512px] mobile:w-[327px] tablet:h-[275px] mobile:h-[279px]">
          <div className="w-[539px] tablet:w-[512px] mobile:w-[327px] h-[237px] tablet:h-[245px] mobile:h-[255px]">
            <span className="font-barlow text-[32px] tablet:text-[24px] mobile:text-[18px] text-gray-400">
              PILOT
            </span>
            <h1 className="font-barlow text-[56px] tablet:text-[40px] mobile:text-[24px] text-white mt-[16px] mobile:mt-0 mb-[24px]">
              VICTOR GLOVER
            </h1>
            <p className="font-barlow text-[18px] tablet:text-[16px] mobile:text-[16px] leading-[180%] text-gray-400">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
          <div className="w-[180px] tablet:w-[88px] h-[15px] tablet:h-[10px] mt-[237px] tablet:mt-[24px] flex justify-between tablet:mx-auto">
            <Link to="/crew/commander">
              <div className="w-[15px] tablet:w-[10px] h-[15px] tablet:h-[10px] bg-gray-700 rounded-full hover:bg-[#979797]"></div>
            </Link>
            <Link to="/crew/missionspecialist">
              <div className="w-[15px] tablet:w-[10px] h-[15px] tablet:h-[10px] bg-gray-700 rounded-full hover:bg-[#979797]"></div>
            </Link>
            <Link to="/crew/pilot">
              <div className="w-[15px] tablet:w-[10px] h-[15px] tablet:h-[10px] bg-white rounded-full "></div>
            </Link>
            <Link to="/crew/fightengineer">
              <div className="w-[15px] tablet:w-[10px] h-[15px] tablet:h-[10px] bg-gray-700 rounded-full hover:bg-[#979797]"></div>
            </Link>
          </div>
        </div>

        <img
          className="w-[539px] tablet:w-[435px] mobile:w-[300px] h-[676px] tablet:h-[517px] mobile:h-[365px] tablet:mt-[50px]"
          src="img/crew/image-victor-glover.png"
          alt=""
        />
      </div>
    </div>
  );
}
