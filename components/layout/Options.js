import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";

function Options(props) {
  const router = useRouter();

  function sidebarCloser() {
    props.onClose();
  }

  return (
    <Fragment>
      <Link href="/">
        <a
          className={`block py-3 px-4 transition duration-200 hover:bg-stone-200 rounded ${
            router.pathname == "/" ? "bg-stone-200" : ""
          }`}
          onClick={sidebarCloser}
        >
          صفحه اصلی
        </a>
      </Link>
      <Link href="/categories">
        <a
          className={`block py-3 px-4 transition duration-200 hover:bg-stone-200 rounded ${
            router.pathname == "/categories" ? "bg-stone-200" : ""
          }`}
          onClick={sidebarCloser}
        >
          دسته بندی
        </a>
      </Link>
      <Link href="/favorites">
        <a
          className={`block py-3 px-4 transition duration-200 hover:bg-stone-200 rounded ${
            router.pathname == "/favorites" ? "bg-stone-200" : ""
          }`}
          onClick={sidebarCloser}
        >
          علاقه مندی ها
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`block py-3 px-4 transition duration-200 hover:bg-stone-200 rounded ${
            router.pathname == "/about" ? "bg-stone-300" : ""
          }`}
          onClick={sidebarCloser}
        >
          درباره ما
        </a>
      </Link>
    </Fragment>
  );
}

export default Options;
