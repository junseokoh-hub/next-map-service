import { useEffect } from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '@/components/home/header';
import MapSection from '@/components/home/map-section';
import { Store } from '@/types/store';
import useStore from '@/hooks/useStores';
import DetailSection from '@/components/home/detail-section';

interface Props {
  stores: Store[];
}

const HomePage: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStore();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <section>
      <NextSeo
        title="매장 지도"
        description="Next.js 시작하기 강의를 위한 매장 지도 서비스입니다."
      />
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </section>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const stores = (await import('@/public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
};
