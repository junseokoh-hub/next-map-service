import { Store } from '@/types/store';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<Store[]>) => {
  const stores = (await import(`../../public/stores.json`)).default as Store[];

  res.status(200).json(stores);
};

export default handler;
