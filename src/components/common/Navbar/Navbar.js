import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { useNavbar } from './Navbar.hook';

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #333;
    background: linear-gradient(to right, #b2fefa, #0ed2f7, #0052d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Navbar = () => {
  const { allMdx, allFile, siteTitle } = useNavbar();
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center">
        <Logo className="mr-10" height="60" width="60" fill="#fff" />
        <StyledLink to="/">{siteTitle}</StyledLink>
      </div>
      <ul className="flex list-none">
        {allFile.edges.map(item => {
          return (
            <li className="uppercase pr-15 leading-loose" key={item.node.id}>
              <StyledLink to={item.node.name}>{item.node.name}</StyledLink>
            </li>
          );
        })}
        {allMdx.edges.map((e, index) => {
          return (
            <li className="uppercase pr-15 leading-loose" key={String(index)}>
              <StyledLink to={e.node.fields.slug}>
                {e.node.frontmatter.title}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
