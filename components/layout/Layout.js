import { useEffect, useState } from "react";
import MenuToggler from "../../public/icons/Menu-toggler";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../store/slices/cartSlice";
import Options from "./Options";
import UserItems from "./UserItems";
import Logo from "../ui/Logo/Logo";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const toggleMenuHandler = () => {
    setToggle(!toggle);
  };

  const closeToggleHandler = () => {
    setToggle(false);
  };

  return (
    <div className="relative min-h-screen md:flex overflow-hidden font-samim ">
      {/* mobile menu */}
      <div className="bg-stone-100 border border-stone-300 flex justify-between  md:hidden z-50 ">
        <div className="flex m-5 justify-around font-twomedium text-lg font-bold sm:text-3xl ">
          <Link href="/">
            <a className="px-2 dark:text-slate-900 ">
              گل
              <span className="text-green-600 "> سینا</span>
            </a>
          </Link>
        </div>
        <button
          onClick={toggleMenuHandler}
          className="focus:bg-stone-200 p-2  "
        >
          <MenuToggler className="dark:text-green-900" />
        </button>
      </div>
      {/* sidebar */}
      <div
        className={`${
          !toggle ? "translate-x-full" : ""
        } bg-stone-100  border border-stone-300 shadow-md  text-black w-52 space-y-10 py-7 px-2 absolute inset-y-0 right-0 transform  transition duration-200 ease-in-out md:relative md:translate-x-0  z-50`}
      >
        {/* logo */}
        <Logo />
        {/* nav */}
        <nav className="space-y-3.5 ">
          <Options onClose={closeToggleHandler} />
          <UserItems onClose={closeToggleHandler} />
          <input
            type="search"
            placeholder="جستجو"
            className="focus:outline-none focus:shadow-md dark:text-white dark:bg-slate-900"
          ></input>
        </nav>
      </div>
      {/* content */}

      <main
        className="w-ideal md:w-screen xs:h-ideal  md:h-screen h-xideal "
        onClick={toggle ? closeToggleHandler : null}
      >
        {props.children}
      </main>
    </div>
  );
}

export default Header;
