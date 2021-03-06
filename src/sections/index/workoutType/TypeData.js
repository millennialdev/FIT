import Img1 from '../../../assets/images/weightlifting-2.jpg';
import Img2 from '../../../assets/images/hiit.jpg';
import Img3 from '../../../assets/images/pilaties.jpg';
import Img4 from '../../../assets/images/cycling.jpg';

export const data = {
  title: 'Search by Workout Type',
  buttonTitle: 'View all solutions',
  buttonLink: '/workout',
  col1: {
    name: 'Bodybuilding',
    image: `${Img1}`,
    slug: '/workout/body-building',
  },
  col2: {
    name: 'HIIT',
    image: `${Img2}`,
    slug: '/workout/hiit',
  },
  col3: {
    name: 'Pilaties',
    image: `${Img3}`,
    slug: '/workout/pilaties',
  },
  col4: {
    name: 'Cycling',
    image: `${Img4}`,
    slug: '/workout/cycling',
  },
};
