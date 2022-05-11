import ChoosedProduct from "../../components/ui/cart/ChoosedProduct";
import Head from "next/head";
import { Fragment } from "react";

function Cart() {
  return (
    <Fragment>
      <Head>
        <title>سبد خرید</title> <meta name="description" content="" />
      </Head>
      <ChoosedProduct />
    </Fragment>
  );
}

export default Cart;
