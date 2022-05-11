import ProductList from "../../../components/products/product-list";
import { getCategoriesProducts } from "../../../helpers/api-util";
import { Fragment } from "react";
import Head from "next/head";

function CactusPage(props) {
  return (
    <Fragment>
      <Head>
        <title>کاکتوس ها</title> <meta name="desciption" content="" />
      </Head>
      <ProductList items={props.products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const product = await getCategoriesProducts("cactus");
  return { props: { products: product } };
}

export default CactusPage;
