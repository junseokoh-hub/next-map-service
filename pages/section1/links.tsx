import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Links() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);

  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps
      </button>

      {/*<div style={{ height: '200vh' }} />*/}

      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      {/*<a href="/section1/getStaticProps">/getStaticProps</a>*/}

      {/*<Link href="/section1/getStaticProps">/getStaticProps</Link>*/}
      {/** https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx#L487 */}
    </main>
  );
}

/**
 * Link - CSR 방식으로 라우팅, 이동한 페이지는 자바스크립트 파일로 불러온다.
 *      - Lazy하게 파일을 불러온다.
 */
