import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

/** https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr */
const NoSSR = dynamic(() => import('@/components/section1/NoSSR'), {
  ssr: false,
});

// window는 SSR에서 인식 불가능

const Example: NextPage = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delayInSeconds = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((result) => setData(result));
  }, []);

  return (
    <main>
      <h1>Client-side data fetching</h1>
      <p>값: {data}</p>

      <h1>no SSR</h1>
      <NoSSR />
    </main>
  );
};

export default Example;
