import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.ul`
  margin: 0;
  font-size: 16px;
`;

const Info = () => {
  return (
    <StyledInfo>
      <li>
        <p>
          <span className="text-primary">Address: </span>
          08 Ha Van Tinh, Da Nang
        </p>
      </li>
      <li className="mt-20">
        <p>
          <span className="text-primary">Phone: </span>
          0915520981
        </p>
      </li>
      <li className="mt-20">
        <p>
          <span className="text-primary">Email: </span>
          thaison.coderstokyo@gmail.com
        </p>
      </li>
    </StyledInfo>
  );
};

Info.propTypes = {};

export default Info;
