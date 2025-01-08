import { useCallback } from "react";
import Image from "next/image";
import FrameComponent from "./frame-component";
import AccordionItem from "./accordion-item";
import Footer from "./footer";
import PropTypes from "prop-types";
import styles from "./owner-container.module.css";
import FaqsList from "./FaqsListing";

const OwnerContainer = ({ className = "" }) => {
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
    <div className={[styles.ownerContainer, className].join(" ")}>
      <div className={styles.ownerContent}>
        <div className={styles.ownerTitleWrapper}>
          <div className={styles.ownerTitle}>
            <h1 className={styles.meetTheOwner}>Meet The Owner</h1>
            <div className={styles.perfumes}>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </div>
          </div>
        </div>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.container}>
              <h3 className={styles.heading}>Our Certifications</h3>
              <div className={styles.content}>
                <Image
                  className={styles.logosvgIcon}
                  loading="lazy"
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
                <Image
                  className={styles.logosvgIcon}
                  loading="lazy"
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
                <Image
                  className={styles.logosvgIcon}
                  loading="lazy"
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
                <Image
                  className={styles.logosvgIcon}
                  loading="lazy"
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
                <Image
                  className={styles.logosvgIcon}
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
              </div>
            </div>
          </div>
          <FrameComponent placeholderImage="/placeholder-image-7@2x.png" />
        </div>
        <div className={styles.faqParent}>
          {/* <div className={styles.faq}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>SUPPORT</div>
              <div className={styles.content1}>
                <h1 className={styles.meetTheOwner}>
                  Frequently Asked Questions
                </h1>
                <div
                  className={styles.text}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div> */}
          {/* <FaqsList faqsList={[, 2, 3, 4, 5, 6, 7, 8]} itt={"abboutDDkk"} /> */}
          {/* </div> */}
          {/* </div> */}
          <Footer
            maskGroup="/mask-group@2x.png"
            symbolsvg="/symbolsvg-22.svg"
            symbolsvg1="/symbolsvg-32.svg"
          />
        </div>
      </div>
    </div>
  );
};

OwnerContainer.propTypes = {
  className: PropTypes.string,
};

export default OwnerContainer;
