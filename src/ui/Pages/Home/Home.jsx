import { Header } from "../../Header";

function Home() {
  return (
    <div className="max-w-[1440px] tablet:max-w-[768px] w-full h-[1024px] bg-[url('/img/home/background-home-desktop.jpg')] tablet:bg-[url('/img/home/background-home-tablet.jpg')] mobile:bg-[url('/img/home/background-home-mobile.jpg')] bg-no-repeat bg-cover bg-center">
      <Header page="home" />
      <HomeMain />
    </div>
  );
}

export default Home;

function HomeMain() {
  return (
    <div className="w-[1110px] tablet:w-[688px] mobile:w-[375px] h-[343px] tablet:h-[750px] mt-[417px] tablet:mt-[128px] mobile:mt-[48px] mx-auto flex justify-between mobile:justify-normal items-center tablet:flex-col">
      <div className="w-[540px] tablet:w-[600px] mobile:w-[327px] h-[343px] tablet:text-center">
        <span className="font-barlow text-[28px] mobile:text-[16px] text-gray-400">
          SO, YOU WANT TO TRAVEL TO
        </span>
        <h1 className="font-barlow text-[144px] mobile:text-[80px] text-white mobile:mx-[24px]">
          SPACE
        </h1>
        <p className="w-[570px] tablet:w-[600px] mobile:w-[327px] font-barlow text-[18px] mobile:text-[15px] leading-[180%] text-gray-400">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-[450px] tablet:w-[340px] mobile:w-[200px] h-[450px] tablet:h-[340px] mobile:h-[200px] flex justify-center items-center rounded-full bg-white/0 hover:bg-white/10 tablet:mt-[66px]">
        <div className="w-[272px] mobile:w-[144px] h-[272px] mobile:h-[144px] rounded-full bg-white flex items-center justify-center cursor-pointer">
          <h3 className="font-barlow text-[32px] mobile:text-[18px] text-gray-500">
            EXPLORE
          </h3>
        </div>
      </div>
    </div>
  );
}
