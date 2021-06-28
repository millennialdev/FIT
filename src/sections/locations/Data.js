import Img1 from '../../assets/images/card-1.jpg';
import Img2 from '../../assets/images/card-2.jpg';
import Img3 from '../../assets/images/card-3.jpg';
import Img4 from '../../assets/images/card-4.jpg';

export const data = {
  searchBar: {
    inputLabel: 'Search',
    dropdownLabel: 'Find Gym In',
    cityDefaultText: 'Seattle, Washington',
    roomDefaultText: 'Workout Pod Type',
    roomTypes: [
      { id: 1, type: 'Bodybuilding' },
      { id: 2, type: 'Cycling' },
      { id: 3, type: 'HIIT' },
      { id: 4, type: 'Pilaties' },
    ],
    filterButtons: [
      { id: 1, text: 'Capacity', filled: false },
      { id: 2, text: 'Trainer', filled: true },
    ],
  },
  cardTitleText: 'Viewing 11 FIT Affiliated Gyms',
  cards: [
    {
      id: 1,
      image: `${Img1}`,
      title: 'Sunset North',
      city: 'Seattle',
      copy: 'Mother’s room · Service permitted · Parking · Bike storage · 9+',
      isHeart: false,
      onDemand: true,
    },
    {
      id: 2,
      image: `${Img2}`,
      title: 'Kelly Promanade',
      city: 'Bellvue',
      copy: 'Cycling room · Paid Parking · Juice Bar · Swimming Pool · 10+',
      isHeart: true,
      onDemand: true,
    },
    {
      id: 3,
      image: `${Img3}`,
      title: 'Metro Flex',
      city: 'Downtown Seattle',
      copy: 'Bench Press · Underground Parking · View of Seattle Skyline · 20+',
      isHeart: false,
      onDemand: false,
    },
    {
      id: 4,
      image: `${Img4}`,
      title: '1201 3rd Avenue',
      city: 'Portland',
      copy: 'Crossfit · Pilaties · Strength Training · Hardcore Workout Aesthetic · 30+',
      isHeart: false,
      onDemand: false,
    },
  ],
};
