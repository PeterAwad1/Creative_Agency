import Image from "next/image";
import Link from "next/link";

function SinglePost() {
  return (
    <div className="flex  gap-24 ">
      <div className="hidden md:block md:relative md:h-[calc(100vh-200px)] md:flex-1">
        <Image
          src="/img1.jpg"
          alt="Blog"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-12 flex-[2] ">
        <h1 className="text-6xl text-center md:text-left">Title</h1>
        <div className="flex  items-start gap-5">
          <Image
            src="/img1.jpg"
            alt="blog"
            width={50}
            height={50}
            className="rounded-[50%] object-cover"
          />
          <div className="flex flex-col gap-2 justify-between ">
            <p className="text-xs text-gray-500">Author</p>
            <p>Peter Awad</p>
          </div>
          <div className="flex flex-col gap-2 justify-between ">
            <p className="text-xs text-gray-500">Published</p>
            <p>Nov 04 2024</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          soluta exercitationem facilis eligendi voluptatem, iusto rerum tempore
          maxime nihil necessitatibus ex, earum minima odit, impedit culpa
          reiciendis alias natus corporis.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
