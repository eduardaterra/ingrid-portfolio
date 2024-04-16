import Link from "next/link";
import { asImageSrc } from "@prismicio/client";
import Image from "next/image";

import { PreviewDocument } from "../../../../../prismicio-types";
import styled from "./styles.module.scss";

const Preview = ({ data }: PreviewDocument) => {
  return (
    <div className={styled.container}>
      <div className={styled.textWrapper}>
        <p className={styled.title}>{data.title}</p>
        <Link className={styled.button} href={"/trabalhos"}>
          VER TODOS
        </Link>
      </div>
      <div className={styled.grid}>
        {data.preview.map((item, key) => (
          <div className={styled.slide} key={`${item.title} ${key}`}>
            <Image
              className={styled.image}
              fill
              src={asImageSrc(item.image) as string}
              alt={item.title as string}
            />
            <div className={styled.overlay}>
              <div className={styled.overlayContentWrapper}>
                <div className={styled.overlayContent}>
                  <span className={styled.overlayTitle}>{item.title}</span>
                  <span className={styled.overlayDescription}>
                    {item.description}
                  </span>
                </div>

                <Link href={item.link as string} className={styled.overlayCTA}>
                  VEJA MAIS
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;

