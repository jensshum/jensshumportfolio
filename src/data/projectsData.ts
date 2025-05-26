import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'StoryPals',
    description: 'An AI-powered children\'s book generator that creates personalized stories based on user inputs.',
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI', 'Tailwind CSS'],
    images: [
      'https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6131576/pexels-photo-6131576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    liveUrl: 'https://storypals.example.com',
    githubUrl: 'https://github.com/example/storypals'
  },
  {
    id: 2,
    title: 'learnsyncAI',
    description: 'A social learning platform that leverages AI to connect students and provide personalized educational resources.',
    technologies: ['Next.js', 'Firebase', 'Machine Learning', 'Vercel', 'Chakra UI'],
    images: [
      'https://images.pexels.com/photos/5427862/pexels-photo-5427862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    liveUrl: 'https://learnsyncai.example.com',
    githubUrl: 'https://github.com/example/learnsyncai'
  },
  {
    id: 3,
    title: 'InstaReel',
    description: 'An automated tool that generates high-converting Instagram ads using AI-powered copy and design suggestions.',
    technologies: ['Vue.js', 'Python', 'AWS', 'TensorFlow', 'Figma'],
    images: [
      'https://images.pexels.com/photos/4549408/pexels-photo-4549408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    liveUrl: 'https://instareel.example.com',
    githubUrl: 'https://github.com/example/instareel'
  }
];