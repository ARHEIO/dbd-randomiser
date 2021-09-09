import dynamic from "next/dynamic";
import { remark } from "remark";
import html from 'remark-html'
import { getPostBySlug, getPostSlugs } from '../../../lib/api';

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data, content } = getPostBySlug(slug);

  const htmlContent = await markdownToHtml(content || '');
  return {
    props: {
      slug,
      postData: data,
      content: htmlContent,
    }
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  }
}

/** This lets us disable SSR and use components */
export default dynamic(() => import('./slug'), { ssr: false });
