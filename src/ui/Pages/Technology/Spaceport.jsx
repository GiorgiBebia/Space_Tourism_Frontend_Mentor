import { Link } from "react-router-dom";
import { Header } from "../../Header";

function Spaceport() {
  return (
    <div className="max-w-[1440px] tablet:max-w-[768px] mobile:w-[375px] w-full min-h-screen bg-[url('/img/technology/background-technology-desktop.jpg')] tablet:bg-[url('/img/technology/background-technology-tablet.jpg')] mobile:bg-[url('/img/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden">
      <Header page="technology" />
      <SpaceportMain />
    </div>
  );
}

export default Spaceport;

function SpaceportMain() {
  return (
    <div className="w-[1110px] tablet:w-[768px] mobile:w-[375px] h-[792px] tablet:h-[928px] mobile:h-[792px] mt-[48px] tablet:mt-[40px] mx-auto">
      <div className="flex gap-[24px] tablet:ml-[40px] mobile:w-[190px] mobile:h-[19px] mobile:mx-auto">
        <span className="font-barlow font-bold text-[28px] tablet:text-[20px] mobile:text-[16px] tracking-[4.72px] text-gray-600">
          03
        </span>
        <span className="font-barlow text-[28px] tablet:text-[20px] mobile:text-[16px] text-white">
          SPACE LAUNCH 101
        </span>
      </div>
      <img
        className="hidden tablet:block w-[768px] h-[357px] mt-[88px] mobile:hidden"
        src="img/technology/image-spaceport-landscape.jpg"
        alt=""
      />
      <img
        className="hidden mobile:block w-[375px] h-[258px] mt-[88px]"
        src="img/technology/image-spaceport-portrait.jpg"
        alt=""
      />
      <div className="w-[1275px] tablet:w-[512px] mobile:w-[327px] h-[734px] tablet:h-[347px] mobile:h-[323px] flex justify-between mt-[24px] gap-[32px] tablet:flex-col tablet:mx-auto">
        <div className="w-[635px] tablet:w-[512px] mobile:w-[327px] h-[304px] tablet:h-[347px] mobile:h-[323px] mt-[215px] tablet:mt-[32px] flex gap-[64px] tablet:gap-[40px] tablet:flex-col tablet:items-center">
          <div className="flex flex-col gap-[32px] tablet:gap-[16px] tablet:flex-row tablet:justify-center">
            <Link to="/technology/launchvehicle">
              <div className="w-[80px] tablet:w-[56px] mobile:w-[40px] h-[80px] tablet:h-[56px] mobile:h-[40px] flex justify-center items-center rounded-full border border-[#979797] hover:border-white">
                <h3 className="font-barlow text-[32px] tablet:text-[24px] mobile:text-[18px] text-white">
                  1
                </h3>
              </div>
            </Link>
            <Link to="/technology/spaceport">
              <div className="w-[80px] tablet:w-[56px] mobile:w-[40px] h-[80px] tablet:h-[56px] mobile:h-[40px] flex justify-center items-center rounded-full bg-white">
                <h3 className="font-barlow text-[32px] tablet:text-[24px] mobile:text-[18px]">
                  2
                </h3>
              </div>
            </Link>
            <Link to="/technology/spacecapsule">
              <div className="w-[80px] tablet:w-[56px] mobile:w-[40px] h-[80px] tablet:h-[56px] mobile:h-[40px] flex justify-center items-center rounded-full border border-[#979797] hover:border-white">
                <h3 className="font-barlow text-[32px] tablet:text-[24px] mobile:text-[18px] text-white">
                  3
                </h3>
              </div>
            </Link>
          </div>
          <div className="w-[491px] mobile:w-[327px] h-[301px] mobile:h-[243px] text-center">
            <span className="font-barlow text-[32px] tablet:text-[24px] mobile:text-[18px] text-gray-600">
              THE TERMINOLOGY...
            </span>
            <h1 className="font-barlow text-[56px] tablet:text-[40px] mobile:text-[24px] text-white">
              SPACEPORT
            </h1>
            <p className="font-barlow text-[18px] tablet:text-[16px] mobile:text-[15px] leading-[180%] text-gray-400 mt-[15px]">
              A spaceport or cosmodrome is a site for launching (or receiving)
              spacecraft, by analogy to the seaport for ships or airport for
              aircraft. Based in the famous Cape Canaveral, our spaceport is
              ideally situated to take advantage of the Earth’s rotation for
              launch.
            </p>
          </div>
        </div>
        <img
          className="w-[608px] h-[600px] mt-[67px] tablet:hidden"
          src="img/technology/image-spaceport-portrait.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
