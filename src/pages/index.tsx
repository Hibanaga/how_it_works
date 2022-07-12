import React from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import HomeFrame from "../components/HomeFrame";
import Layout from "../components/Layout";
import * as StyledHome from "../styles/Home.styled";
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

        <HomeFrame />
      </StyledHome.Container>
    </Layout>
  );
};

export default Home;
