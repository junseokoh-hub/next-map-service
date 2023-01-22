import Header from '@/components/common/header';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

interface Props {}

const Feedback: NextPage<Props> = () => {
  return (
    <section>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
      />
      <Header />
      <article></article>
    </section>
  );
};

export default Feedback;
