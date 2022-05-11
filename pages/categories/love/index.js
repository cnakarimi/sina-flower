import { getCategoriesProducts } from "../../../helpers/api-util";
import ProductList from "../../../components/products/product-list";
import { Fragment } from "react";
import Head from "next/head";

function LovePage(props) {
  return (
    <Fragment>
      <Head>
        <title>برای عشق</title> <meta name="desciption" content="" />
      </Head>
      <ProductList items={props.products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const filteredProducts = await getCategoriesProducts("love");
  return { props: { products: filteredProducts } };
}

export default LovePage;
