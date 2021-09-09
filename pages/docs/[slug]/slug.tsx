import { useRouter } from 'next/dist/client/router';
import { BreadcrumbProps, PageHead } from 'precise-ui/dist/es6';
import React from 'react';
import { Grid, GridArea } from 'precise-ui';

const useBreadcrumbsGenerator = () => {
  const home = { title: 'Home', href: '/' };
  const pathMap = {
    'docs': { title: 'Docs', href: '/docs' }
  }
  const { asPath } = useRouter();
  return asPath.split('/').slice(1, -1).reduce((acc: BreadcrumbProps[], page: string) => [...acc, pathMap[page]], [home]);
}

type SlugProps = {
  slug: string;
  content: string;
  postData: Record<string, unknown>;
}

const Slug: React.VFC<SlugProps> = ({slug, content, postData}) => {
  const breadybois = useBreadcrumbsGenerator();

  const title = postData?.title as string || slug;

  return (
    <main>
      <Grid columns={['1fr', '65%', '1fr']} rows={['fit-content', 'auto']}>
        <div style={{backgroundColor: 'rebeccapurple', columnSpan: 'all'}}></div>
        <GridArea column={1}>
          <PageHead title={title} breadcrumbs={breadybois} />
        </GridArea>
        <GridArea column={1}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </GridArea>
      </Grid>
    </main>
  )
};

export default Slug;
