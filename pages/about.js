import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import About1 from "../components/about1";
import ExploreItems from "../components/explore-items";
import Content from "../components/content";
import Component1 from "../components/component1";
import FrameComponent6 from "../components/frame-component6";
import OwnerContainer from "../components/owner-container";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <FrameComponent1 />
      <section className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - ABOUT</div>
        <h1 className={styles.mediumLengthHero}>About</h1>
      </section>
      <About1
        aboutFlex="unset"
        aboutAlignSelf="stretch"
        img="/img1.svg"
        btnsWidth="196px"
        discoverMore="Book Appointment"
      />
      <section className={styles.others}>
        <div className={styles.slider}>
          <ExploreItems explore="/explore1.svg" perfumes="Qualified Doctor" />
          <ExploreItems
            explore="/explore-11.svg"
            perfumes="Certified Products"
          />
          <ExploreItems explore="/explore-21.svg" perfumes="Modern Equipment" />
          <ExploreItems explore="/explore-31.svg" perfumes="Peoples Place" />
        </div>
      </section>
      <section className={styles.chooseWrapper}>
        <div className={styles.choose}>
          <Image
            className={styles.chooseShapeIcon}
            loading="lazy"
            width={550}
            height={650}
            alt=""
            src="/rectangle-1@2x.png"
          />
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.loremIpsumDolor1}>WHY CHOOSE US</div>
              <h1 className={styles.mediumLengthHeroContainer}>
                <p className={styles.chooseTheBest}>Choose The Best For Your</p>
                <p className={styles.chooseTheBest}>Health</p>
              </h1>
            </div>
            <div className={styles.content1}>
              <div className={styles.row}>
                <Content
                  doctor1="/doctor-11.svg"
                  mediumLengthSectionHeading="Professional Staff"
                />
                <Content
                  doctor1="/firstaidkit-11.svg"
                  mediumLengthSectionHeading="Emergency Case"
                />
              </div>
              <div className={styles.row}>
                <Content
                  doctor1="/onlineappointment-1.svg"
                  mediumLengthSectionHeading="Online Appointment"
                />
                <Content
                  doctor1="/support-11.svg"
                  mediumLengthSectionHeading="24/7 Services"
                />
              </div>
            </div>
          </div>
          <div className={styles.slider1}>
            <Component1 perfumes="75+" perfumes1="Expert Doctors" />
            <Component1 perfumes="7k" perfumes1="Happy Patients" />
            <Component1 perfumes="850" perfumes1="Modern Rooms" />
            <Component1 perfumes="15" perfumes1="Awards Win" />
          </div>
        </div>
      </section>
      <FrameComponent6 />
      <Image
        className={styles.shape211Icon}
        width={655}
        height={775}
        alt=""
        src="/shape21-1@2x.png"
      />
      <section className={styles.ownerContainerParent}>
        <OwnerContainer />
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={630}
          height={445}
          alt=""
          src="/img-2@2x.png"
        />
      </section>
    </div>
  );
};

export default About;
