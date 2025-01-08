import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./content.module.css";

const Content = ({ className = "", doctor1, mediumLengthSectionHeading }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <Image
        className={styles.doctor1Icon}
        loading="lazy"
        width={80}
        height={80}
        alt=""
        src={doctor1}
      />
      <div className={styles.content1}>
        <div className={styles.mediumLengthSection}>
          {mediumLengthSectionHeading}
        </div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  doctor1: PropTypes.string.isRequired,
  mediumLengthSectionHeading: PropTypes.string,
};

export default Content;
