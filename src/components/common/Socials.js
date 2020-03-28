import React from 'react';
import { ReactComponent as FacebookIcon } from 'assets/svg/facebook.svg';
import { ReactComponent as TwitterIcon } from 'assets/svg/twitter.svg';
import { ReactComponent as LinkedInIcon } from 'assets/svg/linkedin.svg';
import { ReactComponent as GithubIcon } from 'assets/svg/github.svg';
import { ReactComponent as InstagramIcon } from 'assets/svg/instagram.svg';

import styled from 'styled-components';

const StyledSocial = styled.li`
  background-color: #131313;
  width: 35px;
  height: 35px;
  display: flex;
  cursor: pointer;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin: 0 5px 0 0;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary};
  }
`;

const Socials = () => {
  return (
    <ul className="flex">
      <StyledSocial>
        <a href="https://www.facebook.com/Love.Ren.348" alt="devfun">
          <FacebookIcon width="15" height="15" />
        </a>
      </StyledSocial>
      <StyledSocial>
        <a href="https://twitter.com/tranthaison1231" alt="devfun">
          <TwitterIcon width="15" height="15" />
        </a>
      </StyledSocial>
      <StyledSocial>
        <a href="https://www.linkedin.com/in/son-tran-b26797182/" alt="devfun">
          <LinkedInIcon width="15" height="15" />
        </a>
      </StyledSocial>
      <StyledSocial>
        <a href="https://github.com/tranthaison1231" alt="devfun">
          <GithubIcon width="15" height="15" />
        </a>
      </StyledSocial>
      <StyledSocial>
        <a href="https://www.instagram.com/love.ren.348/" alt="devfun">
          <InstagramIcon width="15" height="15" />
        </a>
      </StyledSocial>
    </ul>
  );
};

export default Socials;
