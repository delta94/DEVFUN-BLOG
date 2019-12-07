import React from 'react';
import styled from 'styled-components';

const StyledCopyRight = styled.section`
  background-color: #161616;
  text-align: center;
  line-height: 24px;
  color: #858484;
  margin: auto;
  padding: 25px;
  font-size: 14px;
`;

const CopyRight = () => {
  return (
    <StyledCopyRight>
      © Copyright 2019. Made with
      <span style={{ color: 'pink' }}> ❤ </span>
      by Shyn
    </StyledCopyRight>
  );
};

CopyRight.propTypes = {};

export default CopyRight;
