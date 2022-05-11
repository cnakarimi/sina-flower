import Link from "next/link";

function Logo() {
  return (
    <div className="flex font-twomedium text-2xl font-bold">
      <Link href="/">
        <a className="px-2 ">
          گل
          <span className="text-green-600 "> سینا</span>
        </a>
      </Link>
    </div>
  );
}

export default Logo;
