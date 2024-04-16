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
      <div className={styled.slide}>
        <Image
          className={styled.image}
          fill
          src={asImageSrc(data.preview?.[0]?.image) as string}
          alt={data.preview?.[0]?.title as string}
        />
        <div className={styled.overlay}>
          <div className={styled.overlayContentWrapper}>
            <div className={styled.overlayContent}>
              <span className={styled.overlayTitle}>
                {data.preview?.[0]?.title}
              </span>
              <span className={styled.overlayDescription}>
                {data.preview?.[0]?.description}
              </span>
            </div>

            <Link
              href={data.preview?.[0]?.link as string}
              className={styled.overlayCTA}
            >
              VEJA MAIS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

