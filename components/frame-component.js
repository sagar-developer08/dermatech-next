import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "", placeholderImage }) => {
  return (
    <section
      className={[styles.testimonialContainerWrapper, className].join(" ")}
    >
      <div className={styles.testimonialContainer}>
        <div className={styles.content}>
          <Image
            className={styles.placeholderImageIcon}
            width={616}
            height={640}
            alt=""
            src={placeholderImage}
          />
          <div className={styles.content1}>
            <div className={styles.stars}>
              <Image
                className={styles.vectorIcon}
                width={20}
                height={19}
                alt=""
                src="/vector-2.svg"
              />
              <Image
                className={styles.vectorIcon}
                width={20}
                height={19}
                alt=""
                src="/vector-2.svg"
              />
              <Image
                className={styles.vectorIcon}
                width={20}
                height={19}
                alt=""
                src="/vector-2.svg"
              />
              <Image
                className={styles.vectorIcon}
                width={20}
                height={19}
                alt=""
                src="/vector-2.svg"
              />
              <Image
                className={styles.vectorIcon}
                width={20}
                height={19}
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <blockquote className={styles.quote}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat."
            </blockquote>
            <div className={styles.avatar}>
              <div className={styles.avatarContent}>
                <div className={styles.authorName}>Robert Fox</div>
                <div className={styles.authorPosition}>Dog Trainer</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content2}>
          <div className={styles.testimonialDots}>
            <div className={styles.sliderDots}>
              <div className={styles.dot} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
            </div>
          </div>
          <div className={styles.arrowsParent}>
            <Image
              className={styles.arrowsIcon}
              width={48}
              height={48}
              alt=""
              src="/arrows@2x.png"
            />
            <div className={styles.arrows}>
              <Image
                className={styles.fearrowUpIcon}
                width={24}
                height={24}
                alt=""
                src="/fearrowup@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
};

export default FrameComponent;
