import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/svg/arrow.svg';

const StyledScrollTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease-out;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-align: center;
  opacity: 0.4;
  z-index: 99;
  &:hover {
    opacity: 1;
  }
`;

const ScrollTop = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <StyledScrollTop onClick={scrollTop}>
      <ArrowIcon height="40" width="15" fill="#fff" />
    </StyledScrollTop>
  );
};

export default ScrollTop;
