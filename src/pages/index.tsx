import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Layout from "../components/Layout";
import * as StyledHome from "../styles/Home.styled";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import { VariantsNavigation } from "../types/Navigation.types";

const Home: NextPage = () => {
  return (
    <Layout
      title="How It Works"
      header={<Header variant={VariantsNavigation.home} />}
    >
      <StyledHome.Container>
        <StyledHome.WrapperContent>
          <StyledHome.Heading variant="h1" gutterBottom>
            How It works
          </StyledHome.Heading>
          <StyledHome.SubHeading variant="h6">
            Your web development assistant.
          </StyledHome.SubHeading>
        </StyledHome.WrapperContent>
        <StyledHome.WrapperImage>
          <HighlightAltIcon color="inherit" />
        </StyledHome.WrapperImage>
      </StyledHome.Container>
    </Layout>
  );
};

export default Home;
