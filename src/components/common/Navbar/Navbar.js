import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useNavbar } from './Navbar.hook';
import { ReactComponent as Logo } from './logo.svg';

const StyledNavbar = styled.ul`
  ${tw`flex justify-between`}
`;

StyledNavbar.Item = styled.li`
  ${tw`uppercase pr-4 leading-loose`}
`;

StyledNavbar.Link = styled(Link)`
  ${tw`no-underline text-white`}
  &:hover {
    color: #333;
    background: linear-gradient(to right, #b2fefa, #0ed2f7, #0052d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

StyledNavbar.Right = styled.div`
  ${tw`flex list-none`}
`;

StyledNavbar.Left = styled.div`
  ${tw`flex justify-center items-center`}
`;

StyledNavbar.Logo = styled(Logo)`
  ${tw`mr-3`}
`;

const Navbar = () => {
  const { allMdx, allFile, siteTitle } = useNavbar();
  return (
    <StyledNavbar>
      <StyledNavbar.Left>
        <StyledNavbar.Logo height="60" width="60" fill="#fff" />
        <StyledNavbar.Link to="/">{siteTitle}</StyledNavbar.Link>
      </StyledNavbar.Left>
      <StyledNavbar.Right>
        {allFile.edges.map(item => {
          return (
            <StyledNavbar.Item key={item.node.id}>
              <StyledNavbar.Link to={item.node.name}>
                {item.node.name}
              </StyledNavbar.Link>
            </StyledNavbar.Item>
          );
        })}
        {allMdx.edges.map((e, index) => {
          return (
            <StyledNavbar.Item key={String(index)}>
              <StyledNavbar.Link to={e.node.fields.slug}>
                {e.node.frontmatter.title}
              </StyledNavbar.Link>
            </StyledNavbar.Item>
          );
        })}
      </StyledNavbar.Right>
    </StyledNavbar>
  );
};

Navbar.propTypes = {};

export default Navbar;
