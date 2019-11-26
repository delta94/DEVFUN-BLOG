import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

// const Text = styled.footer`
//   ${tw`text-center text-green-400 m-1 sm:rotate-270 md:rotate-0`}
// `;
// const Input = styled.input`
//   ${tw`bg-gray-200 focus:bg-white border-transparent focus:border-blue-400`}
// `;
const StyledFooter = styled.div``;

StyledFooter.Ul = styled.ul`
  ${tw`flex justify-between flex-col md:flex-row`}
`;

StyledFooter.Li = styled.li`
  border: 1px solid white;
  ${tw`text-center`}
`;

StyledFooter.Bottom = styled.section`
  max-width: calc(100% - 120px);
  border-top: 1px solid white;
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
