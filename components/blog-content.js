import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./blog-content.module.css";
import { serverurl } from "../base";

const BlogContent = ({ className = "", image1, image2 }) => {
  let img = "/img3@2x.png";
  return (
    <section className={[styles.blogContent, className].join(" ")}>
      <div className={styles.images}>
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={620}
          height={380}
          alt=""
          src={image1 ? serverurl + image1 : img}
        />
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={620}
          height={380}
          alt=""
          src={image2 ? serverurl + image2 : img}
        />
      </div>
    </section>
  );
};

BlogContent.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
};

export default BlogContent;
