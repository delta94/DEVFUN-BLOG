import styled from 'styled-components';

export default styled.nav`
  .navbar {
    display: flex;
    list-style-type: none;
  }
  .navbarItem {
    padding-right: 1rem;
    text-transform: uppercase;
    &:last-child {
      padding-right: 0;
    }
    a {
      text-decoration: none;
    }
  }
`;
