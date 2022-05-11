import { Provider as ProviderAuth } from "next-auth/client";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store from "../store/store";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth session={pageProps.session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Provider store={store}>
          <Head>
            <title>گل سینا</title> <meta name="description" content="" />
            <meta name="author" content="ُCna Karimi" />
            <link
              rel="icon"
              type="image/x-icon"
              href="https://img.icons8.com/fluency/48/000000/bunch-flowers.png"
            />
          </Head>
          <Layout>
            <Component {...pageProps} /> <ToastContainer />
          </Layout>
        </Provider>
      </ThemeProvider>
    </ProviderAuth>
  );
}

export default MyApp;
