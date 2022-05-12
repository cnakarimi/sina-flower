import Link from "next/link";
import Search from "../../public/icons/Search";
import Heart from "../../public/icons/Heart";
import AddToCart from "../../public/icons/AddToCart";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import PersianPriceSmall from "../../helpers/PersianPriceSmall";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/slices/favoritesSlice";
import FilledHeart from "../../public/icons/FilledHeart";
import PersianPrice from "../../helpers/persianPrice";

function SuggestedList(props) {
  const { product, image, name, price } = props;

  const exploreLink = `categories/${props.id}`;

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  function addToFavoritesHandler(product) {
    dispatch(addToFavorites(product));
  }
  function removeFromFavoritesHandler(product) {
    dispatch(removeFromFavorites(product));
  }

  const favorites = useSelector((state) => state.favorites.favoriteItems);

  const isFavorite = favorites.find((item) => item.id === product.id);

  return (
    <li className="flex flex-col rounded mx-6 transition duration-200 group hover:scale-110 ">
      <Image src={"/" + image} alt={name} width={150} height={220} />

      <div className="h-7 w-28 bg-white dark:bg-emerald-900 absolute text-center justify-around left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/3 rounded-xl hidden group-hover:flex text-slate-600 dark:text-green-200">
        <Link href={exploreLink}>
          <button>
            <Search className="cursor-pointer hover:text-green-400 h-5 w-5 md:h-7 md:w-7" />
          </button>
        </Link>
        {!isFavorite && (
          <button onClick={() => addToFavoritesHandler(product)}>
            <Heart className="cursor-pointer hover:text-green-400 h-5 w-5 md:h-7 md:w-7" />
          </button>
        )}
        {isFavorite && (
          <button onClick={() => removeFromFavoritesHandler(product)}>
            <FilledHeart className="cursor-pointer text-red-400 h-5 w-5 md:h-7 md:w-7" />
          </button>
        )}

        <button onClick={() => addToCartHandler(product)}>
          <AddToCart className="cursor-pointer hover:text-green-400 h-5 w-5 md:h-7 md:w-7" />
        </button>
      </div>
      <div className="pr-5">
        <h2 className="xs:text-base text-tiny dark:text-green-200">{name}</h2>
        <PersianPriceSmall number={price} />
        <PersianPrice number={price} />
      </div>
    </li>
  );
}

export default SuggestedList;
