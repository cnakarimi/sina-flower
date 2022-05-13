import { Fragment } from "react";
import SuggestedProducts from "../components/products/suggested-products";
import { suggestedItems } from "../helpers/api-util";
import Head from "next/head";
import { useRouter } from "next/router";
import MainCarousel from "../components/ui/Carousel/MainCarousel";

export default function Home(props) {
  const router = useRouter();

  function allProductsHandler() {
    router.replace("/categories");
  }

  return (
    <Fragment>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="" />
      </Head>
      <MainCarousel />
      <div className="flex justify-between ">
        <h5 className=" my-auto mx-6 dark:text-lime-200 ">محصولات پیشنهادی</h5>
        <button className="btn w-24 h-10 text-sm" onClick={allProductsHandler}>
          همه محصولات
        </button>
      </div>

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
