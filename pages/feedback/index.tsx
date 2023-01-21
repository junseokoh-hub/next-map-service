import Header from '@/components/common/header';
import { NextPage } from 'next';
import classes from '@/components/common/header.module.scss';
import Link from 'next/link';
interface Props {}

const Feedback: NextPage<Props> = () => {
  return (
    <section>
      <Header />
      <article></article>
    </section>
  );
};

export default Feedback;
