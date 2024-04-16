import { Content, asLink } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import styled from "./styles.module.scss";

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video = ({ slice }: VideoProps): JSX.Element => {
  return (
    <div className={styled.container}>
      <video
        playsInline
        controls
        src={asLink(slice.primary.video) as string}
        className={styled.video}
      />
    </div>
  );
};

export default Video;

