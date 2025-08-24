import { apiendpoints, config } from "../../../config/config";
import Card from "../components/card/Card";
import { fetchBlogs } from "../helper/fetchhelper";
import { IconTypes } from "../components/button/Button";
import { SpotlightCustomColor } from "../components/SpotlightCustomColor/SpotlightCustomColor";
import Button from "daisyui/components/button";
import FeaturedCard from "../components/card/FeaturedCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = async () => {
  const [featuredBlogs, nonFeaturedBlogs] = await Promise.all([
    fetchBlogs(apiendpoints.GET_FEATURED_BLOG_API),
    fetchBlogs(apiendpoints.GET_NON_FEATURED_BLOG_API),
  ]);

  return (
    <SpotlightCustomColor>
      <div className="flex flex-col h-full w-full overflow-y-auto scrollbar scroll-smooth mb-5">
        <Header title="Blogs" className="p-4" />

        {/* Section: Featured Blogs */}
        <section className=" p-8">
          {featuredBlogs.data.map((blog, idx) => (
            <FeaturedCard
              key={idx}
              categories={blog.categories}
              title={blog.title}
              summary={blog.blocks[0].body.slice(0, 100)}
              href={`/blogs/${blog.slug}`}
              imgSrc={`${config.STRAPI_BACKEND_BASEURL}${blog.cover.formats.medium.url}`}
              btnIcon={IconTypes.ARROW_RIGHT}
              btnLabel="Read More"
              className=""
            />
          ))}
        </section>

        {/* Section: Other Blogs */}
        <section>
          <div className="grid grid-cols-1 p-8 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {nonFeaturedBlogs.data.map((blog, idx) => (
              <Card
                key={idx}
                categories={blog.categories}
                title={blog.title}
                summary={blog.blocks[0].body.slice(0, 100)}
                href={`/blogs/${blog.slug}`}
                imgSrc={`${config.STRAPI_BACKEND_BASEURL}${blog.cover.formats.medium.url}`}
                btnIcon={IconTypes.ARROW_RIGHT}
                btnLabel="Read More"
                className="shadow-base-400 shadow-md"
              />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </SpotlightCustomColor>
  );
};

export default Home;
