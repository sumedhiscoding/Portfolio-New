// components/Card.tsx
import Image from "next/image";
import Button from "../button/Button"; // Optional: use DaisyUI <button> instead if preferred
import ConditionalRenderer from "../ConditionalRenderer";
import getCategoryColor from "@/app/helper/get-category-colors";

const Card = (props) => {
  return (
    <div className={`card bg-base-100 w-full ${props.className || ""}`}>
      <figure className="relative h-60 w-full">
        <Image
          src={props.imgSrc}
          alt={props.title || "Card image"}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <ConditionalRenderer condition={props.categories}>
          <div className="mb-2 flex flex-wrap gap-2">
            {props.categories.map((category, idx) => (
              <span
                key={idx}
                className={`badge badge-outline text-${getCategoryColor(
                  category.name
                )}`}
              >
                {category.name}
              </span>
            ))}
          </div>
        </ConditionalRenderer>

        <ConditionalRenderer condition={props.title}>
          <h3 className="card-title">{props.title}</h3>
        </ConditionalRenderer>

        <ConditionalRenderer condition={props.summary}>
          <p>{props.summary}</p>
        </ConditionalRenderer>

        <ConditionalRenderer condition={props.href}>
          <div className="card-actions justify-end mt-4">
            <Button href={props.href} icon={props.btnIcon}>
              {props.btnLabel || "Read More"}
            </Button>
            {/* If not using your custom Button, replace with:
            <a href={props.href} className="btn btn-primary">{props.btnLabel || "Read More"}</a>
            */}
          </div>
        </ConditionalRenderer>
      </div>
    </div>
  );
};

export default Card;
