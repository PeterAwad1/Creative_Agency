import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1 className="text-3xl py-4">Not Found</h1>
      <p>Sorry this page not exist</p>
      <Link href="/">Return Homepage</Link>
    </div>
  );
}

export default NotFound;
