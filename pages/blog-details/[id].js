import FrameComponent1 from "../../components/frame-component1";
import Image1 from "../../components/image1";
import BlogContent from "../../components/blog-content";
import Comment1 from "../../components/comment1";
import Footer from "../../components/footer";
import styles from "./blog-details.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import FooterContainer from "../../components/footer-container";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Access the "id" from the route

  const [blogDetails, setBlogDetails] = useState({});
  console.log("🚀 ~ BlogDetails ~ blogDetails:", blogDetails);

  async function getBlogDetails() {
    try {
      const response = await fetch(
        `https://grateful-authority-34f01c9d0d.strapiapp.com/api/blogs?filters[id][$eq]=${id}&&populate=*`
      );
      const BlodDetails = await response.json();
      if (!BlodDetails || !BlodDetails.data) {
        return;
      }
      setBlogDetails(BlodDetails?.data?.[0]);
    } catch (error) {
      console.error("Error fetching concern data:", error);
    }
  }
  useEffect(() => {
    setBlogDetails({});
    getBlogDetails();
  }, [id]);

  return (
    <div className={styles.blogDetails}>
      {/* <FrameComponent1 />  */}
      <FooterContainer />
      <div className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - BLOG</div>
        <h1 className={styles.mediumLengthHero}>Blog</h1>
      </div>
      <main className={styles.blog}>
        <Image1
          Mainimg={blogDetails?.mainBanner?.url}
          category={blogDetails?.category}
        />
        <section className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor1}>
                {blogDetails?.blog_author}
              </div>
              <div className={styles.loremIpsumDolor2}>
                {moment(blogDetails?.blog_date).format("DD MMMM YYYY")}
              </div>
            </div>
            <h1 className={styles.mediumLengthHero1}>
              {" "}
              {blogDetails?.blog_name}
            </h1>
          </div>
          <div className={styles.description}>
            <div className={styles.text}>{blogDetails?.blog_info}</div>
          </div>
        </section>
        <BlogContent
          image1={blogDetails?.gallery?.[0]?.url}
          image2={blogDetails?.gallery?.[1]?.url}
        />
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
