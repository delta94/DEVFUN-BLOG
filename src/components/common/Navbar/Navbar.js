import React from 'react';
import { Link } from 'gatsby';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { useNavbar } from './Navbar.hook';

const Navbar = () => {
  const { allMdx, allFile, siteTitle } = useNavbar();
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-end">
        <Logo style={{ marginRight: 20 }} height="60" width="60" fill="#fff" />
        <Link
          className="text-600-40px-30px no-underline normal-color hover:primary-color"
          to="/"
        >
          {siteTitle}
        </Link>
      </div>
      <ul className="flex list-none items-center">
        <li style={{ marginRight: 10 }} className="uppercase leading-loose">
          <Link
            className="no-underline normal-color hover:primary-color"
            to="/"
          >
            Home
          </Link>
        </li>
        {allFile.edges.map((item) => {
          return (
            <li
              style={{ marginRight: 10 }}
              className="uppercase leading-loose"
              key={item.node.id}
            >
              <Link
                className="no-underline normal-color hover:primary-color"
                to={item.node.name}
              >
                {item.node.name}
              </Link>
            </li>
          );
        })}
        {allMdx.edges.map((e, index) => {
          return (
            <li
              style={{ marginRight: 10 }}
              className="uppercase leading-loose"
              key={String(index)}
            >
              <Link
                className="no-underline normal-color hover:primary-color"
                to={e.node.fields.slug}
              >
                {e.node.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
