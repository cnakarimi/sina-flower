import { getSession } from "next-auth/client";
import { Fragment } from "react";
import Head from "next/head";
import UserProfile from "../../components/ui/Profile/UserProfile";

function Profile() {
  return (
    <Fragment>
      <Head>
        <title>پروفایل</title> <meta name="description" content="" />
      </Head>
      <UserProfile />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return { redirect: { destination: "/signin", permanent: false } };
  }

  return { props: { session } };
}

export default Profile;
