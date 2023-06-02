import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";
// import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="w-full h-[100vh] relative">
      <VideoPlayer className="object-cover" />
      <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,.4)]"></div>
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-end md:justify-center text-start ">
        <h1 className="text-white text-5xl xl:text-6xl">Humuchat</h1>
        <p className="text-white text-center my-4 md:my-8 md:w-[60%] lg:w-[45%] xl:text-2xl 2xl:w-[31%] 2xl:text-4xl">
          Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
          suspendisse rhoncus venenatis nisl magna scelerisque. Morbi tincidunt
          urna neque neque.
        </p>
        <div
          className="w-[90%] md:w-[49%] lg:w-[37%] xl:w-[30%] 2xl:w-[20%] flex flex-col md:flex-row 
        gap-2 lg:gap-4 xl:mt-12 mb-8 2xl:text-xl"
        >
          <div className="flex rounded-2xl w-full md:rounded-full bg-white items-center py-2 px-4 gap-4 md:gap-2 lg:w-[208px] xl:w-[190px] 2xl:w-[240px] mx-auto xl:mx-0">
            <div className=" flex items-center gap-2 mx-auto">
              <Image
                src="/images/play-store.png"
                className="w-6 h-6 2xl:w-11 2xl:h-11"
                width={20}
                height={20}
                alt="play-store"
              />
              <a href="/">
                GET IT ON <span className="md:font-bold">GOOGLE STORE</span>
              </a>
            </div>
          </div>
          <div className="flex rounded-2xl w-full md:rounded-full bg-white items-center p-2 md:py-2 md:px-[1.2rem] gap-4 md:gap-2 lg:w-[208px] xl:w-[190px] 2xl:w-[240px] mx-auto xl:mx-4">
            <div className=" flex items-center gap-2 mx-auto">
              <Image
                src="/images/appleLogo.png"
                className="w-7 h-6 2xl:w-11 2xl:h-11"
                width={20}
                height={20}
                alt="appleLogo"
              />
              <a href="/">
                GET IT ON <span className="md:font-bold">APPLE STORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
