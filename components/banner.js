import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./banner.module.css";

const Banner = ({ className = "" }) => {
  return (
    <section className={[styles.banner, className].join(" ")}>
      <div className={styles.bannerContent}>
        <div className={styles.text}>
          <div className={styles.content}>
            <div className={styles.text1}>
              <div className={styles.loremIpsumDolor}>WEIGHT LOSS</div>
              <h1
                className={styles.mediumLengthHero}
              >{`Fat Freezing & Other Treatments`}</h1>
            </div>
            <div className={styles.filter}>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </div>
            </div>
            <div className={styles.btns}>
              <div className={styles.btnBook}>
                <div className={styles.bookAppointment}>Book Appointment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className={styles.wavesIcon}
        loading="lazy"
        width={2100}
        height={144}
        alt=""
        src="/waves.svg"
      />
    </section>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
