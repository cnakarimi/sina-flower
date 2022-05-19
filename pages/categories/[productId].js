import { getProductById, suggestedItems } from "../../helpers/api-util";
import Head from "next/head";
import DesktopDetail from "../../components/ui/DetailPage/DesktopDetail";
import MobileDetail from "../../components/ui/DetailPage/MobileDetail";

function ProductDetailPage(props) {
  const product = props.selectedProduct;

  if (!product) {
    return <p className="center">در حال بارگزاری...</p>;
  }

  return (
    <div className="flex flex-col  md:flex-row  h-full">
      <Head>
        <title>{product.name}</title>
        <meta name="desciption" content="" />
      </Head>
      {/* for desktop */}
      <DesktopDetail
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        cutting={product.cutting}
        spraying={product.spraying}
        watering={product.watering}
      />
      {/* for mobiles */}
      <MobileDetail
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        cutting={product.cutting}
        spraying={product.spraying}
        watering={product.watering}
      />
    </div>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const product = await getProductById(productId);
  return {
    props: { selectedProduct: product },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  const products = await suggestedItems();
  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default ProductDetailPage;
