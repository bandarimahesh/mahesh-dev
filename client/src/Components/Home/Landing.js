import {
  HomeContentDiv,
  HomeContentDivP,
  HomeContentTitle,
  HomeDisplayFlex,
  HomeSection,
  HomeWrapper,
  LocationTitle,
  TypingDiv,
} from "./LandingElements";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  return (
    <HomeSection>
      <HomeWrapper>
        <HomeDisplayFlex>
          <div>
            <HomeContentDiv>
              <div>
                <HomeContentDivP>WELCOME TO MY WORLD</HomeContentDivP>
              </div>
              <div>
                <HomeContentTitle>Hi, I’m Mahesh,</HomeContentTitle>
              </div>
              <TypingDiv>
                <h1>
                  <span> I'm a </span>
                </h1>
                <h1>
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer,",
                      3000,
                      "Content Writer,",
                      3000,
                      "RPA Developer,",
                      3000,
                      "Blogger,",
                      3000,
                      "Youtuber,",
                      3000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ color: "#31E1F7" }}
                  />
                </h1>
              </TypingDiv>
              <div>
                <LocationTitle>Based in Hyderabad.</LocationTitle>
              </div>
            </HomeContentDiv>
          </div>
        </HomeDisplayFlex>
      </HomeWrapper>
    </HomeSection>
  );
};

export default Landing;
