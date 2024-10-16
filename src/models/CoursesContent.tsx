interface ICoursesContent {
  starPoints: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const CoursesContent: ICoursesContent[] = [
  {
    starPoints: 5.5,
    image: "/svg/screen1.svg",
    title: "Elementary",
    description: "For beginners and intermediates",
    price: 520,
  },
  {
    starPoints: 4.9,
    image: "/svg/screen2.svg",
    title: "Advanced",
    description: "For advanced",
    price: 1250,
  },
];
