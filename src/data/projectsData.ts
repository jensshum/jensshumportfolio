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
    liveUrl: 'https://storypals.netlify.app',
    githubUrl: 'https://github.com/jensshum/interactive_childrens_book'
  },
  {
    id: 2,
    title: 'learnsyncAI',
    description: 'A social learning platform that leverages AI to connect students and provide personalized educational resources.',
    technologies: ['React', 'TypeScript', 'NextJS', 'OpenAI', 'Fal AI image generation', 'Fal AI video generation'],
    images: [
      'https://images.pexels.com/photos/5427862/pexels-photo-5427862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    liveUrl: 'https://learnsyncai.netlify.app',
    githubUrl: 'https://github.com/jensshum/ai_learning_app'
  },
  {
    id: 3,
    title: 'HowtoAI',
    description: 'A simple AI tool that creates simple step by step walkthroughs for general tasks complete with image and text generation.',
    technologies: ['React', 'TypeScript', 'ChatGPT', 'GitHub', 'Bolt.new'],
    images: [
      'https://images.pexels.com/photos/4549408/pexels-photo-4549408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    liveUrl: 'https://howtoai.netlify.app',
    githubUrl: 'https://github.com/jensshum/howto-guide-redo'
  }
];