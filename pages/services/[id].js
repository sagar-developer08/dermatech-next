import { useCallback } from "react";
import Image from "next/image";
import FrameComponent1 from "../../components/frame-component1";
import ServicesDescriptionItems from "../../components/ServicesDetails/index";
import Contact1 from "../../components/contact1";
import AccordionItem from "../../components/accordion-item";
import Footer from "../../components/footer";
import ServicesDescriptionItems1 from "../../components/ServicesDetails1";
import FaqsListing from "../../components/FaqsListing/index";
import styles from "./services-details.module.css";

const ServicesDetails = ({ serviceData }) => {
  console.log("🚀 ~ ServicesDetails ~ serviceData:", serviceData);
  const onAccordionHeaderClick = useCallback((event) => {
    // Accordion toggle logic
  }, []);

  return (
    <div className={styles.servicesDetails}>
      <FrameComponent1 />
      <section className={styles.banner}>
        <div className={styles.loremIpsumDolor}>
          HOME - {serviceData?.category?.Name || "Category"}
        </div>
        <h1 className={styles.mediumLengthHero}>
          {serviceData?.heading || "Service Title"}
        </h1>
      </section>
      <div className={styles.services}>
        <div className={styles.heading}>
          <div className={styles.loremIpsumDolor1}>
            {serviceData?.category?.Name || "Category"}
          </div>
          <h1 className={styles.mediumLengthHero1}>
            {serviceData?.heading || "Service Title"}
          </h1>
        </div>
        <div className={styles.image}>
          <Image
            className={styles.placeholderImageIcon}
            loading="lazy"
            width={1280}
            height={500}
            alt={serviceData?.heading || "Service Image"}
            src={serviceData?.Banner_image?.url || "/placeholder-image3@2x.png"}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.text}>
            {serviceData?.meta_description || "Service description goes here."}
          </div>
        </div>

        {/* Map through sections */}
        {serviceData?.content?.sections?.length > 0 && (
          <>
            {serviceData?.content?.sections.map((section, index) =>
              index % 2 === 0 ? (
                // Render even index (0, 2, 4, ...) with ServicesDescriptionItems
                <ServicesDescriptionItems
                  key={index}
                  img={section.image || "/img2@2x.png"}
                  title={section.title || "Section Title"}
                  description={section.body || "Section body goes here."}
                />
              ) : (
                // Render odd index (1, 3, 5, ...) with ServicesDescriptionItems1
                <ServicesDescriptionItems1
                  key={index}
                  img={section.image || "/img2@2x.png"}
                  title={section.title || "Section Title"}
                  description={section.body || "Section body goes here."}
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
        <FaqsListing faqsList={serviceData?.faqs?.faq} />
        {/* <div style={{ flex: "100%", width: "100%" }}>
            <AccordionList faqsList={[]}/>
          </div> */}
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
      `https://grateful-authority-34f01c9d0d.strapiapp.com/api/services/${id}/?populate=*`
    );
    const data = await res.json();
    console.log(data, "--data");
    return {
      props: {
        serviceData: data?.data || null,
      },
    };
  } catch (error) {
    console.error("Error fetching service data:", error);
    return {
      props: {
        serviceData: null,
      },
    };
  }
};

export default ServicesDetails;
