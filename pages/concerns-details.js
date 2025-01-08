import { useCallback } from "react";
import FrameComponent1 from "../components/frame-component1";
import Services2 from "../components/ConcernDetailsSection";
import Contact1 from "../components/contact1";
import AccordionItem from "../components/accordion-item";
import Footer from "../components/footer";
import styles from "./concerns-details.module.css";

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch(
      `https://grateful-authority-34f01c9d0d.strapiapp.com/api/Concerns/${id}?populate=*`
    );
    const concern = await response.json();
    console.log(concern, "--concern");
    if (!concern || !concern.data) {
      return {
        notFound: true, // If no concern is found, show a 404 page
      };
    }

    return {
      props: { concern: concern.data }, // Pass only the relevant concern data
    };
  } catch (error) {
    console.error("Error fetching concern data:", error);
    return {
      notFound: true, // Fallback to 404 if an error occurs
    };
  }
}

const ConcernsDetails = ({ concern }) => {
  console.log(concern, "--concern");
  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openStyleObject = {
      "grid-template-rows": "1fr",
    };
    const closeStyleObject = {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "margin-bottom": "0px",
      "margin-top": "0px",
      "grid-template-rows": "0fr",
    };

    function applyStyles(element, styleObject) {
      Object.assign(element.style, styleObject);
    }

    function removeStyles(element, styleObject) {
      Object.keys(styleObject).forEach((key) => {
        element?.style.removeProperty(key);
      });
    }

    if (isOpen) {
      removeStyles(accContent, openStyleObject);
      applyStyles(accContent, closeStyleObject);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        removeStyles(siblingAccContent, closeStyleObject);
        applyStyles(siblingAccContent, openStyleObject);
      }, 1);
    }
  }, []);

  return (
    <div className={styles.concernsDetails}>
      <FrameComponent1 />
      <section className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - FACIAL CONCERNS</div>
        <h1 className={styles.mediumLengthHero}>Hollow Checks</h1>
      </section>
      <Services2 />
      <Contact1 placeholderImage="/placeholder-image-14@2x.png" />
      <section className={styles.faq}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>SUPPORT</div>
          <div className={styles.content}>
            <h1 className={styles.heading}>Frequently Asked Questions</h1>
            <div
              className={styles.text}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          </div>
        </div>
        <div className={styles.accordion} data-acc-group>
          <div
            className={styles.div}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <AccordionItem />
            <AccordionItem />
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <AccordionItem />
              <AccordionItem />
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className={styles.div}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <AccordionItem />
            <AccordionItem />
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <AccordionItem />
              <AccordionItem />
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className={styles.div}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <AccordionItem />
            <AccordionItem />
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.open}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <AccordionItem />
              <AccordionItem />
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default ConcernsDetails;
