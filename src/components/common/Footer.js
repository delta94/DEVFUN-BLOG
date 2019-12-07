import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import LatestPost from './LatestPost';
import QuickLinks from './QuickLinks';
import NewLetters from './NewLetters';

const StyledFooter = styled.div``;

StyledFooter.Title = styled.h3`
  color: #fff;
  padding: 0 0 30px 0;
  position: relative;
  margin: 0 0 45px 0;
  line-height: 22px;
  text-transform: uppercase;
  &::after {
    border-bottom: 2px solid #f98315;
    position: absolute;
    bottom: 0;
    content: '';
    left: 0;
    width: 40px;
  }
`;

const Footer = () => {
  return (
    <ul className="flex justify-between flex-col md-flex-row">
      <li className="my-45 flex-1 px-15">
        <StyledFooter.Title>Job Portal</StyledFooter.Title>
        <Info />
      </li>
      <li className="my-45 flex-1 px-15">
        <StyledFooter.Title>Latest Posts</StyledFooter.Title>
        <LatestPost />
      </li>
      <li className="my-45 flex-1 px-15">
        <StyledFooter.Title>Quick Links</StyledFooter.Title>
        <QuickLinks />
      </li>
      <li className="my-45 flex-1 px-15">
        <StyledFooter.Title>Newsletter</StyledFooter.Title>
        <NewLetters />
      </li>
    </ul>
  );
};

Footer.propTypes = {};

export default Footer;
