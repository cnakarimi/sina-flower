import Link from "next/link";
import Gift from "../../public/icons/Gift";
import Arrow from "../../public/icons/Arrow";
import SweetHeart from "../../public/icons//SweetHeart";
import House from "../../public/icons/House";
import Cactus from "../../public/icons/Cactus";
import Head from "next/head";

function Categories() {
  return (
    <ul className="flex flex-col h-ideal w-screen md:h-screen justify-between ">
      <Head>
        <title>دسته بندی</title>
        <meta name="description" content="" />
      </Head>
      <li className="py-5 text-center bg-green-900 text-red-50 text-2xl md:ml-28 dark:bg-green-200 dark:text-green-900">
        انتخاب کنید
      </li>
      <Link href="/categories/birthday" passHref>
        <li className=" category0 group">
          <Gift className="category-icons0" />
          <div className=" text-green-600 dark:text-green-100 text-xl sm:text-3xl md:text-4xl">
            برای تولد
          </div>
          <Arrow className="w-14 h-14  font-bold text-2xl sm:text-3xl md:4xl text-green-600 dark:text-green-100 md:ml-28  group-hover:mr-20 xl:group-hover:mr-40 " />
        </li>
      </Link>
      <Link href="/categories/love" passHref>
        <li className="category1 group">
          <SweetHeart className="category-icons1" />
          <div className=" text-green-100 text-xl sm:text-3xl md:text-4xl">
            برای عشق
          </div>
          <Arrow className="w-14 h-14 font-bold text-2xl sm:text-3xl md:4xl text-green-600 dark:text-green-200 md:ml-28  group-hover:mr-20 xl:group-hover:mr-40 " />
        </li>
      </Link>
      <Link href="/categories/house" passHref>
        <li className="category0 group">
          <House className="category-icons0" />
          <div className=" text-green-600 dark:text-green-100 text-xl sm:text-3xl md:text-4xl">
            برای خانه
          </div>
          <Arrow className="w-14 h-14 font-bold text-2xl sm:text-3xl md:4xl text-green-600 dark:text-green-100  md:ml-28  group-hover:mr-20 xl:group-hover:mr-40 " />
        </li>
      </Link>
      <Link href="/categories/cactus" passHref>
        <li className="category1 group">
          <Cactus className="category-icons1" />
          <div className=" text-green-100 text-xl sm:text-3xl md:text-4xl">
            کاکتوس
          </div>
          <Arrow className="w-14 h-14 font-bold text-2xl sm:text-3xl md:4xl text-green-600 dark:text-green-200 md:ml-28  group-hover:mr-20 xl:group-hover:mr-40 " />
        </li>
      </Link>
    </ul>
  );
}

export default Categories;
