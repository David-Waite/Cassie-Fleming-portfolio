import Layout from "../components/Layout";
import { useRouter } from "next/router";
import OpeningParallax from "../components/openingParallax";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname != "/index") {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return (
      <>
        <OpeningParallax></OpeningParallax>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
