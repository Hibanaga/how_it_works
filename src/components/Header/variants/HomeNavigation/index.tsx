import React from "react";
import Link from "next/link";
import { defaultRoutes, routesHome } from "../../../../consts/routes";
import ImagePreview from "../../../ImagePreview";
import logoIcon from "../../../../../public/logo.png";
import * as StyledThisComp from "./HomeNavigation.styled";

const HomeNavigation = () => {
  return (
    <StyledThisComp.Container>
      <StyledThisComp.Row>
        <StyledThisComp.ImageWrapper>
          <ImagePreview
            src={logoIcon}
            priority={true}
            placeholder="blur"
            alt="logo alt image"
            layout="fill"
            loading="eager"
          />
        </StyledThisComp.ImageWrapper>
        <StyledThisComp.NavigationWrapper leftSpacing={1.25}>
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
