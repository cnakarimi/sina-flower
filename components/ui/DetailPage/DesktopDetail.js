import { Fragment } from "react";
import PersianPriceLarge from "../../../helpers/PersianPriceLarge";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import Cutting from "../../../public/icons/Cutting";
import Spraying from "../../../public/icons/Spraying";
import Watering from "../../../public/icons/Watering";

function DesktopDetail(props) {
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
      <div className="bg-gray-100 dark:bg-neutral-700 w-full h-2/5  md:h-max md:w-2/6  items-center justify-center px-10 md:px-0 hidden md:flex ">
        <Image src={`/${props.image}`} alt="product" width={350} height={550} />
      </div>
      <div className="hidden md:flex md:w-4/6  ">
        <div className=" mt-20 px-8 ">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl dark:text-lime-200">{props.name}</h1>
          </div>
          <div className="flex">
            <div className="flex items-center w-1/2">
              <PersianPriceLarge className="text-3xl " number={props.price} />
            </div>
            <div className="flex justify-end w-1/2">
              <button className="btn w-24 mx-3 " onClick={commentsViewer}>
                نظرات
              </button>
              <button className="btn w-24 " onClick={postCommentHandler}>
                نظر شما
              </button>
            </div>
          </div>
          <div className=" text-2xl pt-8 dark:text-slate-200">اطلاعات</div>
          <div className="text-gray-500 pt-4 break-words text-xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </div>
          <div className=" w-full py-4   hidden md:block">
            <h3 className=" text-xl dark:text-slate-200">مشخصات</h3>
          </div>
          <div className="py-5  w-1/2 md:flex  lg:justify-evenly hidden ">
            <div className=" w-16 h-16 border-2 border-lime-200 rounded flex justify-center items-center ">
              <Cutting className="w-12 h-12 text-lime-500" />
            </div>
            <div className=" w-16 h-16 border-2 border-lime-200 rounded mx-4 flex justify-center items-center">
              <Spraying className="w-12 h-12" />
            </div>
            <div className=" w-16 h-16 border-2 border-lime-200 rounded flex justify-center items-center">
              <Watering className="w-12 h-12 text-lime-500" />
            </div>
          </div>
          <div className="pt-1 w-1/2 md:flex justify-evenly hidden ">
            <p className="w-16 h-16 lg:w-24 lg:h-24  text-center text-base ">
              {props.cutting}
            </p>
            <p className="w-16 h-16 lg:w-24 lg:h-24 text-center text-base mx-4 ">
              {props.spraying}
            </p>
            <p className="w-16 h-16 lg:w-24 lg:h-24 text-center text-base ">
              {props.watering}
            </p>
          </div>
          <div className="md:flex justify-end hidden">
            <button
              className="btn w-44 "
              onClick={() => addToCartHandler(props)}
            >
              خرید
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DesktopDetail;
