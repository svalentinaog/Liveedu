interface ITopicsToStudyContent {
  title: string;
  description: string;
  image: string;
  duration: number;
}

export const TopicsToStudyContent: ITopicsToStudyContent[] = [
  {
    title: "In the kitchen",
    description: "Talking about food in the kitchen",
    image: "/svg/topics/1.svg",
    duration: 30,
  },
  {
    title: "Bulletin board",
    description: "Shopping conversation topic near bulletin board",
    image: "/svg/topics/2.svg",
    duration: 40,
  },
  {
    title: "Night city",
    description: "Night walk through the night city and a trip to a cafe",
    image: "/svg/topics/3.svg",
    duration: 25,
  },
  {
    title: "Plan for the day",
    description: "Mikey plans his day",
    image: "/svg/topics/4.svg",
    duration: 19,
  },
  {
    title: "Two friends",
    description: "Friends talk and tell their stories",
    image: "/svg/topics/5.svg",
    duration: 28,
  },
];
