import Header from '@/components/common/header';
import FeedbackSection from '@/components/feedback/FeedbackSection';
import { Feedback } from '@/types/feedback';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { getFeedbackListFromFirestore } from '../firebase/feedback';

interface Props {
  initialFeedbackList: Feedback[];
}

const FeedbackPage: NextPage<Props> = ({ initialFeedbackList }) => {
  return (
    <section>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
      />
      <Header />
      <article
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          touchAction: 'pinch-zoom',
        }}
      >
        <FeedbackSection initialFeedbackList={initialFeedbackList} />
      </article>
    </section>
  );
};

export default FeedbackPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialFeedbackList: await getFeedbackListFromFirestore(),
    },
  };
};
