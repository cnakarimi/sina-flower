import Login from "../../components/ui/Login/Login";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

function User() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>در حال بارگزاری...</p>;
  }

  return (
    <div>
      <Head>
        <title>ورود</title> <meta name="description" content="" />
      </Head>
      <Login />
    </div>
  );
}

export default User;
