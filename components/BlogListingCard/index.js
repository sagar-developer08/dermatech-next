import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card5.module.css";
import moment from "moment";
import { serverurl } from "../../base";
import { useRouter } from "next/router";

const Card5 = ({ className = "", mainBanner, heading, text, date, id }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  let placeholderImage = "/placeholder-image-11@2x.png";
  return (
    <div
      className={[styles.card, className].join(" ")}
      style={{ cursor: "pointer" }}
      onClick={() => handleNavigation(`/blog-details/${id}`)}
    >
      <Image
        className={styles.placeholderImageIcon}
        loading="lazy"
        width={500}
        height={260}
        alt=""
        src={mainBanner ? serverurl + mainBanner : placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.textParent}>
          <div className={styles.text}>
            {moment(date).format("DD MMMM YYYY")}
          </div>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.text1}>{text}</div>
      </div>
    </div>
  );
};

Card5.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default Card5;
