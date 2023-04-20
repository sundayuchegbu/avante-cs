import styles, { layout } from "../style";
import social from "../images/social.png";

const SocialMedia = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={social} alt="social" className="p-6" />
        <div className="absolute bottom-0 top-0 left-2/3 right-0 w-4 bg-background"></div>
        <div className="absolute bottom-0 top-0 left-1/3 right-0 w-4 bg-background"></div>
        <div className="absolute bottom-0 top-[450px] right-1/3 left-[250px] h-4 bg-background"></div>
        <div className="absolute bottom-0 top-[200px] right-[480px] left-[80px] h-4 bg-background"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} mb-4 p-6`}>
          Social Media <br className="sm:block hidden" />
          Management <br className="sm:block hidden" />{" "}
          <span className="text-primary">(Falcon.io)</span>
        </h2>
        <div
          className={`${styles.paragraph3} max-w-[470px] sm:p-auto mt-5 mb-6 p-6`}
        >
          Falcon is a Unified Social Media Management Platform which allows
          marketing t eams manage all their social channels, contact and
          customer data with greater ease and impact. You will love the intuit
          interface, backed by our dedication to above and beyond support.
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
