import { Box } from "@mui/system";
import {
  ContainerCourseCard,
  ContainerCourseImage,
  CourseImage,
  CoursePrice,
  ImageCoursePrice,
  SubContainerCourseCard,
  SubTitleCourseCard,
  TextCoursePrice,
  TitleCourseCard,
} from "../styles/mui";

interface ICourseCardProps {
  course: {
    id: number;
    starPoints: number;
    image: string;
    title: string;
    subtitle: string;
    description: string;
    price: number;
  };
  onClick: (id: number) => void;
}

export default function CourseCard({ course, onClick }: ICourseCardProps) {
  return (
    <ContainerCourseCard onClick={() => onClick(course.id)}>
      <ContainerCourseImage>
        <CourseImage src={course.image} alt="Course Image" />
      </ContainerCourseImage>
      <SubContainerCourseCard>
        <Box>
          <TitleCourseCard>{course.title}</TitleCourseCard>
          <SubTitleCourseCard>{course.subtitle}</SubTitleCourseCard>
        </Box>
        <CoursePrice>
          <ImageCoursePrice>
            <img src="svg/coins.svg" alt="coins" />
          </ImageCoursePrice>
          <TextCoursePrice>{course.price}</TextCoursePrice>
        </CoursePrice>
      </SubContainerCourseCard>
    </ContainerCourseCard>
  );
}
