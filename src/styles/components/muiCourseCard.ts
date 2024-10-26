import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ContainerCourseCard = styled(Card)`
  width: 250px;
  box-shadow: none;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;

  @media (min-width: 600px) {
    width: 300px;
  }

  @media (min-width: 960px) {
    width: 400px;
  }
`;

export const ContainerCourseImage = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }
`;

export const CourseImage = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: transform 0.3s ease;
  object-fit: cover;
`;

export const SubContainerCourseCard = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;
`;

export const TitleCourseCard = styled(Typography)`
  font-size: 16px;
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 24px;
  }
`;

export const DescriptionCourseCard = styled(Typography)`
  font-size: 12px;
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

export const CoursePrice = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ImageCoursePrice = styled(Box)`
  width: 100%;
`;

export const TextCoursePrice = styled(Typography)`
  font-weight: 400;
  font-size: 12px;

  @media (min-width: 960px) {
    font-size: 16px;
  }
`;
