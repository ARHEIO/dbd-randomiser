import dynamic from "next/dynamic";
import { getPostSlugs } from "../../lib/api";

export async function getStaticProps() {
  const props = {
    slugs: getPostSlugs()
  };

  return {
    props,
  }
}

/** This lets us disable SSR and use components */
export default dynamic(() => import('./docs'), { ssr: false });
