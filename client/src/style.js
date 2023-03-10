const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-Inter font-semibold xs:text-[50px] mt-[20px] text-[px] text-white xs:leading-[60.8px] leading-[66.8px] w-full",
  heading3:
    "font-Inter font-semibold xs:text-[40px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full",
  heading4:
    "font-Inter font-semibold xs:text-[30px] mt-[20px] text-[28px] text-black2 xs:leading-[60.8px] leading-[66.8px] w-full",
  heading5:
    "font-Inter font-semibold xs:text-[20px] mt-[20px] text-[16px] text-black2 xs:leading-[60.8px] leading-[66.8px] w-full",
  paragraph:
    "font-Inter font-normal text-dimWhite text-[18px] leading-[30.8px]",
  paragraph2:
    "font-Inter font-normal text-dimWhite text-[14px] leading-[30.8px]",
  paragraph3: "font-Inter font-normal text-black2 text-[14px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
