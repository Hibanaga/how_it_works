import React from "react";
import Link from "next/link";
import { defaultRoutes, routesHome } from "../../../../consts/routes";
import * as StyledThisComp from "./HomeNavigation.styled";

const HomeNavigation = () => {
  return (
    <StyledThisComp.Container>
      <StyledThisComp.ImageWrapper>item</StyledThisComp.ImageWrapper>

      <StyledThisComp.Row>
        <StyledThisComp.NavigationWrapper>
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
    </StyledThisComp.Container>
  );
};

export default HomeNavigation;
