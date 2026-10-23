import IndoorPlayAreaInfoSection from "../components/IndoorPlayAreaInfoSection";
import PageBanner from "../components/PageBanner";
import ProductGrid from "../components/ProductGrid";

export const metadata = {
  title: "Best Indoor Play Area Setup in Delhi - Maskeen Toys",
  description:
    "Maskeen Toys offers premium Indoor Play Area Setup in Delhi with safe, durable, and customized designs for schools, malls, cafés, and homes. Contact us now!",
  alternates: {
    canonical: "https://www.playareamanufacturer.com/indoor-play-area-setup-in-delhi",
  },
};

const products = [
    { image: "/products/product1.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product2.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product3.webp", title: "HURDLE CLIMBER" },
    { image: "/products/product4.webp", title: "BEAM SET-6 PCS" },
    { image: "/products/product5.webp", title: "4 STEP SLIDER" },
    { image: "/products/product6.webp", title: "HEXAGON SET" },
    { image: "/products/product7.webp", title: "SOFT ROCKER" },
    { image: "/products/product8.webp", title: "ROUND SET-6 PCS" },
    { image: "/products/product9.webp", title: "TUBE SIDE SET" },
    { image: "/products/product10.webp", title: "CLIMBER SET" },
    { image: "/products/product11.webp", title: "TODDLER SET" },
    { image: "/products/product12.webp", title: "ROLL SET-6 PCS" },
    { image: "/products/product13.webp", title: "SLIDER-4 PCS" },
    { image: "/products/product14.webp", title: "BALL POOL SET" },
    { image: "/products/product15.webp", title: "FOAM HUT-14 PCS" },
    { image: "/products/product16.webp", title: "NAVY SHIP PLAY SET" },
    { image: "/products/product17.webp", title: "BALL POOL COMBO" },
    { image: "/products/product18.webp", title: "CURVE SET-9 PCS" },
    { image: "/products/product19.webp", title: "CENTER SET" },
    { image: "/products/product20.webp", title: "SOFT CRESCENT" },
    { image: "/products/product21.webp", title: "HOUSE SET" },
    { image: "/products/product22.webp", title: "STEP SLIDE SET-5 PCS" },
    { image: "/products/product23.webp", title: "SOFT COROUSEL" },
    { image: "/products/product24.webp", title: "MULTI CLIMBER" },
    { image: "/products/product25.webp", title: "SOFT COROUSEL" },
    { image: "/products/product26.webp", title: "PLAYAREA 1" },
    { image: "/products/product27.webp", title: "PLAYAREA 2" },
    { image: "/products/product28.webp", title: "PLAYAREA 3" },
    { image: "/products/product29.webp", title: "PLAYAREA 4" },
    { image: "/products/product30.webp", title: "PLAYAREA 5" },
    { image: "/products/product31.webp", title: "PLAYAREA 6" },
    { image: "/products/product32.webp", title: "PLAYAREA 7" },
    { image: "/products/product33.webp", title: "PLAYAREA 8" },
    { image: "/products/product34.webp", title: "PLAYAREA 9" },
    { image: "/products/product35.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product36.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product37.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product38.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product39.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product40.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product41.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product42.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product43.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product44.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product45.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product46.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product47.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product48.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product49.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product50.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product51.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product52.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product53.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product54.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product55.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product56.webp", title: "SLIDER-7 PCS" },
    { image: "/products/product57.webp", title: "ROLL SET-7 PCS" },
    { image: "/products/product58.webp", title: "TUNNEL SET" },
    { image: "/products/product59.webp", title: "PLAYAREA 10" },
];

export default function IndoorPlayAreaSetupPage() {
  return (
    <>
      <PageBanner
        title="Indoor Play Area Setup in Delhi"
        bgImage="/products/step-slide-set-5-pcs.webp"
      />

      <ProductGrid products={products} />

      <IndoorPlayAreaInfoSection />
    </>
  );
}