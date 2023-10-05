/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../Base/TwoSidedLayout';
import Box from '@mui/joy/Box';

export default function Cta01({
  theme,
  title,
  subtitle,
  blurb,
  buttonText,
  img,
}) {
  const imgRatio = img?.width ? img.width / img.height : 3 / 4;
  return (
    <TwoSidedLayout
      reversed
      ratio={imgRatio} 
      maxHeight={750} 
      basis={"75%"} 
      img={img} 
      imgBasis={"25%"} 
      py={2}
      maxWidth={"xl"}
      theme={"light"}
    >
      <Stack direction={"row"} alignItems="center" gap={2} justifyContent={"space-between"} width={"100%"}>
        <Stack direction={"column"}>
          <Typography
            level="h2"
            fontSize="xl4"
          >
            {title}
          </Typography>
          <Typography
            fontSize="lg" 
            fontWeight="lg"
          >
            {subtitle}
          </Typography>
        </Stack>
        <Box>
          <Button endDecorator={<ArrowForward />} size={"lg"}>
            {buttonText || "Learn More"}
          </Button>
        </Box>
      </Stack>
    </TwoSidedLayout>
  );
}