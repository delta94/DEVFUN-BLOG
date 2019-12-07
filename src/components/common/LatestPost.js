import React from 'react';
import useFetchAllBlog from 'hooks/useFetchAllBlog';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/svg/arrow.svg';

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

const LatestPost = () => {
  const data = useFetchAllBlog();
  return (
    <ul className="m-p-0">
      {data.allMarkdownRemark.edges.slice(0, 6).map(({ node }) => {
        return (
          <StyledLink>
            <StyledLink.Icon width="10" height="10" fill="#5a5a5a" />
            <StyledLink.Link to={node.fields.slug}>
              {node.frontmatter.title}
            </StyledLink.Link>
          </StyledLink>
        );
      })}
    </ul>
  );
};

LatestPost.propTypes = {};

export default LatestPost;
