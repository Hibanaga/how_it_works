import React, { FC, ReactNode } from "react";
import Head from "next/head";
import * as StyledThisComp from "./Layout.styled";

interface ILayoutProps {
  title: string;
  header?: JSX.Element;
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children, title, header }) => {
  return (
    <StyledThisComp.Container container>
      <Head>
        <title>{title}</title>
      </Head>
      {header}
      <StyledThisComp.Row item xs={12} alignItems="flex-start">
        <StyledThisComp.Wrapper>{children}</StyledThisComp.Wrapper>
      </StyledThisComp.Row>
    </StyledThisComp.Container>
  );
};

export default Layout;
