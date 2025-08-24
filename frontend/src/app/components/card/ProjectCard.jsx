"use client";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import ConditionalRenderer from "../ConditionalRenderer";
import Button from "../button/Button";
const ProjectCard = ({
  Title,
  Description,
  Technologies = [],
  Content,
  Link,
  ImageSrc,
  href,
  btnIcon,
  btnLabel = "Read More",
}) => {
  return (
    <div className="mb-4 break-inside-avoid rounded-xl bg-white p-4 shadow-md transition duration-500 ease-in-out hover:shadow-lg hover:cursor-pointer max-w-full">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={ImageSrc} // Make sure this image exists in the public folder
          alt="Project preview"
          fill
          className="object-cover"
        />
      </div>

      <h3 className="font-semibold text-lg mb-2">{Title}</h3>
      <p className="mb-3 text-sm text-gray-700">{Description}</p>

      {Technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {Technologies.map((tech, idx) => (
            <span
              key={idx}
              className="badge badge-neutral text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex justify-between items-center">
        {/* Left side: GitHub + Live Site */}
        <div className="flex gap-2 ">
          <span className="flex items-center gap-1">
            <FaGithub className="text-black" />
            <a href="#" className="link link-black link-hover">
              Github Link
            </a>
          </span>

          <span className="flex items-center gap-1">
            <MdOutlineLiveTv className="text-secondary" />
            <a href="#" className="link link-hover link-secondary">
              Live Site
            </a>
          </span>
        </div>

        {/* Right side: Read more */}
      </div>
      <ConditionalRenderer condition={href}>
        <div className="card-actions justify-end mt-4">
          <Button href={href} icon={btnIcon}>
            {btnLabel || "Read More"}
          </Button>
        </div>
      </ConditionalRenderer>
    </div>
  );
};

export default ProjectCard;
