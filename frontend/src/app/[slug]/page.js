import ConditionalRenderer from "../components/ConditionalRenderer";
import getCategoryColor from "../helper/get-category-colors";
import CardImg from "../../../public/card-1.jpeg";
import styles from "./style.module.sass";
import Image from "next/image";
import { fetchBlogs } from "../helper/fetchBlogs";
import { apiendpoints, config } from "../../../config/config";
import ReactMarkdown from "react-markdown";
const BlogDetails = async (props) => {
  const slug = await props.params.slug;

  const blogs = await fetchBlogs(
    `${apiendpoints.GET_ALL_BLOGS_API}&filters[slug][$eq]=${slug}`
  );

  if (blogs.data.length == 0) return null;
  const blog = blogs.data[0];

  console.log(
    "alsdnkfa",
    `${apiendpoints.GET_ALL_BLOGS_API}&filters[slug][$eq]=${slug}`,
    blogs.data
  );

  return (
    <div className={`container pb-80`}>
      <div className="row mb-50">
        <div className="col col_9">
          <ConditionalRenderer condition={blog.categories}>
            <div className="mb-10">
              {blog.categories.map((elem, idx) => {
                return (
                  <span
                    key={idx}
                    className={`${
                      styles.card_label
                    } h6 mr-10 c-${getCategoryColor(elem.name)}`}
                  >
                    {elem.name}
                  </span>
                );
              })}
            </div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={blog.title}>
            <h2 className="">{blog.title}</h2>
          </ConditionalRenderer>
        </div>
      </div>
      {console.log(
        "asdfasdf",
        `${config.STRAPI_BACKEND_BASEURL}${blog.cover.formats.large.url}`
      )}
      <Image
        className={`${styles.featuredImage} mb-50`}
        src={`${config.STRAPI_BACKEND_BASEURL}${blog.cover.formats.large.url}`}
        alt="thumbnail"
        width={blog.cover.formats.large.width}
        height={blog.cover.formats.large.height}
      ></Image>
      <div className="row mb-50">
        <div className="col col_9">
          <ConditionalRenderer condition={"Product Reviews"}>
            <article className="content">
              <ReactMarkdown
                components={{
                  // p: ({ node, children }) => {
                  //   if (node.children[0].tagName === "img") {
                  //     const image = node.children[0];
                  //     return (
                  //       <div className="image">
                  //         <Image
                  //           src={`/images/${image.properties.src}`}
                  //           alt={image.properties.alt}
                  //           width="600"
                  //           height="300"
                  //         />
                  //       </div>
                  //     );
                  //   }
                  //   // Return default child if it's not an image
                  //   return <p>{children}</p>;
                  // },
                  code({ className, children }) {
                    // Removing "language-" because React-Markdown already added "language-"
                    const language = className.replace("language-", "");
                    return (
                      <SyntaxHighlighter
                        style={materialDark}
                        language={language}
                        children={children[0]}
                      />
                    );
                  },
                }}
              >
                {blog.blocks[0].body}
              </ReactMarkdown>
              {/* <ReactMarkdown></ReactMarkdown> */}
            </article>
          </ConditionalRenderer>
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const blogs = await fetchBlogs(`${apiendpoints.GET_ALL_BLOGS_API}`);
  return blogs.data.map((blog, idx) => ({
    slug: blog.slug,
    key: idx,
  }));
};

export default BlogDetails;
