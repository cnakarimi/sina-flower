import { getCategoriesProducts } from "../../../helpers/api-util";
import ProductList from "../../../components/products/product-list";
import { Fragment } from "react";
import Head from "next/head";

function HousePage(props) {
  return (
    <Fragment>
      <Head>
        <title>برای خانه</title> <meta name="desciption" content="" />
      </Head>
      <ProductList items={props.products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const product = await getCategoriesProducts("house");
  return { props: { products: product } };
}

export default HousePage;
