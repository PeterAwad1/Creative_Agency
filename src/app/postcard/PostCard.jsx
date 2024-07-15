import Image from "next/image";
import Link from "next/link";

function PostCard({ image, title, des, date }) {
  return (
    <div className="flex flex-col justify-between items-center sm:items-start gap-5 ">
      <div className="w-full h-[300px] flex justify-between items-center gap-2">
        <div className="relative w-[90%] h-[100%] ">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-md"
            sizes="100vw, 300px"
            priority
          />
        </div>
        <p className="text-gray-400 text-xs -rotate-90 w-[100px]">{date}</p>
      </div>
      <div className="flex flex-col gap-2 items-center sm:items-start justify-between">
        <h1 className="text-xl">{title}</h1>
        <p className="text-xs text-gray-500 w-[80%]">{des}</p>
        <Link href={`/blog/Post`} className="text-blue-500 underline">
          Read More <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
