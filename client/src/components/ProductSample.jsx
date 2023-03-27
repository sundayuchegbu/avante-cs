import React from "react";
import styles, { layout } from "../style";
import productimage1 from "../images/productimage1.png";
import productimage2 from "../images/productimage2.png";
import productimage3 from "../images/productimage3.png";
import productimage4 from "../images/productimage4.png";

const ProductSample = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading5}>
        OUR <span className="text-primary">PRODUCT</span>{" "}
      </h2>
      <p className={`${styles.paragraph3} max-w-[470px] mt-5 mb-5 `}>
        Lorem ipsum dolor sit amet consectetur. Proin vel orci temporvelit
        mattis tempor at nisiLorem ipsum dolor sit amet consectetur. Proin vel
        orci tempor velit mattis tempor at nisi.Lorem ipsum dolor sit amet
        consectetur. Proin vel orci temporvelit mattis tempor at nisiLorem ipsum
        dolor sit amet consectetur. Proin vel orci tempor velit mattis tempor at
        nisi.
      </p>
      <img
        src={productimage1}
        alt="productimage1"
        className="[w-400px] h-[400px] lg:mx-56 mb-4"
      />
    </div>
    <div className={`${layout.sectionInfo} bg-productimage4`}>
      <img src={productimage2} alt="product image" className="mb-4" />
      <img src={productimage3} alt="product image" />
    </div>
  </section>
);

export default ProductSample;
