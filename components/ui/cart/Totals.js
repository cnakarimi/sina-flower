import PersianPrice from "../../../helpers/persianPrice";
import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../../../store/slices/cartSlice";
import { useEffect } from "react";

function Totals() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <div className=" w-1/3 h-full px-7">
      <div className=" py-32 text-md md:text-xl">
        خلاصه سبد
        <div className="flex justify-between md:justify-start mt-6 text-xs md:text-sm ">
          <p>قیمت کل</p>
          <p className="md:pr-7">
            <PersianPrice number={cart.cartTotalAmount}></PersianPrice>
          </p>
        </div>
        <div className="flex justify-between md:justify-start mt-6 text-xs md:text-sm "></div>
        <div className="flex justify-start  mt-6 text-xs md:text-sm ">
          <input
            className="rounded w-24 h-5 sm:w-28 md:w-30 placeholder:pr-2 "
            placeholder="کد تخفیف   "
          />
        </div>
        <div className="flex justify-start mt-4 text-xs ">
          <button className="rounded w-12 h-6 md:w-16 md:h-7 bg-slate-100 hover:opacity-75">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

export default Totals;
