import Totals from "./Totals";
import Titles from "./Titles";
import Choosed from "./Choosed";

function ChoosedProduct() {
  return (
    <div className="flex w-screen h-screen">
      <div className="  w-2/3 sm:w-5/6 md:w-6/12 lg:w-8/12 xl:w-9/12  h-full  px-7 border-l-2 border-slate-200">
        <Titles />

        {/* product */}
        <Choosed />
      </div>
      <Totals />
    </div>
  );
}

export default ChoosedProduct;
