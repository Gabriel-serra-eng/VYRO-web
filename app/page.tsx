import { Hero } from "@/components/sections/hero";
import { Pain } from "@/components/sections/pain";
import { Method } from "@/components/sections/method";
import { Services } from "@/components/sections/services";
import { Promises } from "@/components/sections/promises";
import { Results } from "@/components/sections/results";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Pain />
      <Method />
      <Services />
      <Promises />
      <Results />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
