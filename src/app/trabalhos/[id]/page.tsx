import { createClient } from "@/prismicio";
import styled from "./styles.module.scss";
import { asText } from "@prismicio/client";
import JobsCarousel from "./carousel";

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
          <JobsCarousel {...jobData} />

          <p className={styled.text}>{asText(jobData.data.description)}</p>
        </div>
      </div>
    </div>
  );
};

export default JobPage;

