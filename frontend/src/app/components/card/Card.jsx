import styles from "./card.module.sass";
import Button from "../button/Button";
import Image from "next/image";
import { IconTypes } from "../button/Button";
import ConditionalRenderer from "../ConditionalRenderer";
import getCategoryColor from "@/app/helper/get-category-colors";
const Card = (props) => {
  return (
    <div className={`${styles.card_wrap} ${props.className || ""} `}>
      <div className={styles.card}>
        <div className={styles.card_imageWrap}>
          <div className={styles.card_image}>
            <Image src={props.imgSrc} alt="fill" fill={true}></Image>
          </div>
        </div>
        <div className={styles.card_content}>
          {console.log("asdfasdf", props.categories)}
          <ConditionalRenderer condition={props.categories}>
            <div className="mb-10">
              {props.categories.map((elem, idx) => {
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
          <ConditionalRenderer condition={props.title}>
            <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.summary}>
            <p className={`${styles.card_summary} fw-600 `}>{props.summary}</p>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.href}>
            <Button icon={props.btnIcon} href={props.href}>
              {props.btnLabel || "Read More"}
            </Button>
          </ConditionalRenderer>
        </div>
      </div>
    </div>
  );
};

export default Card;
