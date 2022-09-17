import styled from "styled-components";
export const NavbarSection = styled.section`
  width: 100%;
`;
export const NavbarDiv = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 7px 20px;
  @media screen and (max-width: 780px) {
    width: 95%;
  }
`;
export const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 780px) {
    margin-top: 120px;
    display: block;
  }
`;
export const LandingImg = styled.img`
  //margin-right: 100px;
  animation: moved 5s infinite;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 960px) {
    height: 400px;
    width: 400px;
    margin-left: 70px;
  }
  @media screen and (max-width: 460px) {
    height: 300px;
    width: 300px;
    margin-left: 30px;
  }
  @keyframes moved {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavbarLogo = styled.div``;
export const NavbarTitle = styled.h1``;
export const MenuItems = styled.div``;
export const NavbarUl = styled.ul`
  display: block;
`;
export const NavbarMenuList = styled.li`
  list-style-type: none;
  display: inline-block;
  cursor: pointer;
  margin-right: 30px;
  font-size: 17px;
  color: white;
  font-weight: 400;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 700px) {
    display: none;
  }
  :nth-child(5) {
    margin-right: 0;
  }
  &:hover {
    color: #31e1f7;
  }
`;
export const MenuBar = styled.div`
  cursor: pointer;
  @media screen and (min-width: 700px) {
    display: none;
  }
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const MouseCursorDiv = styled.div``;
export const MouseCursorImg = styled.img`
  color: white;
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  animation: move 5s infinite;
  transition: all 0.5s ease-in-out;
  @keyframes move {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0px);
      bottom: 10px;
    }
  }
`;
export const MouseCursorFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundGradientSection = styled.section`
  position: relative;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1028%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M1010.6744726988708-58.07219254662699L941.7587615873715 40.34964291047611 1040.1805970444746 109.26535402197538 1109.096308155974 10.84351856487229z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1404.406173931758 146.30625789888387L1360.5348446018286 70.31888650385945 1284.5474732068042 114.19021583378887 1328.4188025367337 190.17758722881328z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M575.338%2c510.624C612.786%2c508.518%2c645.641%2c486.305%2c663.197%2c453.16C679.674%2c422.053%2c673.774%2c386.186%2c657.888%2c354.774C639.868%2c319.143%2c615.245%2c280.767%2c575.338%2c279.434C533.974%2c278.052%2c503.372%2c313.096%2c482.649%2c348.921C461.889%2c384.81%2c447.897%2c428.137%2c468.516%2c464.108C489.216%2c500.221%2c533.779%2c512.961%2c575.338%2c510.624' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M716.52 529.02 a123.98 123.98 0 1 0 247.96 0 a123.98 123.98 0 1 0 -247.96 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1165.67 493.57 a142.36 142.36 0 1 0 284.72 0 a142.36 142.36 0 1 0 -284.72 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M79.9829702601179 238.8606431718654L174.0949598655504 232.2796917730967 117.16753796468109 94.40218306433229z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1441.02431967377 38.4488332536321L1334.6753268148548-25.452088428533315 1270.7744051326893 80.89690443038194 1377.1233979916044 144.79782611254734z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1189.8049964198315 447.2018799308247L1142.4394333038827 354.24172816029613 1096.844844649303 494.5674430467736z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M237.31404891697127 58.931706440887474L225.99518499115786 151.11645542381646 318.17993397408685 162.43531934962988 329.49879789990024 70.25057036670088z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1329.8481747995197 538.559774166222L1274.8740163314417 395.34719510028765 1131.6614372655072 450.32135356836574 1186.6355957335854 593.5339326343001z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1028'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 780px) {
    height: auto;
  }

  padding: 15px;
`;
