import FrameComponent1 from "../components/frame-component1";
import Image1 from "../components/image1";
import BlogContent from "../components/blog-content";
import Comment1 from "../components/comment1";
import Footer from "../components/footer";
import styles from "./blog-details.module.css";

const BlogDetails = () => {
  return (
    <div className={styles.blogDetails}>
      <FrameComponent1 />
      <div className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - BLOG</div>
        <h1 className={styles.mediumLengthHero}>Blog</h1>
      </div>
      <main className={styles.blog}>
        <Image1 />
        <section className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor1}>ADMIN</div>
              <div className={styles.loremIpsumDolor2}>15 JAN 2024</div>
            </div>
            <h1 className={styles.mediumLengthHero1}>{`Rejuvenate & Glow`}</h1>
          </div>
          <div className={styles.description}>
            <div className={styles.text}>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </div>
            <div className={styles.text}>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </div>
          </div>
        </section>
        <BlogContent img="/img3@2x.png" img1="/img3@2x.png" />
        <BlogContent img="/img3@2x.png" img1="/img3@2x.png" />
        <Comment1 />
      </main>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default BlogDetails;
