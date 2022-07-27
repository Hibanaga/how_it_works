import React from "react";
import type { NextPage } from "next";
import Content from "../components/Content";
import Header from "../components/Header";
import HomeFrame from "../components/HomeFrame";
import Layout from "../components/Layout";
import PaperLayout from "../components/PaperLayout";
import * as StyledHome from "../styles/Home.styled";
import { themes } from "../styles/theme";
import { VariantsNavigation } from "../types/Navigation.types";
import { ContentDisplayVariants } from "../types/Style.types";

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

      <PaperLayout>
        <Content
          color={themes.colors.contentGrey}
          size={themes.font.sizes.fourfold}
        >
          Получение полезных знаний во время разработки.
          {/*<Content*/}
          {/*  display={ContentDisplayVariants.inline}*/}
          {/*  color={themes.colors.baseWhite}*/}
          {/*></Content>*/}
        </Content>
      </PaperLayout>
    </Layout>
  );
};

export default Home;
