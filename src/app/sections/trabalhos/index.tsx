import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { JobDocument } from "../../../../prismicio-types";
import styled from "./styles.module.scss";
import { PropsWithChildren } from "react";
import { asImageSrc } from "@prismicio/client";

const GridItem = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  return <Link {...props}>{children}</Link>;
};

const Grid = (jobs: JobDocument[]) => {
  const data = Object.values(jobs);
  return (
    <div className={styled.container}>
      <p className={styled.title}>trabalhos</p>
      <div className={styled.grid}>
        {data?.map((item) => (
          <GridItem href={`/trabalhos/${item.uid}`} key={item.uid}>
            <div className={styled.itemWrapper}>
              <div className={styled.imageWrapper}>
                <Image
                  fill
                  src={asImageSrc(item.data.images[0]?.image) as string}
                  alt={item.data.title as string}
                />
                <div className={styled.overlay}>
                  <span className={styled.overlayTitle}>{item.data.title}</span>
                </div>
              </div>
            </div>
          </GridItem>
        ))}
      </div>
    </div>
  );
};

export default Grid;

