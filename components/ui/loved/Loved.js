import { useSelector } from "react-redux";
import LovedList from "./LovedList";
import LoveTitles from "./LoveTitles";

function Loved() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="flex w-screen h-screen">
      <div className=" w-full h-full  px-7 border-slate-200">
        <div className="py-6 text-xl md:text-2xl dark:text-green-200">
          محصولات مورد علاقه شما
        </div>
        <LoveTitles />
        {/* product */}
        <ul className="mt-4 md:pl-40">
          {favorites.favoriteItems.map((item) => (
            <LovedList
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              product={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Loved;
