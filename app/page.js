"use client"
import Home from './(routes)/home/page';

function page() {
  return (
    <>
     <Home />
    </>
  );
}

export default page;

// import { wrapper } from "../store/store";

// function page({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default wrapper.withRedux(page);