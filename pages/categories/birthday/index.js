import ProductList from "../../../components/products/product-list";
import { getCategoriesProducts } from "../../../helpers/api-util";
import { Fragment } from "react";
import Head from "next/head";

function BirthdayPage(props) {
  return (
    <Fragment>
      <Head>
        <title> برای تولد</title> <meta name="desciption" content="" />
      </Head>
      <ProductList items={props.products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const product = await getCategoriesProducts("birthday");
  return { props: { products: product } };
}

export default BirthdayPage;
