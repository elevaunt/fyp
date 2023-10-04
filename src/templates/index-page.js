import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import LayoutJoy from "../components/LayoutJoy"
import Hero from "../components/Heroes/Hero";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import StickyFooter from "../components/Heroes/Hero";
import { dark } from "../configs/themes.mui.config";
import HeroLeft01 from "../components/Heroes/HeroLeft01";
import Cta01 from "../components/CTAs/Cta01";
import Content01 from "../components/Content/Content01";
import ContentWithList from "../components/Content/ContentWithList";
import Section from "../components/Base/Section";
import TwoSidedLayout from "../components/Base/TwoSidedLayout";
import { Button, Card, Container, Stack, styled, Typography } from "@mui/joy";
import Product_FullWidth from "../components/Product/ProductFullWidth";
import { ArrowForward } from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconList from "../components/Base/IconList";
import ProductCard from "../components/Product/ProductCard";

// eslint-disable-next-line
export const IndexPageTemplate = ({
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
      <HeroLeft01 title={heading} subtitle={subheading} blurb={description} img={heroImage} />
      <Cta01 title={heading} subtitle={subheading} blurb={description} img={heroImage} />
      <Content01 reversed title={heading} subtitle={subheading} blurb={description} img={heroImage} />

      <Section theme={"lightestJoy"}>
        <Container sx={{ py: 16 }}>
          <Typography level="h2" fontSize={"xl4"}>Icon List Section</Typography>
          <Stack direction={["column", "column", "row"]} gap={4}>
            <ContentWithList title={heading} blurb={description} sheetVariant={"soft"} />
            <ContentWithList title={heading} blurb={description} />
          </Stack>
        </Container>
      </Section>
      <h2>Problem</h2>
      <h2>Solution</h2>

      <Section>
        <Container maxWidth="xl" sx={{p: 16}}>
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
        <Container maxWidth="xl" sx={{p: 16}}>
          <Typography level="h2" textAlign={"center"} pb={8}>Products - Cards</Typography>
          <Stack
            direction={["column", "column", "row" ]}
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
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} />
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="content">
                      <div className="tile">
                        <h1 className="title">{mainpitch.title}</h1>
                      </div>
                      <div className="tile">
                        <h3 className="subtitle">{mainpitch.description}</h3>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column is-12">
                        <h3 className="has-text-weight-semibold is-size-2">
                          {heading}
                        </h3>
                        <p>{description}</p>
                      </div>
                    </div>
                    <Features gridItems={intro.blurbs} />
                    <div className="columns">
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/products">
                          See all products
                        </Link>
                      </div>
                    </div>
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Latest stories
                      </h3>
                      <BlogRoll />
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
    </>

  );
};

IndexPageTemplate.propTypes = {
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

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <LayoutJoy>
      <IndexPageTemplate
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
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
