import styled from "styled-components";
export const HomeSection = styled.div``;
export const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
export const HomeDisplayFlex = styled.div``;
export const HomeContentDiv = styled.div`
  padding-top: 0px;
  margin-top: -100px !important;
  @media screen and (max-width: 580px) {
    margin-bottom: 40px;
  }
`;
export const HomeContentDivP = styled.p`
  margin-bottom: 10px;
  color: rgba(198, 201, 216, 0.75);
`;
export const HomeContentTitle = styled.h1`
  color: #fff;
  font-size: 59px;
  font-weight: 700;
  @media screen and (max-width: 980px) {
    font-size: 49px;
  }
  @media screen and (max-width: 680px) {
    font-size: 45px;
  }
  @media screen and (max-width: 580px) {
    font-size: 40px;
  }
`;
export const TypingDiv = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 35px;

    @media screen and (max-width: 680px) {
      font-size: 30px;
    }
    @media screen and (max-width: 580px) {
      font-size: 25px;
    }
    @media screen and (max-width: 460px) {
      font-size: 23px;
    }
    span {
      color: white;
      margin-right: 10px;
    }
  }
`;
export const LocationTitle = styled.h4`
  color: rgba(198, 201, 216, 0.75);
`;
export const SocialIconsDiv = styled.div``;
export const SocialIconDiv = styled.div`
  position: absolute;
  left: 30px;
  bottom: 20px;
`;
export const SocialIconDivItem = styled.div`
  cursor: pointer;
  margin-top: 3px;
`;
