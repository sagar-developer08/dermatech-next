import Image from "next/image";
import FrameComponent7 from "../components/frame-component7";
import Contact1 from "../components/contact1";
import Footer from "../components/footer";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <FrameComponent7 />
      <section className={styles.contactParent}>
        <Contact1 placeholderImage="/placeholder-image-14@2x.png" />
        <Image
          className={styles.mapIcon}
          loading="lazy"
          width={1440}
          height={500}
          alt=""
          src="/map.svg"
        />
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default Contact;
