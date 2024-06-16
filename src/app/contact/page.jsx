import Button from "@/components/button/Button";
import Image from "next/image";

function ContactPage() {
  return (
    <div className="flex justify-between items-center gap-24">
      {/* Image Contact */}
      <div className="hidden relative md:block md:w-[500px] md:h-[500px] md:flex-1">
        <Image src="/contact.png" alt="" fill className="object-contain" />
      </div>
      <form className="flex-1 flex flex-col jsutify-between items-center gap-5">
        <input
          type="username"
          name="username"
          placeholder="Name and Surname"
          className="bg-bgSoft text-textSoft w-full h-[50px] p-5  rounded-md focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="bg-bgSoft text-textSoft w-full h-[50px] p-5 rounded-md focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number (optional)"
          className="bg-bgSoft text-textSoft w-full h-[50px] p-5 rounded-md focus:outline-none"
        />
        <textarea
          placeholder="Message"
          cols={30}
          rows={10}
          className="bg-bgSoft text-textSoft w-full h-[200px] p-5 rounded-md focus:outline-none"
        />
        <button className="bg-btn w-full py-2 px-4 rounded-sm focus:outline-none hover:bg-blue-700 font-semibold cursor-pointer">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
