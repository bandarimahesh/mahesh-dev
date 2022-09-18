import Landing from "../Home/Landing";
import { SocialIconDiv } from "../Home/LandingElements";
import SocialIcons from "../Home/SocialIcons";
import {
  MenuItems,
  NavbarDiv,
  NavbarLogo,
  NavbarMenuList,
  NavbarSection,
  NavbarTitle,
  NavbarUl,
  NavbarWrapper,
  BackgroundGradientSection,
  MouseCursorDiv,
  MouseCursorFlex,
  MouseCursorImg,
  ContentDiv,
  LandingImg,
  MenuBar,
} from "./NavbarElements";
import mouseIcon from "../../images/mouse-cursor.png";
import bgImg from "../../images/js2.png";
import "animate.css";
import { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <BackgroundGradientSection>
        <NavbarSection>
          <NavbarDiv>
            <NavbarWrapper>
              <NavbarLogo>
                <NavbarTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-ghost"
                    width="65"
                    height="65"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                    <line x1="10" y1="10" x2="10.01" y2="10" />
                    <line x1="14" y1="10" x2="14.01" y2="10" />
                    <path d="M10 14a3.5 3.5 0 0 0 4 0" />
                  </svg>
                </NavbarTitle>
              </NavbarLogo>
              <MenuItems>
                <NavbarUl>
                  <NavbarMenuList>Home</NavbarMenuList>
                  <NavbarMenuList>About</NavbarMenuList>
                  <NavbarMenuList>Blog</NavbarMenuList>
                  <NavbarMenuList>Need a Website</NavbarMenuList>
                  <NavbarMenuList>Projects</NavbarMenuList>
                  <NavbarMenuList>Contact me</NavbarMenuList>
                </NavbarUl>
                <MenuBar onClick={() => setShowDropdown(!showDropdown)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-align-right"
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="10" y1="12" x2="20" y2="12" />
                    <line x1="6" y1="18" x2="20" y2="18" />
                  </svg>
                </MenuBar>
              </MenuItems>
            </NavbarWrapper>
          </NavbarDiv>
        </NavbarSection>
        <NavbarSection>
          <NavbarDiv>
            <ContentDiv>
              <Landing />
              <div className="animate__animated animate__fadeInRight">
                <LandingImg src={bgImg} alt="Landing image" />
              </div>
            </ContentDiv>
          </NavbarDiv>
        </NavbarSection>
        <SocialIconDiv>
          <SocialIcons />
        </SocialIconDiv>
        <MouseCursorDiv>
          <MouseCursorFlex>
            <MouseCursorImg src={mouseIcon} />
          </MouseCursorFlex>
        </MouseCursorDiv>

        {showDropdown && (
          <NavbarDropdown
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        )}
      </BackgroundGradientSection>
    </>
  );
};

export default Navbar;
