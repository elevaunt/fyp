/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../Base/TwoSidedLayout';

export default function HeroLeft01({
  theme, 
  title, 
  subtitle, 
  blurb,
  buttonText,
  img,
}) {
  const imgRatio = img?.width ? img.width / img.height : 3/4;
  return (
    <TwoSidedLayout ratio={imgRatio} maxHeight={750} basis={"50%"} img={img}>
      <Typography fontSize="lg" fontWeight="lg">
        {subtitle}
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        {title}
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        {blurb}
      </Typography>
      <Button endDecorator={<ArrowForward />} size={"lg"}>
        {buttonText || "Learn More"}
      </Button>
    </TwoSidedLayout>
  );
}