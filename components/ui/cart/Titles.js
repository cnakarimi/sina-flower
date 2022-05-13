import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { restartItems } from "../../../store/slices/cartSlice";

function Titles() {
  const dispatch = useDispatch();

  const resetCartHandler = () => {
    dispatch(restartItems());
  };

  return (
    <Fragment>
      <div className="flex justify-between">
        <div className="py-6 text-xl md:text-2xl dark:text-slate-200">
          سبد خرید
        </div>

        <button
          className="btn w-16 text-xs sm:w-1/12"
          onClick={resetCartHandler}
        >
          حذف همه
        </button>
      </div>
      <div className="flex justify-around text-xs text-center md:text-sm">
        <div className="text-slate-400 w-1/12 sm:text-sm text-tiny  ">
          محصول
        </div>
        <div className="text-slate-400 w-1/12 sm:text-sm text-tiny   ">
          قیمت
        </div>
        <div className="text-slate-400 w-1/12 sm:text-sm  text-tiny  ">
          تعداد
        </div>
        <div className="text-slate-400 w-1/12 sm:text-sm  text-tiny hidden xs:flex  ">
          قیمت نهایی
        </div>
        <div className="hidden w-1/4 sm:flex">
          <div className="text-slate-400 w-full sm:text-sm  text-xs ">حذف </div>
          <div className="text-slate-400 w-full sm:text-sm  text-xs">
            کم کردن
          </div>
          <div className="text-slate-400 w-full sm:text-sm  text-xs">
            اضافه کردن
          </div>
        </div>
        <div className="flex sm:hidden text-slate-400 text-tiny ">گزینه ها</div>
      </div>
    </Fragment>
  );
}

export default Titles;
