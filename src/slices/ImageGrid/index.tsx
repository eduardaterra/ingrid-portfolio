import { Content, asImageSrc } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import styled from "./styles.module.scss";
import Image from "next/image";

/**
 * Props for `ImageGrid`.
 */
export type ImageGridProps = SliceComponentProps<Content.ImageGridSlice>;

/**
 * Component for "ImageGrid" Slices.
 */
const ImageGrid = ({ slice }: ImageGridProps): JSX.Element => {
  return (
    <div className={styled.grid}>
      <div className={styled.imageWrapper}>
        <Image
          fill
          src={asImageSrc(slice.primary.firstimage) as string}
          alt={slice.primary.firstimage.alt as string}
        />
      </div>

      <div className={styled.imageWrapper}>
        <Image
          fill
          src={asImageSrc(slice.primary.secondimage) as string}
          alt={slice.primary.secondimage.alt as string}
        />
      </div>
    </div>
  );
};

export default ImageGrid;

