import { Fragment } from "react";
import SuggestedProducts from "../components/products/suggested-products";
import { suggestedItems } from "../helpers/api-util";
import Head from "next/head";
import MainCarousel from "../components/ui/Carousel/MainCarousel";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="" />
      </Head>
      <MainCarousel />
      <h5 className=" mt-12 mx-6 dark:text-lime-200">محصولات پیشنهادی</h5>
      <SuggestedProducts items={props.suggested} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const suggestedProducts = await suggestedItems();

  return {
    props: {
      suggested: suggestedProducts,
    },
    revalidate: 3600,
  };
}
