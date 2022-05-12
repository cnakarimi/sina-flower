import { Fragment } from "react";
import Image from "next/image";
import Twitter from "../../../public/icons/Twitter";
import LinkedIn from "../../../public/icons/Linkedin";
import Instagram from "../../../public/icons/Instagram";

function TeamMember(props) {
  const { name, image, job } = props;

  return (
    <ul className="list-none pt-7 sm:pt-5 flex flex-col items-center  ">
      <li className="bg-red-200 w-20 h-12 md:w-28 md:h-28 lg:w-40 lg:h-40 rounded-full group  flex justify-center items-center  relative ">
        <Image
          src={"/" + image}
          alt="our-team-member"
          width={200}
          height={200}
          className="rounded-full group-hover:brightness-50 cursor-pointer transition duration-200"
        />
        <div className="absolute inline-flex ">
          <div className="w-6 h-6  md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full border-2 hidden group-hover:flex cursor-pointer justify-center items-center">
            <Twitter className="text-white w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 hover:text-slate-200" />
          </div>
          <div className="w-6 h-6  md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full border-2 hidden group-hover:flex cursor-pointer justify-center items-center">
            <LinkedIn className="text-white w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8  hover:text-slate-200" />
          </div>
          <div className="w-6 h-6  md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full border-2 hidden group-hover:flex cursor-pointer justify-center items-center">
            <Instagram className="text-white w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 hover:text-slate-200" />
          </div>
        </div>
      </li>
      <div className="pt-5 text-sm sm:text-base dark:text-lime-200">{name}</div>
      <p className="pt-1 sm:pt-2 text-sm sm:text-base text-green-700 dark:text-green-200">
        {job}
      </p>
    </ul>
  );
}

export default TeamMember;
