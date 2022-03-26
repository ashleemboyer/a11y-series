import type { AppProps, NextWebVitalsMetric } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

const abbreviationsToNames = {
  TTFB: "Time to First Byte",
  FCP: "First Contentful Paint",
  LCP: "Largest Contentful Paint",
  FID: "First Input Delay",
  CLS: "Cumulative Layout Shift",
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const { id, name, startTime, value, label } = metric;
  console.log(metric);
}

export default App;
