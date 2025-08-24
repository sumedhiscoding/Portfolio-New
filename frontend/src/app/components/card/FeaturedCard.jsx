import React from "react";
import Button, { IconTypes } from "../button/Button";
import ConditionalRenderer from "../ConditionalRenderer";
import { GlowEffect } from "../motion-primitives/glow-effect";

const FeaturedCard = ({
  categories,
  title,
  summary,
  href,
  imgSrc,
  btnIcon = IconTypes.ARROW_RIGHT,
  btnLabel = "Read More",
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 bg-white shadow-md rounded-xl overflow-hidden mb-2">
      {/* Image side */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content side */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        {/* Categories */}
        {categories?.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {cat.name || cat}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>

        {/* Summary */}
        <p className="text-gray-600 mb-6">{summary}</p>

        {/* Button */}
        <ConditionalRenderer condition={href}>
          <div className="card-actions justify-end mt-4">
            <Button href={href} icon={btnIcon}>
              {btnLabel || "Read More"}
            </Button>
          </div>
        </ConditionalRenderer>
      </div>
    </div>
  );
};

export default FeaturedCard;
