interface IQuestion {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: "a" | "b" | "c" | "d";
}

export interface ITopicQuizzesContent {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: number;
  questions: IQuestion[];
}

export const TopicQuizzesContent: ITopicQuizzesContent[] = [
  {
    id: 1,
    title: "In the kitchen",
    description: "Talking about food in the kitchen",
    image: "/svg/topics/1.svg",
    duration: 30,
    questions: [
      {
        id: 1,
        question: "What is the main ingredient in a salad?",
        options: {
          a: "Tomato",
          b: "Potato",
          c: "Carrot",
          d: "Lettuce",
        },
        correctAnswer: "d",
      },
      {
        id: 2,
        question: "Which item is commonly found in the kitchen?",
        options: {
          a: "Sofa",
          b: "Fork",
          c: "Pillow",
          d: "Shampoo",
        },
        correctAnswer: "b",
      },
    ],
  },
];
