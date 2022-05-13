import { Fragment } from "react";
import PersianPrice from "../../../helpers/persianPrice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import Cutting from "../../../public/icons/Cutting";
import Spraying from "../../../public/icons/Spraying";
import Watering from "../../../public/icons/Watering";

function MobileDetail(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  function commentsViewer() {
    router.push(`/categories/comments/${props.id}`);
  }
  function postCommentHandler() {
    router.push(`/categories/comments/newComment/${props.id}`);
  }
  function addToCartHandler(product) {
    dispatch(addToCart(product));
  }

  return (
    <Fragment>
      <div className="bg-gray-100 w-full h-1/2 items-center justify-center px-10 md:px-0 flex md:hidden ">
        <Image src={`/${props.image}`} alt="product" width={200} height={250} />
      </div>
      <div className=" px-8  py-1 flex justify-between md:hidden">
        <div className="flex flex-col w-full">
          <h1 className="text-xl sm:2xl dark:text-lime-200">{props.name}</h1>
          <div className="pt-2 dark:text-slate-200">اطلاعات</div>
        </div>
        <div className="w-full flex justify-end text-xl xs:2xl pt-4 md:hidden">
          <PersianPrice number={props.price} />
        </div>
      </div>
      <div className=" w-full  md:w-6/12 px-8 md:hidden">
        <span className=" text-slate-500 text-xs xs:text-base sm:text-lg ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </span>
      </div>
      <div className=" w-full  px-8 md:hidden">
        <h3 className=" text-lg xs:2xl pt-4 dark:text-slate-200">مشخصات</h3>
      </div>
      <div className="flex md:hidden">
        <div className="pt-5 w-1/2 flex justify-evenly px-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-lime-200 rounded flex justify-center items-center ">
            <Cutting className="w-8 h-8 sm:w-12 sm:h-12 text-lime-500" />
          </div>
          <div className=" w-12 h-12 sm:w-16 sm:h-16 border-2 border-lime-200 rounded flex justify-center items-center">
            <Spraying className="w-8 h-8 sm:w-12 sm:h-12 text-lime-500" />
          </div>
          <div className=" w-12 h-12 sm:w-16 sm:h-16 border-2 border-lime-200 rounded flex justify-center items-center">
            <Watering className="w-8 h-8 sm:w-12 sm:h-12 text-lime-500" />
          </div>
        </div>
        <div className="flex justify-end w-1/2">
          <button className="btn w-16 mx-3 " onClick={commentsViewer}>
            نظرات
          </button>
          <button className="btn w-16 " onClick={postCommentHandler}>
            نظر شما
          </button>
        </div>
      </div>
      <div className="w-1/2 h-8 flex justify-evenly md:hidden px-8">
        <p className="w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 text-center text-tiny xs:text-xs sm:text-base dark:text-lime-200">
          {props.cutting}
        </p>
        <p className="w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 text-center text-tiny xs:text-xs sm:text-base dark:text-lime-200">
          {props.spraying}
        </p>
        <p className="w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 text-center text-tiny xs:text-xs sm:text-base dark:text-lime-200">
          {props.watering}
        </p>
      </div>
      <div className="flex justify-end  md:hidden">
        <button
          className="btn w-24 xs:w-28"
          onClick={() => addToCartHandler(props)}
        >
          خرید
        </button>
      </div>
    </Fragment>
  );
}

export default MobileDetail;
