import { Fragment } from "react";
import Us from "../../components/ui/AboutUs/Us";
import { getPersonnel } from "../../helpers/api-util";
import Head from "next/head";

function AboutUs(props) {
  return (
    <Fragment>
      <Head>
        <title>درباره ما</title>
        <meta name="description" content="" />
      </Head>
      <Us personnel={props.personnel} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const personnel = await getPersonnel();
  return { props: { personnel } };
}

export default AboutUs;
