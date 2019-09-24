import styled from 'styled-components';

export default styled.nav`
  .navbar {
    display: flex;
    list-style-type: none;
  }
  .navbarItem {
    padding-right: 1rem;
    &:last-child {
      padding-right: 0;
    }
  }
`;
