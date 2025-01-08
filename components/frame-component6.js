import Image from "next/image";
import Card4 from "./card4";
import PropTypes from "prop-types";
import styles from "./frame-component6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.visionContainerParent, className].join(" ")}>
      <div className={styles.visionContainer}>
        <div className={styles.visionContent}>
          <Image
            className={styles.imgIcon}
            loading="lazy"
            width={620}
            height={445}
            alt=""
            src="/img-1@2x.png"
          />
          <div className={styles.visionDetails}>
            <div className={styles.ourVisionParent}>
              <h1 className={styles.ourVision}>Our Vision</h1>
              <div className={styles.perfumes}>
                Deep down we believe everyone deserves to feel their best. We
                envision a world where beauty is not all about appearance. But
                it’s a mixture of health, self-love, confidence, and embracing a
                positive and empowered lifestyle.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.sectionTitle}>
          <div className={styles.loremIpsumDolor}>TEAM</div>
          <div className={styles.content}>
            <h1 className={styles.heading}>Meet Our People</h1>
            <div
              className={styles.loremIpsumDolor1}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.row}>
            <div className={styles.content2}>
              <Card4
                placeholderImage="/placeholder-image2@2x.png"
                name1="Black Marvin"
                jobTitle="Medical Assistant"
              />
              <Card4
                placeholderImage="/placeholder-image-15@2x.png"
                name1="Eleanor Pena"
                jobTitle="Doctor"
              />
              <Card4
                placeholderImage="/placeholder-image-2@2x.png"
                name1="Arlene Maccy"
                jobTitle="Nursing Assistant"
              />
              <Card4
                placeholderImage="/placeholder-image-3@2x.png"
                name1="Jenny Wilson"
                jobTitle="Senior Doctor"
              />
            </div>
            <div className={styles.content3}>
              <div className={styles.sliderDots}>
                <div className={styles.dot} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
              </div>
              <div className={styles.sliderButtons}>
                <Image
                  className={styles.arrowsIcon}
                  width={48}
                  height={48}
                  alt=""
                />
                <div className={styles.arrows}>
                  <Image
                    className={styles.fearrowUpIcon}
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
