import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../../store/slices/cartSlice";
import PersianNumber from "../../../helpers/persianNumbers";
import Trash from "../../../public/icons/Trash";
import RemoveFromCart from "../../../public/icons/RemoveFromCart";
import IncreaseCart from "../../../public/icons/IncreaseCart";
import PersianPrice from "../../../helpers/persianPrice";
import PersianPriceSmall from "../../../helpers/PersianPriceSmall";

function Choose() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const removeCartHandler = (product) => {
    dispatch(removeFromCart(product));
  };
  const decreaseCartHandler = (product) => {
    dispatch(decreaseCart(product));
  };
  const increaseCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <ul className="mt-4">
      {cart.cartItems.map((cartItem) => (
        <li
          className="flex justify-around items-center text-center text-xs md:text-sm mt-2 border-b-2 border-slate-200 "
          key={cartItem.id}
        >
          <p className="w-1/12 dark:text-lime-200">{cartItem.name}</p>
          <p className="w-1/12">
            <PersianPriceSmall number={cartItem.price} />
            <PersianPrice number={cartItem.price} />
          </p>
          <p className="w-1/12">
            <PersianNumber number={cartItem.cartQuantity} />
          </p>
          <p className="w-1/12 hidden xs:flex">
            <PersianPriceSmall
              number={cartItem.price * cartItem.cartQuantity}
            />
            <PersianPrice number={cartItem.price * cartItem.cartQuantity} />
          </p>

          <div className="flex flex-col sm:flex-row w-1/12 sm:w-1/4">
            <button
              className="w-full flex justify-center"
              onClick={() => removeCartHandler(cartItem)}
            >
              <Trash className="transition duration-200 hover:text-red-700 cursor-pointer transform hover:scale-125 dark:text-slate-200 " />
            </button>
            <button
              className="w-full flex justify-center"
              onClick={() => decreaseCartHandler(cartItem)}
            >
              <RemoveFromCart className="transition duration-200 hover:text-red-700 cursor-pointer transform hover:scale-125 dark:text-slate-200" />
            </button>
            <button
              className="w-full flex justify-center"
              onClick={() => increaseCartHandler(cartItem)}
            >
              <IncreaseCart className="transition duration-200 hover:text-green-700 cursor-pointer transform hover:scale-125 dark:text-slate-200" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Choose;
