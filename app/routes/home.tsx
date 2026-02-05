import { useEffect } from "react";

import { About, Footer, Header, Jerseys, Stats } from "~/components/app";
import { PageMetadata } from "~/components/library";
import { trackGaPageView } from "~/utils";

export default function Home() {
  useEffect(() => {
    trackGaPageView();
  }, []);

  return (
    <>
      <PageMetadata />
      <Header />
      <Jerseys />
      <Stats />
      <About />
      <Footer />
    </>
  );
}
