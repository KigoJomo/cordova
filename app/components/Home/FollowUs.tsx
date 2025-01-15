import { FC } from 'react';
import Accordion from '../Accordion';
import Mail from './Mail';
import Insta from './Insta';
import FaceBook from './FaceBook';

const platforms = [
  {
    name: 'email',
    title: 'mailing list',
    content: <Mail />,
  },
  {
    name: 'instagram',
    title: 'Instagram',
    content: <Insta />,
  },
  {
    name: 'facebook',
    title: 'Facebook',
    content: <FaceBook />,
  },
];

const FollowUs: FC = () => {
  return (
    <section id="follow-us" className="mt-12">
      <h3 className="mb-6">Follow us</h3>

      <Accordion items={platforms} />
    </section>
  );
};

export default FollowUs;
