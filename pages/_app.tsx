import type { AppProps, NextWebVitalsMetric } from "next/app";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <header>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
