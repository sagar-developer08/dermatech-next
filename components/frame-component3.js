import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.promotionContainerWrapper, className].join(" ")}>
      <div className={styles.promotionContainer}>
        <div className={styles.promotionTitle}>
          <h1 className={styles.specialPromotion}>Special Promotion</h1>
        </div>
        <div className={styles.content}>
          <Image
            className={styles.placeholderImageIcon}
            loading="lazy"
            width={570}
            height={458}
            alt=""
            src="/placeholder-image@2x.png"
          />
          <div className={styles.text}>
            <div className={styles.main}>
              <div className={styles.aed}>1800 Aed</div>
              <div className={styles.yoremIpsumDolor}>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus.
              </div>
            </div>
            <div className={styles.benefits}>
              <div className={styles.benefits1}>Benefits:</div>
              <div className={styles.yoremIpsumDolor}>
                <ul className={styles.yoremIpsumDolorSitAmetCo}>
                  <li className={styles.yoremIpsumDolor1}>
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </li>
                  <li className={styles.yoremIpsumDolor1}>
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </li>
                  <li>
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.btnBook}>
              <div className={styles.payNow}>Pay Now</div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.promotionDots}>
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
              loading="lazy"
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
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
