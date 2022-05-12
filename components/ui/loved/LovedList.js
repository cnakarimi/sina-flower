import { useDispatch } from "react-redux";
import PersianPrice from "../../../helpers/persianPrice";
import PersianPriceSmall from "../../../helpers/PersianPriceSmall";
import Trash from "../../../public/icons/Trash";
import { removeFromFavorites } from "../../../store/slices/favoritesSlice";

function LovedList(props) {
  const dispatch = useDispatch();

  function removeFromFavoritesHandler(product) {
    dispatch(removeFromFavorites(product));
  }

  return (
    <li className="flex text-center text-xs  mt-2 border-b-2 border-slate-200">
      <p className="w-1/3 xs:text-base xxs:text-sm text-xs dark:text-lime-200">
        {props.name}
      </p>
      <p className="w-1/3 flex justify-center">
        <PersianPrice number={props.price} />
        <PersianPriceSmall number={props.price} />
      </p>
      <button
        className="w-1/3  flex justify-center"
        onClick={() => removeFromFavoritesHandler(props.product)}
      >
        <Trash className="transition duration-200 hover:text-red-700 cursor-pointer hover:scale-125 dark:text-slate-200" />
      </button>
    </li>
  );
}

export default LovedList;
