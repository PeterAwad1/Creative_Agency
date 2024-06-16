import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex justify-between items-center gap-24">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-between items-center md:items-start gap-10">
        {/* About Agency */}
        <h1 className="text-btn text-xl font-bold">About Agency</h1>
        {/* Main Text */}
        <h1 className="text-white text-5xl md:text-3xl  lg:text-5xl  font-bold text-center lg:text-left">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        {/* text pragraphe */}
        <p className="text-textSoft text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ut eius eum at laudantium doloremque minus maxime voluptatibus
          similique vel a voluptatem, accusantium quam numquam in molestiae
          pariatur voluptas doloribus?
        </p>
        {/* Rating Text Section */}
        <div className="flex flex-col md:flex-row md:items-start items-center gap-5">
          <div className="flex flex-col items-center md:items-start justify-between gap-2">
            <h1 className="text-2xl text-btn font-bold">10 K+</h1>
            <p className="text-gray-400 text-xs">Year of experince</p>
          </div>
          <div className="flex flex-col items-center md:items-start justify-between gap-2">
            <h1 className="text-2xl text-btn font-bold">232 K+</h1>
            <p className="text-gray-400 text-xs">People reached</p>
          </div>
          <div className="flex flex-col items-center md:items-start justify-between gap-2">
            <h1 className="text-2xl text-btn font-bold">5 K+</h1>
            <p className="text-gray-400 text-xs">Services and plugins</p>
          </div>
        </div>
      </div>
      {/* About Image */}
      <div className="hidden relative md:block md:w-[500px] md:h-[500px] md:flex-1">
        <Image src="/about.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

export default AboutPage;
