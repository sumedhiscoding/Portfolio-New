import { apiendpoints, config } from "../../config/config";
import { IconTypes } from "./components/button/Button";
import Card from "./components/card/Card";
import { fetchBlogs } from "./helper/fetchBlogs";
const Home = async () => {
  const [featuredBlogs, nonFeaturedBlogs] = await Promise.all([
    fetchBlogs(apiendpoints.GET_FEATURED_BLOG_API),
    fetchBlogs(apiendpoints.GET_NON_FEATURED_BLOG_API),
  ]);

  console.log("blogs are", featuredBlogs.data, nonFeaturedBlogs);
  return (
    <div className="container pb-80">
      {featuredBlogs.data.map((blog, idx) => {
        return (
          <Card
            key={idx}
            categories={blog.categories}
            title={blog.title}
            summary={blog.blocks[0].body.slice(0, 100)}
            href={`/${blog.slug}`}
            imgSrc={`${config.STRAPI_BACKEND_BASEURL}${blog.cover.formats.medium.url}`}
            btnIcon={IconTypes.ARROW_RIGHT}
            btnLabel="Read More"
            className="mb-30"
          />
        );
      })}
      <div className="row">
        {nonFeaturedBlogs.data.map((blog, idx) => {
          return (
            <div className="col col_4 m-mw-100">
              <Card
                key={idx}
                categories={blog.categories}
                title={blog.title}
                summary={blog.blocks[0].body.slice(0, 100)}
                href={`/${blog.slug}`}
                imgSrc={`${config.STRAPI_BACKEND_BASEURL}${blog.cover.formats.medium.url}`}
                btnIcon={IconTypes.ARROW_RIGHT}
                btnLabel="Read More"
                className="mb-30"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
