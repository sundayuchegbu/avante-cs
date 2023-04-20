import styles, { layout } from "../style";
import webimage from "../images/webimage.png";
const DevBanner = () => {
  return (
    <section className={`bg-lightBlue ${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse} relative `}>
        <img src={webimage} alt="webimage" className="block" />
        <div className="absolute top-0 bottom-0  left-[480px] right-[90px] h-24 bg-lightBlue"></div>
        <div className="absolute top-[390px] bottom-0  left-[480px] right-20 h-4 bg-lightBlue"></div>
        <div className="absolute top-[500px] bottom-0  right-[460px] left-[93px] h-18 bg-lightBlue"></div>
        <div className="absolute top-[250px] bottom-0  right-[460px] left-[93px] h-4 bg-lightBlue"></div>
        <div className="absolute top-[500px] bottom-0 left-[182px] right-[172px] mx-24 h-4bg-lightBlue"></div>
        <div className="absolute top-0 bottom-0 left-[279px] w-4 bg-lightBlue"></div>
        <div className="absolute top-0 bottom-0 left-[470px] w-4 bg-lightBlue"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} mb-4 `}>Web Development </h2>
        <div
          className={`${styles.paragraph} max-w-[470px] sm:p-auto mt-5 mb-6`}
        >
          <p className="text-dark">
            Avante is a software development company that specializes in
            e-commerce, mobile solutions, customer relationship management, and
            enterprise resource management. They have experience building custom
            solutions for various industries and use technologies such as
            Service-oriented architecture (SOA) to improve productivity.
          </p>
        </div>
        <button className="bg-secondary text-white flex flex-start font-bold py-4 px-24 rounded">
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default DevBanner;
