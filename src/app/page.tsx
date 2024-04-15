import { createClient } from "@/prismicio";
import {
  IntroductionbannerDocument,
  PreviewDocument,
  SuggestionsDocument,
} from "../../prismicio-types";

import About from "./sections/home/about";
import Suggestions from "./sections/home/suggestions";
import Preview from "./sections/home/preview";
import Contact from "./sections/home/contact";

async function getContent() {
  const client = createClient();

  return await client.getByTag<
    IntroductionbannerDocument | SuggestionsDocument | PreviewDocument
  >("home");
}

export default async function Home() {
  const { results } = await getContent();
  const aboutData = results.find(
    (item) => item.type === "introductionbanner"
  ) as IntroductionbannerDocument;
  const suggestionsData = results.find(
    (item) => item.type === "suggestions"
  ) as SuggestionsDocument;
  const previewData = results.find(
    (item) => item.type === "preview"
  ) as PreviewDocument;

  return (
    <main style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <About {...aboutData} />
      <Suggestions {...suggestionsData} />
      <Preview {...previewData} />
      <Contact />
    </main>
  );
}

