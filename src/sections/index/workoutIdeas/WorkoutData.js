import Img1 from '../../../assets/images/workout-idea-1.jpg';
import Img2 from '../../../assets/images/workout-idea-2.jpg';
import Img3 from '../../../assets/images/workout-idea-3.jpg';
import Img4 from '../../../assets/images/workout-idea-4.jpg';
import Img5 from '../../../assets/images/workout-idea-5.jpg';
import Img6 from '../../../assets/images/workout-idea-6.jpg';

export const data = {
  title: 'Workout Ideas',
  cards: [
    {
      id: 1,
      image: `${Img1}`,
      preview:
        'The 20-Minute, Low-Impact Boxing Workout That Will Help you Blow Off Steam',
      author: 'Taylor Swift',
      ideaLink: '/workout-ideas/twenty-minute-low-impact-boxing-workout',
      videoLink: 'workout-ideas/video/1',
      lightButton: true,
    },
    {
      id: 2,
      image: `${Img2}`,
      preview:
        'This 15-Minute Lower Body Barre Workout Will Leave Your Leg Muscles Screaming (for More)',
      author: 'Ronald Phillion',
      ideaLink: '/workout-ideas/fifteen-minute-lower-body-barre-workout',
      videoLink: 'workout-ideas/video/2',
      lightButton: false,
    },
    {
      id: 3,
      image: `${Img3}`,
      preview:
        'The Speedy Barre Class Squeezes All of the Benefits of Cardio Into Just 20 Minutes',
      author: 'David DeMarco',
      ideaLink: '/workout-ideas/speedy-barre-class',
      videoLink: 'workout-ideas/video/3',
      lightButton: true,
    },
    {
      id: 4,
      image: `${Img4}`,
      preview:
        'This 10-Minute Barre Class Doubles as an Abs-Strengthener and Tension Reliever',
      author: 'Joshua Milburn',
      ideaLink: '/workout-ideas/ten-minute-barre-class',
      videoLink: 'workout-ideas/video/4',
      lightButton: false,
    },
    {
      id: 5,
      image: `${Img5}`,
      preview:
        'The 30-Minute Full-Body Barre Class That Will Make Every Last Muscle Quiver',
      author: 'James Fields',
      ideaLink: '/workout-ideas/thirty-minute-full-body-barre-class',
      videoLink: 'workout-ideas/video/5',
      lightButton: false,
    },
    {
      id: 6,
      image: `${Img6}`,
      preview:
        'Most People Forget to Stretch This Area After a Run-Don’t Be One of Them',
      author: 'Alicia Keys',
      ideaLink: '/workout-ideas/most-people-forget-to-stretch-this-area',
      videoLink: 'workout-ideas/video/6',
      lightButton: false,
    },
  ],
};
