import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ConditionalRenderer from "@/app/components/ConditionalRenderer";
import { SpotlightCustomColor } from "@/app/components/SpotlightCustomColor/SpotlightCustomColor";
import { fetchProjects } from "@/app/helper/fetchhelper";
import { apiendpoints, config } from "../../../../config/config";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Footer from "@/app/components/Footer";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";

export async function generateMetadata({ params }) {
  const projects = await fetchProjects(
    `${apiendpoints.GET_ALL_PROJECTS_API}&filters[slug][$eq]=${params.slug}`
  );
  const project = projects.data[0];

  return {
    title: `${project.Name} | My Portfolio Project`,
    description: project.Description?.slice(0, 150),
  };
}

const ProjectDetails = async ({ params }) => {
  const { slug } = params;

  const projects = await fetchProjects(
    `${apiendpoints.GET_ALL_PROJECTS_API}&filters[slug][$eq]=${slug}`
  );

  if (!projects?.data?.length) {
    return (
      <div className="text-center py-20 text-gray-500">Project not found.</div>
    );
  }

  const project = projects.data[0];

  return (
    <SpotlightCustomColor>
      <div className="h-full w-full overflow-y-auto scrollbar scroll-smooth p-5">
        {/* Project Header */}
        <div className="pt-12 mb-8 border-b border-gray-200">
          <ConditionalRenderer condition={project.Name}>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              {project.Name}
            </h1>
          </ConditionalRenderer>

          <ConditionalRenderer condition={project.Technologies}>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.Technologies.split(",").map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </ConditionalRenderer>
        </div>

        {/* Cover Image */}
        {project.Showcase?.[0]?.formats?.large?.url && (
          <div className="mb-12">
            <Image
              className="rounded-xl shadow-lg object-cover w-full max-h-[500px]"
              src={`${config.STRAPI_BACKEND_BASEURL}${project.Showcase[0].formats.large.url}`}
              alt="Project cover"
              width={project.Showcase[0].formats.large.width}
              height={project.Showcase[0].formats.large.height}
            />
          </div>
        )}

        {/* Project Content */}
        <div className="prose prose-lg prose-slate max-w-none leading-relaxed">
          <ConditionalRenderer condition={project.Description}>
            <MarkdownRenderer content={project.Content?.[0]?.body} />
          </ConditionalRenderer>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-gray-200 pt-10">
          <Footer />
        </div>
      </div>
    </SpotlightCustomColor>
  );
};

// For static site generation
export const generateStaticParams = async () => {
  const projects = await fetchProjects(apiendpoints.GET_ALL_PROJECTS_API);
  return projects.data.map((project) => ({
    slug: project.slug,
  }));
};

export default ProjectDetails;
