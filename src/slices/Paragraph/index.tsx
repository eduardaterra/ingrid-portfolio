import { Content, asText } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styled from "./styles.module.scss";

/**
 * Props for `Paragraph`.
 */
export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>;

/**
 * Component for "Paragraph" Slices.
 */
const Paragraph = ({ slice }: ParagraphProps): JSX.Element => {
  return <div className={styled.paragraph}>{asText(slice.primary.text)}</div>;
};

export default Paragraph;

