import Loved from "../../components/ui/loved/Loved";
import { Fragment } from "react";
import Head from "next/head";

function Favorites() {
  return (
    <Fragment>
      <Head>
        <title>علاقمندی ها</title>
        <meta name="description" content="" />
      </Head>
      <Loved />
    </Fragment>
  );
}

export default Favorites;
