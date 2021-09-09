import React from 'react';
import Link from 'next/link';
import { Box } from 'rebass'
import { getPostSlugs } from '../../lib/api';

const Docs: React.VFC<{slugs: string[]}> = ({slugs}) => {
  const DocLink: React.VFC<{slug: string}> = ({slug}) =>
    <li key={slug}>
      <Link href={'/docs/' + slug}>
        <a>{slug.replaceAll(/-/g, ' ')}</a>
      </Link>
    </li>

  return (
    <Box width={[0.8, 0.8, 0.65]} mx='auto'>
      <ul>
        {slugs && slugs.map(slug => <DocLink slug={slug} />) }
      </ul>
    </Box>
  );
};

export default Docs;
