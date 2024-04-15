import { createClient } from "@/prismicio";
import Grid from "../sections/trabalhos";
import { JobDocument } from "../../../prismicio-types";

async function getContent() {
  const client = createClient();

  return await client.getAllByType<JobDocument>("job");
}

const Trabalhos = async () => {
  const jobsData = await getContent();
  return (
    <main style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Grid {...jobsData} />
    </main>
  );
};

export default Trabalhos;

