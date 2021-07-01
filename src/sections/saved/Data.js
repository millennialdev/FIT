import Img1 from '../../assets/images/card-2.jpg';
import Img2 from '../../assets/images/saved-2.jpg';
import Img3 from '../../assets/images/saved-3.jpg';

export const data = {
  cardTitleText: 'Viewing 3 FIT Affiliated Gyms',
  cards: [
    {
      id: 1,
      image: `${Img1}`,
      title: 'Kelly Promanade',
      city: 'Bellvue',
      copy: 'Cycling room · Paid Parking · Juice Bar · Swimming Pool · 10+',
      isHeart: true,
      onDemand: true,
    },
    {
      id: 2,
      image: `${Img2}`,
      title: 'DTX Fitness',
      city: 'Olympia',
      copy: 'Hustle Room · Modular Spaces · Dynamic Lighting · 20+',
      isHeart: true,
      onDemand: false,
    },
    {
      id: 3,
      image: `${Img3}`,
      title: '1458 Skyline Blvd',
      city: 'Vancouver',
      copy: 'Crossfit · Pilaties · Strength Training · Hardcore Workout Aesthetic · 30+',
      isHeart: true,
      onDemand: false,
    },
  ],
};
