import { useCallback } from "react";
import Image from "next/image";
import FrameComponent1 from "../../components/frame-component1";
import SpecialDescriptuonItems from "../../components/SpecialDetails/index";
import Contact1 from "../../components/contact1";
import AccordionItem from "../../components/accordion-item";
import Footer from "../../components/footer";
import styles from "./special-detail.module.css";
import SpecialDescriptuonItems1 from "../../components/SpecialDetails1/index";
import FaqsListing from "../../components/FaqsListing/index";

const ServicesDetails = ({ specialData }) => {
  console.log("🚀 ~ ServicesDetails ~ specialData:", specialData);
  const onAccordionHeaderClick = useCallback((event) => {
    // Accordion toggle logic
  }, []);

  return (
    <div className={styles.servicesDetails}>
      <FrameComponent1 />
      <section className={styles.banner}>
        <div className={styles.loremIpsumDolor}>
          HOME - {specialData?.category?.Name || "Category"}
        </div>
        <h1 className={styles.mediumLengthHero}>
          {specialData?.Name || "Special Title"}
        </h1>
      </section>
      <div className={styles.services}>
        <div className={styles.Name}>
          <div className={styles.loremIpsumDolor1}>
            {specialData?.category?.Name || "Category"}
          </div>
          <h1 className={styles.mediumLengthHero1}>
            {specialData?.Name || "Special Title"}
          </h1>
        </div>
        <div className={styles.image}>
          <Image
            className={styles.placeholderImageIcon}
            loading="lazy"
            width={1280}
            height={500}
            alt={specialData?.Name || "Special Image"}
            src={specialData?.Banner_image?.url || "/placeholder-image3@2x.png"}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.text}>
            {specialData?.meta_description || "Special description goes here."}
          </div>
        </div>

        {/* Map through sections */}
        {specialData?.section?.sections?.length > 0 && (
          <>
            {specialData?.section?.sections.map((special, index) =>
              index % 2 === 0 ? (
                // Render even index (0, 2, 4, ...) with SpecialDescriptionItems
                <SpecialDescriptuonItems
                  key={index}
                  img={"/img2@2x.png"} // Dynamically map each image
                  image2={special?.section3Image?.formats?.large?.url}
                  title={special?.title || "special Title"}
                  description={special?.body || "special body goes here."}
                />
              ) : (
                // Render odd index (1, 3, 5, ...) with SpecialDescriptionItems1
                <SpecialDescriptuonItems1
                  key={index}
                  img={"/img2@2x.png"} // Dynamically map each image
                  image={special?.sectio3Image?.formats?.large?.url}
                  title={special?.title || "special Title"}
                  description={special?.body || "special body goes here."}
                />
              )
            )}
          </>
        )}
      </div>
      <Contact1 placeholderImage="/placeholder-image-14@2x.png" />
      <section className={styles.faq}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>SUPPORT</div>
          <div className={styles.content}>
            <h1 className={styles.heading}>Frequently Asked Questions</h1>
          </div>
        </div>
        <FaqsListing faqsList={specialData?.faqs?.faq} />
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  try {
    const res = await fetch(
      `https://grateful-authority-34f01c9d0d.strapiapp.com/api/Special-Promotions/${id}/?populate=*`
    );
    const data = await res.json();
    console.log(data, "--data");
    return {
      props: {
        specialData: data?.data || null,
      },
    };
  } catch (error) {
    console.error("Error fetching special data:", error);
    return {
      props: {
        specialData: null,
      },
    };
  }
};

export default ServicesDetails;
