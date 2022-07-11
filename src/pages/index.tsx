import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Layout from "../components/Layout";
import * as StyledHome from "../styles/Home.styled";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";

const Home: NextPage = () => {
  return (
    <Layout title="How It Works" header={<Header />}>
      <StyledHome.Container>
        <StyledHome.WrapperContent>
          <StyledHome.Heading variant="h3" gutterBottom>
            Webflow-Entwicklung
          </StyledHome.Heading>
          <StyledHome.SubHeading variant="h6" gutterBottom>
            Wir arbeiten seit 2017 auf Webflow.
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
