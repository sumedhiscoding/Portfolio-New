export const config = {
  STRAPI_BACKEND_BASEURL: "http://localhost:1337",
};

export const endpoints = {
  GET_ALL_BLOGS: "/api/articles?populate=*",
  GET_FEATURED_BLOG: "/api/articles?populate=*&filters[isFeatured][$eq]=true",
  GET_NON_FEATURED_BLOG:
    "/api/articles?populate=*&filters[isFeatured][$eq]=false",
};

export const apiendpoints = {
  GET_ALL_BLOGS_API: config.STRAPI_BACKEND_BASEURL + endpoints.GET_ALL_BLOGS,
  GET_FEATURED_BLOG_API:
    config.STRAPI_BACKEND_BASEURL + endpoints.GET_FEATURED_BLOG,
  GET_NON_FEATURED_BLOG_API:
    config.STRAPI_BACKEND_BASEURL + endpoints.GET_NON_FEATURED_BLOG,
};
