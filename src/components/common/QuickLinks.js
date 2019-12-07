import React from 'react';
import useFetchAllBlog from 'hooks/useFetchAllBlog';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/svg/arrow.svg';
import { useNavbar } from './Navbar/Navbar.hook';

const StyledLink = styled.li`
  margin: 0 0 5px 0;
  color: #5a5a5a;
  line-height: 22px;
  font-size: 16px;
  &:last-child {
    margin: 0;
  }
  &:hover {
    color: #f98315;
  }
`;

StyledLink.Icon = styled(ArrowIcon)`
  transform: rotate(90deg);
  margin-right: 10px;
`;

StyledLink.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const QuickLinks = () => {
  const { allMdx, allFile, siteTitle } = useNavbar();
  return (
    <ul className="m-p-0">
      {allFile.edges.map(item => {
        return (
          <StyledLink key={item._id}>
            <StyledLink.Icon width="10" height="10" fill="#5a5a5a" />
            <StyledLink.Link to={item.node.name}>
              {item.node.name}
            </StyledLink.Link>
          </StyledLink>
        );
      })}
      {allMdx.edges.map(item => {
        return (
          <StyledLink key={item._id}>
            <StyledLink.Icon width="10" height="10" fill="#5a5a5a" />
            <StyledLink.Link to={item.node.name}>
              {item.node.frontmatter.title}
            </StyledLink.Link>
          </StyledLink>
        );
      })}
    </ul>
  );
};

QuickLinks.propTypes = {};

export default QuickLinks;
