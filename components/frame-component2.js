import ExploreItems from "./explore-items";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.othersWrapper, className].join(" ")}>
      <div className={styles.others}>
        <div className={styles.slider}>
          <ExploreItems explore="/explore.svg" perfumes="Qualified Doctor" />
          <ExploreItems
            explore="/explore-1.svg"
            perfumes="Certified Products"
          />
          <ExploreItems explore="/explore-2.svg" perfumes="Modern Equipment" />
          <ExploreItems explore="/explore-3.svg" perfumes="Peoples Place" />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
