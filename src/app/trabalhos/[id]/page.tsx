import { createClient } from "@/prismicio";
import { asImageSrc, asText } from "@prismicio/client";

import styled from "./styles.module.scss";
import Image from "next/image";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

async function getContent(id: string) {
  const client = createClient();

  return await client.getByUID("job", id);
}

const JobPage = async ({ params: { id } }: { params: { id: string } }) => {
  const jobData = await getContent(id);

  return (
    <div className={styled.container}>
      <div className={styled.wrapper}>
        <p className={styled.title}>{jobData.data.title}</p>
        <div className={styled.contentWrapper}>
          <div className={styled.imageWrapper}>
            <Image
              fill
              src={asImageSrc(jobData.data.mainimage) as string}
              alt={jobData.data.mainimage.alt as string}
            />
          </div>
          <p className={styled.text}>{asText(jobData.data.description)}</p>
        </div>
      </div>
      <div className={styled.sliceZone}>
        <SliceZone slices={jobData.data.slices} components={components} />
      </div>
    </div>
  );
};

export default JobPage;

