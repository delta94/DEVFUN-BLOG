import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const StyledFooter = styled.div``;

StyledFooter.Ul = styled.ul`
  ${tw`flex justify-between flex-col md:flex-row`}
`;

StyledFooter.Li = styled.li`
  border: 1px solid #080808;
  ${tw`text-center`}
  color: #000 !important;
`;

StyledFooter.Bottom = styled.section`
  max-width: calc(100% - 120px);
  border-top: 1px solid #fff;
  line-height: 0.5;
  ${tw`text-center m-auto p-3`}
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooter.Ul>
        <StyledFooter.Li> 1</StyledFooter.Li>
        <StyledFooter.Li> 1</StyledFooter.Li>
        <StyledFooter.Li> 1</StyledFooter.Li>
        <StyledFooter.Li> 1</StyledFooter.Li>
        <StyledFooter.Li> 1</StyledFooter.Li>
      </StyledFooter.Ul>
      <StyledFooter.Bottom>Made with ❤ by Shyn</StyledFooter.Bottom>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
