import Link from "next/link";
import Links from "./Links";

function Navbar() {
  return (
    <div className=" flex items-center justify-between h-24  ">
      <Link href="/" className="text-3xl font-bold">
        Logo
      </Link>
      <div className="flex justify-between items-center">
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
