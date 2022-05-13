import Link from "next/link";
import CartIcon from "../../public/icons/CartIcons";
import PersianNumber from "../../helpers/persianNumbers";
import Person from "../../public/icons/Person";
import SignUp from "../../public/icons/SignUp";
import LogOut from "../../public/icons/LogOut";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/client";
import { getTotal } from "../../store/slices/cartSlice";
import { useRouter } from "next/router";
import LogIn from "../../public/icons/LogIn";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import Sun from "../../public/icons/Sun";
import Moon from "../../public/icons/Moon";

function UserItems(props) {
  const cart = useSelector((state) => state.cart);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [session, loading] = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  function logOutHandler() {
    signOut();
    router.replace("/");
    toast.success("از حساب خود خارج شدید", { position: "bottom-right" });
  }

  function themeLightHandler() {
    setTheme("light");
    props.onClose();
  }
  function themeDarkHandler() {
    setTheme("dark");
    props.onClose();
  }

  function sidebarCloser() {
    props.onClose();
  }

  function rendrerThemeChanger() {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={themeLightHandler}
          className="flex items-center justify-center border border-stone-300 shadow-md h-10 w-10 rounded-3xl hover:opacity-70 "
        >
          <Sun className="w-6 h-6 text-amber-500" />
        </button>
      );
    } else {
      return (
        <button
          onClick={themeDarkHandler}
          className="flex items-center justify-center border border-stone-300 shadow-md h-10 w-10 rounded-3xl hover:opacity-70 "
        >
          <Moon className="w-6 h-6 text-indigo-700" />
        </button>
      );
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {rendrerThemeChanger()}
      <div className="flex justify-center pt-8 pb-5 ">
        <Link href="/cart">
          <a
            className="flex items-center justify-center border border-stone-300 shadow-md h-10 w-10 rounded-3xl hover:opacity-70 relative"
            onClick={sidebarCloser}
          >
            <CartIcon className="w-6 h-6 " />
            <p className="absolute right-0 -top-2">
              <PersianNumber number={cart.cartTotalQuantity} />
            </p>
          </a>
        </Link>

        {session && (
          <Link href="/profile">
            <a
              className="flex items-center justify-center border border-stone-300 shadow-md h-10 w-10 rounded-3xl hover:opacity-70 "
              onClick={sidebarCloser}
            >
              <Person className="w-6 h-6" />
            </a>
          </Link>
        )}
        {session && (
          <a
            className="flex items-center justify-center border border-stone-300 shadow-md h-10 w-10 rounded-3xl hover:opacity-70 "
            onClick={sidebarCloser}
          >
            <button onClick={logOutHandler}>
              <LogOut className="w-6 h-6 " />
            </button>
          </a>
        )}
        {!session && !loading && (
          <Link href="/signin">
            <a
              className="flex items-center justify-center border border-stone-300 shadow-md h-10 w-10 rounded-3xl hover:opacity-70 "
              onClick={sidebarCloser}
            >
              <SignUp className="w-6 h-6" />
            </a>
          </Link>
        )}
        {!session && !loading && (
          <Link href="/login">
            <a
              className="flex items-center justify-center border border-stone-300 shadow-md h-10 w-10 rounded-3xl hover:opacity-70 relative"
              onClick={sidebarCloser}
            >
              <LogIn className="w-6 h-6 " />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default UserItems;
