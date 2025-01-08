import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./services2.module.css";
import { serverurl } from "../../base";

const Services2 = ({ className = "", concernDetails }) => {
  console.log("🚀 ~ Services2 ~ concernDetails:", concernDetails);

  return (
    <div className={[styles.services, className].join(" ")}>
      <div className={styles.heading}>
        <div className={styles.loremIpsumDolor}>
          {concernDetails?.category?.Name}
        </div>
        <h1 className={styles.mediumLengthHero}>{concernDetails?.Name}</h1>
      </div>
      <div className={styles.image}>
        <Image
          className={styles.placeholderImageIcon}
          loading="lazy"
          width={20000}
          height={500}
          alt=""
          src={
            concernDetails?.Banner_image?.url
              ? concernDetails?.Banner_image?.url
              : "/placeholder-image3@2x.png"
          }
          // src={
          //   concernDetails?.MainBanner?.url
          //     ? serverurl + concernDetails?.MainBanner?.url
          //     : '/placeholder-image3@2x.png"'
          // }
        />
      </div>
      <div className={styles.description}>
        <div className={styles.text}>
          {concernDetails?.content?.introduction}
        </div>
      </div>

      {/* First Service Content Section */}

      {concernDetails?.content?.sections?.map((section, i) => (
        <div className={styles.serviceContent}>
          {console.log("Even check", i % 2)}
          <div className="row gy-3">
            <div
              className={`col col-12 col-md-6 ${
                i % 2 === 0 ? "order-1" : "order-2"
              }`}
            >
              <Image
                className={styles.imgIcon}
                loading="lazy"
                width={800}
                height={300}
                alt=""
                src={
                  concernDetails?.[`section_img${i + 1}`]?.url
                    ? serverurl + concernDetails?.[`section_img${i + 1}`]?.url
                    : "/placeholder-image3@2x.png"
                }
              />
            </div>

            <div
              className={`col col-12 col-md-6 ${
                i % 2 === 0 ? "order-2" : "order-1"
              }`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={styles.loremLipsumParent}>
                <h2 className={styles.loremLipsum}>{section?.title}</h2>
                <div className={styles.text2}>{section?.body}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Services2.propTypes = {
  className: PropTypes.string,
  concern: PropTypes.shape({
    Name: PropTypes.string,
    content: PropTypes.shape({
      introduction: PropTypes.string,
    }),
  }).isRequired,
};

export default Services2;
