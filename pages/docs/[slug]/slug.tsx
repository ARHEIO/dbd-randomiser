import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Grid, Paper } from '@material-ui/core'

const useBreadcrumbsGenerator = () => {
  const home = { title: 'Home', href: '/' };
  const pathMap = {
    'docs': { title: 'Docs', href: '/docs' }
  }
  const { asPath } = useRouter();
  return asPath.split('/').slice(1, -1).reduce((acc: [], page: string) => [...acc, pathMap[page]], [home]);
}

type SlugProps = {
  slug: string;
  content: string;
  postData: Record<string, unknown>;
}

const Slug: React.VFC<SlugProps> = ({slug, content, postData}) => {
  const breadybois = useBreadcrumbsGenerator();

  return (
    <main>
      <Grid container spacing={3}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          {breadybois.length > 0 && breadybois.map(boi => <p>{boi?.title}</p>)}
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </main>
  )
};

export default Slug;
