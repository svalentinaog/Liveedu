interface ICourseCardProps {
  course: {
    starPoints: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
}

export default function CourseCard({ course }: ICourseCardProps) {
  return (
    <div>
      <img src={course.image} alt="img course" />
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
