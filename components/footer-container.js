import Image from "next/image";
import Nav from "./nav";
import NavBarMobile from "./navBarMobile";
import PropTypes from "prop-types";
import styles from "./footer-container.module.css";

const FooterContainer = ({ className = "" }) => {
  return (
    <>
      <section className={[styles.footerContainer, className].join(" ")}>
        <div className={styles.footerContent}>
          <div className={styles.content}>
            <div className={styles.connect}>
              <div className={styles.mail}>
                <Image
                  className={styles.basilclockSolidIcon}
                  width={18}
                  height={18}
                  alt=""
                  src="/basilclocksolid.svg"
                />
                <div className={styles.friWed}>
                  Fri - Wed  12:00 pm to 09:00 pm | Thu – Closed
                </div>
              </div>
              <div className={styles.mail1}>
                <Image
                  className={styles.basilclockSolidIcon}
                  width={18}
                  height={18}
                  alt=""
                  src="/materialsymbolscall.svg"
                />
                <div className={styles.div}>+971 54 2790 987</div>
              </div>
              <div className={styles.mail1}>
                <Image
                  className={styles.materialSymbolsmailIcon}
                  width={18}
                  height={18}
                  alt=""
                  src="/materialsymbolsmail@2x.png"
                />
                <div className={styles.supportgmailcom}>support@gmail.com</div>
              </div>
            </div>
            <div className={styles.social}>
              <Image
                className={styles.symbolsvgIcon}
                width={23}
                height={26}
                alt=""
                src="/symbolsvg.svg"
              />
              <Image
                className={styles.symbolsvgIcon1}
                width={26}
                height={18}
                alt=""
                src="/symbolsvg-1.svg"
              />
              <div className={styles.fb}>
                <Image
                  className={styles.path14Icon}
                  width={18}
                  height={18}
                  alt=""
                  src="/path14.svg"
                />
              </div>
              <div className={styles.fb}>
                <Image
                  className={styles.path14Icon}
                  width={18}
                  height={18}
                  alt=""
                  src="/path-2520.svg"
                />
              </div>
              <div className={styles.x}>
                <Image
                  className={styles.iconPath}
                  width={19}
                  height={16}
                  alt=""
                  src="/icon-path.svg"
                />
              </div>
              <div className={styles.fb}>
                <Image
                  className={styles.path14Icon}
                  width={18}
                  height={18}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <Nav navWidth="100%" logo1="/logo-1@2x.png" />
      </section>
      <NavBarMobile logo1="/logo-1@2x.png" />
    </>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
