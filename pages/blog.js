import FrameComponent1 from "../components/frame-component1";
import BlogCard from "../components/BlogListingCard";
import Footer from "../components/footer";
import styles from "./blog.module.css";

export async function getServerSideProps(context) {
  try {
    const response = await fetch(
      `https://grateful-authority-34f01c9d0d.strapiapp.com/api/blogs?populate=*`
    );
    const blogList = await response.json();
    console.log(blogList, "--blogList");
    if (!blogList || !blogList.data) {
      return {
        notFound: true, // If no concern is found, show a 404 page
      };
    }

    return {
      props: { blogList: blogList.data }, // Pass only the relevant concern data
    };
  } catch (error) {
    console.error("Error fetching concern data:", error);
    return {
      notFound: true, // Fallback to 404 if an error occurs
    };
  }
}

const Blog = ({ blogList }) => {
  return (
    <div className={styles.blog}>
      <FrameComponent1 />
      <div className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - BLOG</div>
        <h1 className={styles.mediumLengthHero}>Blog</h1>
      </div>
      <div className={styles.blogs}>
        <section className={styles.heading}>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div className={styles.loremIpsumDolor1}>BLOGS</div>
            <h1 className={styles.mediumLengthHero1}>Recent Articles</h1>
          </div>
        </section>
        <section className={styles.content}>
          <div className="row g-3 gy-5">
            {blogList?.length ? (
              blogList?.map((blog) => (
                <div className="col col-12 col-md-4">
                  <BlogCard
                    id={blog?.id}
                    mainImg={blog?.mainBanner?.url}
                    heading={blog?.blog_name}
                    text={blog?.short_details}
                    date={blog?.publishedAt}
                  />
                </div>
              ))
            ) : (
              <div className="mt-3">Nothing to Show</div>
            )}
          </div>
          <div className={styles.row}></div>
        </section>
      </div>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default Blog;
