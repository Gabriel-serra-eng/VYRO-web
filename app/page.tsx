import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Services } from "@/components/sections/services";
import { Diagnostic } from "@/components/sections/diagnostic";
import { SocialProof } from "@/components/sections/social-proof";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Method />
      <Services />
      <Diagnostic />
      <SocialProof />
      <Faq />
      <Footer />
    </>
  );
}
