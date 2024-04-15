"use client";
import { asImageSrc } from "@prismicio/client";
import { IntroductionbannerDocument } from "../../../../../prismicio-types";
import styled from "./styles.module.scss";
import Image from "next/image";
import { useState } from "react";
import { ReactTyped } from "react-typed";

const About = ({ data }: IntroductionbannerDocument) => {
  const [titleCompleted, setTitleCompleted] = useState(false);
  return (
    <div className={styled.container}>
      <div className={styled.imageWrapper}>
        <Image
          fill
          src={asImageSrc(data.image) as string}
          alt="Ingrid Martins Picture"
        />
      </div>
      <div className={styled.textContainer}>
        <div className={styled.textWrapper}>
          <span
            className={styled.textTitle}
            data-title={String(titleCompleted)}
          >
            {typeof window !== undefined ? (
              !titleCompleted ? (
                <ReactTyped
                  strings={[data.title as string]}
                  typeSpeed={50}
                  cursorChar={"|"}
                  showCursor
                  onComplete={() => setTitleCompleted(true)}
                />
              ) : (
                data.title
              )
            ) : null}
          </span>
          <span>
            {titleCompleted && (
              <ReactTyped
                strings={[data.description as string]}
                typeSpeed={50}
                cursorChar={"|"}
                showCursor
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

