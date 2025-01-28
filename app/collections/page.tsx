
import type { NextPage } from 'next';
import { redirect } from 'next/navigation';

const Page: NextPage = () => {
  redirect('/products');
};

export default Page;
