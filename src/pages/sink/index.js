import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import LayoutJoy from "../../components/LayoutJoy"
import Hero from "../../components/Heroes/Hero";
import Features from "../../components/Features";
import BlogRoll from "../../components/BlogRoll";
import FullWidthImage from "../../components/FullWidthImage";
import StickyFooter from "../../components/Heroes/Hero";
import { dark } from "../../configs/themes.mui.config";
import HeroLeft01 from "../../components/Heroes/HeroLeft01";
import Cta01 from "../../components/CTAs/Cta01";
import Content01 from "../../components/Content/Content01";
import ContentWithList from "../../components/Content/ContentWithList";
import Section from "../../components/Base/Section";
import TwoSidedLayout from "../../components/Base/TwoSidedLayout";
import { Button, ButtonGroup, Card, Container, Stack, styled, Typography } from "@mui/joy";
import Product_FullWidth from "../../components/Product/ProductFullWidth";
import { ArrowForward } from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import IconList from "../../components/Base/IconList";
import ProductCard from "../../components/Product/ProductCard";

const Buttons = (props) => (
  <div>
    <Typography level="title-lg" sx={{ py: 2 }}>{props.color.toUpperCase()} ({props.size})</Typography>
    <Stack direction={"row"} gap={2}>
      <Button variant="plain" {...props}>Plain</Button>
      <Button variant="outlined" {...props}>Outlined</Button>
      <Button variant="soft" {...props}>Soft</Button>
      <Button variant="solid" {...props}>Solid</Button>
    </Stack>
  </div>
)


// eslint-disable-next-line
export const KitchenSinkTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const ListText = styled(Typography)({
    textWrap: "initial !important",
  });

  return (
    <>
      <Container>
        <Typography level="h2">Buttons</Typography>
        <Stack direction={["column", "column", "row",]} gap={4}>
          <Buttons color="primary" size="md" />
          <Buttons color="secondary" size="md" />
        </Stack>
        <Stack direction={["column", "column", "row",]} gap={4} flexWrap={"wrap"}>
          <Buttons color="neutral" size="md" />
          <Buttons color="warning" size="md" />
          <Buttons color="danger" size="md" />
          <Buttons color="success" size="md" />
        </Stack>
        <Typography level="title-lg" sx={{ py: 2 }}>Disabled</Typography>
        <Stack direction={"row"} gap={2} sx={{pt: 1}}>
          <Button variant="plain" color="secondary" disabled >Plain</Button>
          <Button variant="outlined" color="secondary" disabled >Outlined</Button>
          <Button variant="soft" color="secondary" disabled >Soft</Button>
          <Button variant="solid" color="secondary" disabled >Solid</Button>
        </Stack>
        <Typography level="title-lg" sx={{ py: 2 }}>Button Group</Typography>
        <Stack direction={"row"} gap={2} sx={{ pt: 1 }}>
          <ButtonGroup spacing={2} variant="solid">
            <Button startDecorator={<OtherHousesIcon />} size={"lg"} color="primary">Primary</Button>
            <Button startDecorator={<OtherHousesIcon />} size={"lg"} color="secondary">Secondary</Button>
          </ButtonGroup>
        </Stack>
      </Container>
      <HeroLeft01 title={"Find Your Power"} subtitle={subheading} blurb={description} img={heroImage} maxWidth="xl" />
      <HeroLeft01 title={"Find Your Power"} subtitle={subheading} blurb={description} img={heroImage} theme={"light"} />
      <HeroLeft01 title={"Find Your Power"} subtitle={subheading} blurb={description} img={heroImage} theme={"colored"} />
      <HeroLeft01 title={"Find Your Power"} subtitle={subheading} blurb={description} img={heroImage} theme={"dark"} />
      <HeroLeft01 title={"Find Your Power"} subtitle={subheading} blurb={description} img={heroImage} theme={"darkest"} />
      <Cta01 title={heading} subtitle={subheading} blurb={description} img={heroImage} />
      <Content01 reversed title={heading} subtitle={subheading} blurb={description} img={heroImage} />

      <Section theme={"light"}>
        <Container sx={{ py: 16 }}>
          <Typography level="h2" fontSize={"xl4"}>Icon List Section</Typography>
          <Stack direction={["column", "column", "row"]} gap={4}>
            <ContentWithList title={heading} blurb={description} variant={"soft"} />
            <ContentWithList title={heading} blurb={description} variant={"plain"}/>
          </Stack>
        </Container>
      </Section>
      <h2>Problem</h2>
      <h2>Solution</h2>

      <Section>
        <Container maxWidth="xl" sx={{ p: 16 }}>
          <Typography level="h2" textAlign={"center"} pb={8}>Products - Full Width</Typography>
          <Stack gap={4}>
            <Product_FullWidth title={heading} subtitle={subheading} blurb={description} img={heroImage} >
              <Typography fontSize="lg" fontWeight="lg">
                {subheading}
              </Typography>
              <Typography
                level="h2"
                fontWeight="xl"
                fontSize="xl4"
              // fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
              >
                {title}
              </Typography>
              <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                {description}
              </Typography>
              <IconList icon={<CheckCircleIcon color="success" />} >
                <ListText>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</ListText>
                <ListText>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</ListText>
                <ListText>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</ListText>
              </IconList>
              <Button endDecorator={<ArrowForward />} size={"lg"}>
                Learn More
              </Button>
            </Product_FullWidth>
            <Product_FullWidth title={heading} subtitle={subheading} blurb={description} img={heroImage} >
              <Typography fontSize="lg" fontWeight="lg">
                {subheading}
              </Typography>
              <Typography
                level="h2"
                fontWeight="xl"
                fontSize="xl4"
              // fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
              >
                {title}
              </Typography>
              <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                {description}
              </Typography>
              <IconList icon={<CheckCircleIcon color="success" />} >
                <ListText>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</ListText>
                <ListText>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</ListText>
                <ListText>Volkswagen ipsum Beetle sit amet, Kombi adipiscing elit. Fusce Microbus vintage sapien, et Käfer leo posuere et.</ListText>
              </IconList>
              <Button endDecorator={<ArrowForward />} size={"lg"}>
                Learn More
              </Button>
            </Product_FullWidth>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="xl" sx={{ p: 16 }}>
          <Typography level="h2" textAlign={"center"} pb={8}>Products - Cards</Typography>
          <Stack
            direction={["column", "column", "row"]}
            gap={4}
            sx={{

            }}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Stack>
        </Container>
      </Section>

      <h2>CTA 2</h2>
    </>

  );
};

KitchenSinkTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const KitchenSink = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <LayoutJoy>
      <KitchenSinkTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </LayoutJoy>
  );
};

KitchenSink.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default KitchenSink;

export const pageQuery = graphql`
  query KitchenSinkTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
