import Link from "next/link";
import Search from "../../public/icons/Search";
import Heart from "../../public/icons/Heart";
import AddToCart from "../../public/icons/AddToCart";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/slices/favoritesSlice";
import FilledHeart from "../../public/icons/FilledHeart";
import PersianPriceSmall from "../../helpers/PersianPriceSmall";
import PersianPrice from "../../helpers/persianPrice";

function ProductItem(props) {
  const { id, name, price, image, product } = props;

  const exploreLink = `/categories/${id}`;

  const dispatch = useDispatch();

  function addToCartHandler(product) {
    dispatch(addToCart(product));
  }

  function addToFavoritesHandler(product) {
    dispatch(addToFavorites(product));
  }
  function removeFromFavoritesHandler(product) {
    dispatch(removeFromFavorites(product));
  }

  const favorites = useSelector((state) => state.favorites.favoriteItems);

  const isFavorite = favorites.find((item) => item.id === product.id);

  return (
    <li
      className="
      mx-4 pt-6 transform transition duration-200 group hover:scale-110  "
    >
      <Image src={"/" + image} alt={name} width={150} height={220} />
      <div className="h-8 w-20 sm:h-7 sm:w-28 bg-white dark:bg-emerald-900 absolute text-center justify-around left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:top-1/2 top-16 rounded-xl hidden group-hover:flex text-slate-600 dark:text-green-200">
        <Link href={exploreLink}>
          <button>
            <Search className="hover:text-green-400 h-5 w-5 sm:w-7 sm:h-7" />
          </button>
        </Link>
        {isFavorite && (
          <button onClick={() => removeFromFavoritesHandler(props.product)}>
            <FilledHeart className=" text-red-400 cursor-pointer h-5 w-5 sm:w-7 sm:h-7" />
          </button>
        )}

        {!isFavorite && (
          <button onClick={() => addToFavoritesHandler(props.product)}>
            <Heart className=" hover:text-green-400 cursor-pointer h-5 w-5 sm:w-7 sm:h-7" />
          </button>
        )}
        <button onClick={() => addToCartHandler(props.product)}>
          <AddToCart className=" hover:text-green-400 cursor-pointer h-5 w-5 sm:w-7 sm:h-7" />
        </button>
      </div>
      <div>
        <h2 className="dark:text-green-200 xs:text-base text-xxs">{name}</h2>
        <PersianPriceSmall number={price} />
        <PersianPrice number={price} />
      </div>
    </li>
  );
}

export default ProductItem;
