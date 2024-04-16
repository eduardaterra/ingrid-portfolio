import { Content, asImageSrc } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import styled from "./styles.module.scss";

/**
 * Props for `ImageFull`.
 */
export type ImageFullProps = SliceComponentProps<Content.ImageFullSlice>;

/**
 * Component for "ImageFull" Slices.
 */
const ImageFull = ({ slice }: ImageFullProps): JSX.Element => {
  return (
    <div className={styled.imageWrapper}>
      <Image
        fill
        src={asImageSrc(slice.primary.image) as string}
        alt={slice.primary.image.alt as string}
      />
    </div>
  );
};

export default ImageFull;

