import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import * as StyledSlug from "../styles/Slug.styled";

const NotMatchPage = () => {
  const router = useRouter();

  return (
    <Layout title="Error page">
      <StyledSlug.Container>
        <StyledSlug.Content>
          not match this page {router.query.slug}
        </StyledSlug.Content>
      </StyledSlug.Container>
    </Layout>
  );
};

export default NotMatchPage;
