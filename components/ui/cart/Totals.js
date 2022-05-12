import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../../../store/slices/cartSlice";
import { useEffect } from "react";
import PersianPriceSmall from "../../../helpers/PersianPriceSmall";
import PersianPrice from "../../../helpers/persianPrice";

function Totals() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <div className=" w-1/3 h-full px-7">
      <div className=" py-32 text-md md:text-xl dark:text-slate-200">
        خلاصه سبد
        <div className="flex justify-between md:justify-start mt-6 text-xs md:text-sm ">
          <p className="dark:text-slate-200">قیمت کل</p>
          <p className="md:pr-7">
            <PersianPriceSmall number={cart.cartTotalAmount} />
            <PersianPrice number={cart.cartTotalAmount} />
          </p>
        </div>
        <div className="flex justify-between md:justify-start mt-6 text-xs md:text-sm "></div>
        <div className="flex justify-start  mt-6 text-xs md:text-sm ">
          <input
            className="rounded w-24 h-5 sm:w-28 md:w-30 placeholder:pr-2 dark:bg-slate-700 "
            placeholder="کد تخفیف   "
          />
        </div>
        <div className="flex justify-start mt-4 text-xs ">
          <button className="rounded w-12 h-6 md:w-16 md:h-7 bg-slate-100 hover:opacity-75 dark:bg-green-600">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default Totals;
