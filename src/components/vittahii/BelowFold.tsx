import { BrandStory } from "./BrandStory";
import { Contact } from "./Contact";
import { Founder } from "./Founder";
import { Ghee } from "./Ghee";
import { Legacy } from "./Legacy";
import { ProductRange } from "./ProductRange";
import { Process } from "./Process";
import { Quality } from "./Quality";
import { Timeline } from "./Timeline";
import { Why } from "./Why";
import { Footer } from "./Footer";

export function BelowFold() {
  return (
    <>
      <Legacy />
      <Timeline />
      <Ghee />
      <Why />
      <Process />
      <Quality />
      <BrandStory />
      <Founder />
      <ProductRange />
      <Contact />
      <Footer />
    </>
  );
}
