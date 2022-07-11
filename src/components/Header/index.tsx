import React from "react";
import * as StyledThisComp from "./Header.styled";

const Header = () => {
  return (
    <StyledThisComp.Container container>
      <StyledThisComp.Row item xs={12}>
        <StyledThisComp.Wrapper>item</StyledThisComp.Wrapper>
      </StyledThisComp.Row>
    </StyledThisComp.Container>
  );
};

export default Header;
