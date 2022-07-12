import React from "react";
import Link from "next/link";
import { defaultRoutes, routesHome } from "../../../../consts/routes";
import * as StyledThisComp from "./HomeNavigation.styled";

const HomeNavigation = () => {
  return (
    <StyledThisComp.Container>
      <StyledThisComp.Row>
        <StyledThisComp.ImageWrapper>item</StyledThisComp.ImageWrapper>
        <StyledThisComp.NavigationWrapper leftSpacing={3}>
          {routesHome.map(({ label, route, color }) => (
            <StyledThisComp.NavigationItemWrapper key={label}>
              <Link href={route}>
                <StyledThisComp.NavigationItem color={color}>
                  {label}
                </StyledThisComp.NavigationItem>
              </Link>
            </StyledThisComp.NavigationItemWrapper>
          ))}
          <StyledThisComp.Separator />
          <StyledThisComp.NavigationWrapper>
            {defaultRoutes.map(({ label, route }) => (
              <StyledThisComp.NavigationItemWrapper key={label}>
                <Link href={route}>
                  <StyledThisComp.NavigationItem>
                    {label}
                  </StyledThisComp.NavigationItem>
                </Link>
              </StyledThisComp.NavigationItemWrapper>
            ))}
          </StyledThisComp.NavigationWrapper>
        </StyledThisComp.NavigationWrapper>
      </StyledThisComp.Row>
      <StyledThisComp.ContactButton variant="contained">
        <StyledThisComp.ButtonContent>Contact</StyledThisComp.ButtonContent>
      </StyledThisComp.ContactButton>
    </StyledThisComp.Container>
  );
};

export default HomeNavigation;
