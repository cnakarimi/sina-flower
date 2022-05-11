import { Fragment } from "react";
import Head from "next/head";
import SignUp from "../../components/ui/Login/SignUp";

function SignIn() {
  return (
    <Fragment>
      <Head>
        <title>ثبت نام</title> <meta name="description" content="" />
      </Head>
      <SignUp />
    </Fragment>
  );
}

export default SignIn;
