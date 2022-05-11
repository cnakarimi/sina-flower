import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";

function Options() {
  const router = useRouter();

  return (
    <Fragment>
      <Link href="/">
        <a
          className={`block py-3 px-4 transition duration-200 hover:bg-stone-200 rounded ${
            router.pathname == "/" ? "bg-stone-200" : ""
          }`}
        >
          صفحه اصلی
        </a>
      </Link>
      <Link href="/categories">
        <a
          className={`block py-3 px-4 transition duration-200 hover:bg-stone-200 rounded ${
            router.pathname == "/categories" ? "bg-stone-200" : ""
          }`}
        >
          دسته بندی
        </a>
      </Link>
      <Link href="/favorites">
        <a
          className={`block py-3 px-4 transition duration-200 hover:bg-stone-200 rounded ${
            router.pathname == "/favorites" ? "bg-stone-200" : ""
          }`}
        >
          علاقه مندی ها
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`block py-3 px-4 transition duration-200 hover:bg-stone-200 rounded ${
            router.pathname == "/about" ? "bg-stone-300" : ""
          }`}
        >
          درباره ما
        </a>
      </Link>
    </Fragment>
  );
}

export default Options;
