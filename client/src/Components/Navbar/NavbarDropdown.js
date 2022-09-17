import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const DropDownContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  opacity: 0.9;
`;

export const Icon = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  cursor: pointer;
`;
export const DropDownWrapper = styled.div``;
export const DropDownMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 70px);
`;
export const DropDownLink = styled.li`
  color: #fff !important;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  list-style: none;
  cursor: pointer;
  font-size: 21px;
  font-weight: 500;
  &:hover {
    color: red;
    transition: all 0.4s ease-in-out;
  }
`;

const NavbarDropdown = ({ showDropdown, setShowDropdown }) => {
  return (
    <>
      {showDropdown && (
        <>
          <DropDownContainer>
            <Icon onClick={() => setShowDropdown(!showDropdown)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                fill="none"
                stroke-linecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Icon>
            <DropDownWrapper>
              <DropDownMenu>
                <DropDownLink>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/`}
                  >
                    Home
                  </Link>
                </DropDownLink>
                <DropDownLink>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/about"
                  >
                    About me
                  </Link>
                </DropDownLink>
                <DropDownLink>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/trainers"
                  >
                    Services
                  </Link>
                </DropDownLink>
                <DropDownLink>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/job-seeker"
                  >
                    Need a website
                  </Link>
                </DropDownLink>
                <DropDownLink>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/recruiter"
                  >
                    Projects
                  </Link>
                </DropDownLink>
                <DropDownLink>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/register`}
                  >
                    Contact me
                  </Link>
                </DropDownLink>
              </DropDownMenu>
            </DropDownWrapper>
          </DropDownContainer>
        </>
      )}
    </>
  );
};

export default NavbarDropdown;
