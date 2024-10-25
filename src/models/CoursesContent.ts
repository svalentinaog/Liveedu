export interface ILesson {
  id: number;
  title: string;
  description: string;
}

export interface ITopic {
  id: number;
  title: string;
  description: string;
  image: string;
  lessons: ILesson[];
  duration: number;
}

interface ICoursesContent {
  id: number;
  starPoints: number;
  image: string;
  title: string;
  description: string;
  price: number;
  duration?: string;
  videoCount?: number;
  topicsCount?: number;
  topics?: ITopic[];
}

export const CoursesContent: ICoursesContent[] = [
  {
    id: 1,
    starPoints: 5.5,
    image: "/svg/course1.svg",
    title: "Elementary",
    description: "For beginners and intermediates",
    price: 520,
    duration: "8 hours",
    videoCount: 12,
    topicsCount: 6,
    topics: [
      {
        id: 1,
        title: "In the kitchen",
        description: "Talking about food in the kitchen",
        image: "/svg/topics/1.svg",
        duration: 350,
        lessons: Array.from({ length: 10 }, (_, index) => ({
          id: index + 1,
          title: `Lesson ${index + 1}`,
          description: `Description for Lesson ${index + 1}`,
        })),
      },
    ],
  },
  {
    id: 2,
    starPoints: 4.9,
    image: "/svg/course2.svg",
    title: "Advanced",
    description: "For advanced",
    price: 1250,
    duration: "15 hours",
    videoCount: 20,
    topicsCount: 100,
    topics: [
      {
        id: 2,
        title: "Bulletin board",
        description: "Shopping conversation topic near bulletin board",
        image: "/svg/topics/2.svg",
        duration: 40,
        lessons: Array.from({ length: 10 }, (_, index) => ({
          id: index + 1,
          title: `Lesson ${index + 1}`,
          description: `Description for Lesson ${index + 1}`,
        })),
      },
    ],
  },
];
