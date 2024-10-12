interface IOnboardingContent {
  title: string;
  description: string;
  image: string;
}

export const OnboardingContents: IOnboardingContent[] = [
  {
    title: "Explore new courses",
    description:
      "Study and watch all our new courses and there are many of them",
    image: "/svg/screen1.svg",
  },
  {
    title: "See your goals",
    description:
      "Learn and learn new things every day and get rewards be on top",
    image: "/svg/screen2.svg",
  },
  {
    title: "Move on to the next course",
    description: "Don't stop at one, start learning the next and make progress",
    image: "/svg/screen3.svg",
  },
];
