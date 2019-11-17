import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const Text = styled.footer`
  ${tw`text-center text-green-400 m-1 sm:rotate-270 md:rotate-0`}
`;
const Input = styled.input`
  ${tw`bg-gray-200 focus:bg-white border-transparent focus:border-blue-400`}
`;
const Wrapper = styled.div`
  ${tw`grid`}
`;

const Footer = () => {
  return (
    <Wrapper>
      <Text> Footer</Text>
      <Input placeholder="Focus me" />
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;