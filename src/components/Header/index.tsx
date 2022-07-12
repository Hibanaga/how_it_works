import React, { FC } from "react";
import { VariantsNavigation } from "../../types/Navigation.types";
import * as StyledThisComp from "./Header.styled";
import HomeNavigation from "./variants/HomeNavigation";

interface IHeaderProps {
  variant: VariantsNavigation;
}

const Header: FC<IHeaderProps> = ({ variant }) => {
  // const navigation = useMemo(() => {
  //   switch (variant) {
  //     case VariantsNavigation.home:
  //       return <HomeNavigation />;
  //     case VariantsNavigation.docs:
  //       return <></>;
  //     default:
  //       return <></>;
  //   }
  // }, [variant]);

  return (
    <StyledThisComp.Container container>
      <StyledThisComp.Row item xs={12}>
        <StyledThisComp.Wrapper>
          <HomeNavigation />
        </StyledThisComp.Wrapper>
      </StyledThisComp.Row>
    </StyledThisComp.Container>
  );
};

export default Header;
