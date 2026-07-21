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
    { image: "/products/product1.png", title: "SLIDER-7 PCS" },
    { image: "/products/product2.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product3.png", title: "HURDLE CLIMBER" },
    { image: "/products/product4.png", title: "BEAM SET-6 PCS" },
    { image: "/products/product5.png", title: "4 STEP SLIDER" },
    { image: "/products/product6.png", title: "HEXAGON SET" },
    { image: "/products/product7.png", title: "SOFT ROCKER" },
    { image: "/products/product8.png", title: "ROUND SET-6 PCS" },
    { image: "/products/product9.png", title: "TUBE SIDE SET" },
    { image: "/products/product10.png", title: "CLIMBER SET" },
    { image: "/products/product11.png", title: "TODDLER SET" },
    { image: "/products/product12.png", title: "ROLL SET-6 PCS" },
    { image: "/products/product13.png", title: "SLIDER-4 PCS" },
    { image: "/products/product14.png", title: "BALL POOL SET" },
    { image: "/products/product15.png", title: "FOAM HUT-14 PCS" },
    { image: "/products/product16.png", title: "NAVY SHIP PLAY SET" },
    { image: "/products/product17.png", title: "BALL POOL COMBO" },
    { image: "/products/product18.png", title: "CURVE SET-9 PCS" },
    { image: "/products/product19.png", title: "CENTER SET" },
    { image: "/products/product20.png", title: "SOFT CRESCENT" },
    { image: "/products/product21.png", title: "HOUSE SET" },
    { image: "/products/product22.png", title: "STEP SLIDE SET-5 PCS" },
    { image: "/products/product23.png", title: "SOFT COROUSEL" },
    { image: "/products/product24.png", title: "MULTI CLIMBER" },
    { image: "/products/product25.png", title: "SOFT COROUSEL" },
    { image: "/products/product26.png", title: "PLAYAREA 1" },
    { image: "/products/product27.png", title: "PLAYAREA 2" },
    { image: "/products/product28.png", title: "PLAYAREA 3" },
    { image: "/products/product29.png", title: "PLAYAREA 4" },
    { image: "/products/product30.png", title: "PLAYAREA 5" },
    { image: "/products/product31.png", title: "PLAYAREA 6" },
    { image: "/products/product32.png", title: "PLAYAREA 7" },
    { image: "/products/product33.png", title: "PLAYAREA 8" },
    { image: "/products/product34.png", title: "PLAYAREA 9" },
    { image: "/products/product35.png", title: "SLIDER-7 PCS" },
    { image: "/products/product36.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product37.png", title: "SLIDER-7 PCS" },
    { image: "/products/product38.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product39.png", title: "SLIDER-7 PCS" },
    { image: "/products/product40.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product41.png", title: "SLIDER-7 PCS" },
    { image: "/products/product42.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product43.png", title: "SLIDER-7 PCS" },
    { image: "/products/product44.png", title: "SLIDER-7 PCS" },
    { image: "/products/product45.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product46.png", title: "SLIDER-7 PCS" },
    { image: "/products/product47.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product48.png", title: "SLIDER-7 PCS" },
    { image: "/products/product49.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product50.png", title: "SLIDER-7 PCS" },
    { image: "/products/product51.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product52.png", title: "SLIDER-7 PCS" },
    { image: "/products/product53.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product54.png", title: "SLIDER-7 PCS" },
    { image: "/products/product55.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product56.png", title: "SLIDER-7 PCS" },
    { image: "/products/product57.png", title: "ROLL SET-7 PCS" },
    { image: "/products/product58.png", title: "TUNNEL SET" },
    { image: "/products/product59.png", title: "PLAYAREA 10" },
];

export default function IndoorPlayAreaSetupPage() {
  return (
    <>
      <PageBanner
        title="Indoor Play Area Setup in Delhi"
        bgImage="/products/step-slide-set-5-pcs.png"
      />

      <ProductGrid products={products} />

      <IndoorPlayAreaInfoSection />
    </>
  );
}