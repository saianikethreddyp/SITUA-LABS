import Hero from "@/components/hero";
import CustomerStory from "@/components/customer-story";
import WorkRows from "@/components/work-rows";
import ProofBand from "@/components/proof-band";
import CommercialTerritory from "@/components/commercial-territory";
import Approach from "@/components/approach";
import Contact from "@/components/contact";
import Interrupt from "@/components/interrupt";

export default function Home() {
  return (
    <>
      <Hero />
      <CustomerStory />
      <Interrupt>
        Fix the website and the follow-up still leaks.
      </Interrupt>
      <WorkRows />
      <ProofBand />
      <Interrupt>
        The intervention changes. The responsibility doesn&apos;t.
      </Interrupt>
      <CommercialTerritory />
      <Approach />
      <Contact />
    </>
  );
}
