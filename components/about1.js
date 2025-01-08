import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./about1.module.css";

const About1 = ({
  className = "",
  aboutFlex,
  aboutAlignSelf,
  img,
  btnsWidth,
  discoverMore,
}) => {
  const aboutStyle = useMemo(() => {
    return {
      flex: aboutFlex,
      alignSelf: aboutAlignSelf,
    };
  }, [aboutFlex, aboutAlignSelf]);

  const btnsStyle = useMemo(() => {
    return {
      width: btnsWidth,
    };
  }, [btnsWidth]);

  return (
    <div className={[styles.about, className].join(" ")} style={aboutStyle}>
      <div className={styles.container}>
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={610}
          height={640}
          alt=""
          src={img}
        />
        <div className={styles.column}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.loremIpsumDolor}>
                Welcome to Our Clinic!
              </div>
              <h1 className={styles.mediumLengthHero}>
                Derma Tech Poly Clinic L.L.C
              </h1>
            </div>
            <div className={styles.loremIpsumDolor1}>
              Welcome to DERMA TECH POLY CLINIC L.L.C, your premier destination
              for comprehensive and cutting-edge aesthetic services in the heart
              of Dubai. At DERMA TECH POLY CLINIC, we are dedicated to help you
              achieve your beauty and wellness goals through a range of advanced
              and personalized treatments. With a commitment to excellence and a
              focus on delivering transformative results, we stand as a beacon
              of innovation and care in the field of aesthetic medicine.
            </div>
          </div>
          <div className={styles.btns} style={btnsStyle}>
            <div className={styles.btnDiscover}>
              <div className={styles.discoverMore}>{discoverMore}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About1.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  discoverMore: PropTypes.string,

  /** Style props */
  aboutFlex: PropTypes.string,
  aboutAlignSelf: PropTypes.string,
  btnsWidth: PropTypes.string,
};

export default About1;
