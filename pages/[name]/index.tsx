import DetailContent from '@/components/home/detail-content';
import DetailHeader from '@/components/home/detail-header';
import useCurrentStore from '@/hooks/useCurrentStore';
import { Store } from '@/types/store';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import classes from '../../components/home/detail.module.scss';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }
  const { setCurrentStore } = useCurrentStore();
  const expanded = true;

  const goToMap = () => {
    setCurrentStore(store);
    router.push(
      `/?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`
    );
  };

  return (
    <section
      className={`${classes.detailSection} ${
        expanded ? classes.expanded : ''
      } ${store ? classes.selected : ''}`}
    >
      <DetailHeader
        currentStore={store}
        expanded={expanded}
        onClickArrow={goToMap}
      />
      <DetailContent currentStore={store} expanded={expanded} />
    </section>
  );
};

export default StoreDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const stores = (await import('../../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  // if (!store) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: { store },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return {
    paths,
    fallback: false,
  };
};
