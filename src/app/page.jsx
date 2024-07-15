import Button from "@/components/button/Button";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-between items-center gap-24  ">
      {/* Text Section */}
      <div className="flex flex-col justify-between items-center lg:items-start gap-10 flex-1">
        {/* Text Section */}
        <div className="flex flex-col gap-5 justify-between items-center">
          <h1 className="text-5xl lg:text-8xl text-text font-bold text-center lg:text-left">
            Creative Thoughts Agency.
          </h1>
          <p className="text-text font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            perspiciatis doloremque non porro veritatis, sint excepturi nemo
            doloribus quis?.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-between item-center gap-5">
          <button className="bg-btn text-white p-2 cursor-pointer rounded-md hover:scale-105 focus:outline-none">
            Learn More
          </button>
          <button className="bg-white text-black p-2 cursor-pointer rounded-md hover:scale-105 focus:outline-none">
            Contact
          </button>
        </div>
        {/* Brand Image Section */}
        <div className="relative w-[100%] lg:w-[500px] h-[50px] opacity-50 grayscale-[100%] ">
          <Image src="/brands.png" fill alt="" sizes="100vw ,50px" />
        </div>
      </div>
      {/* Hero Image Section */}
      <div className="hidden relative lg:block lg:w-[500px] lg:h-[500px] lg:flex-1">
        <Image
          src="/hero.gif"
          fill
          alt=""
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 500px"
          priority
        />
      </div>
    </div>
  );
};

export default Home;
