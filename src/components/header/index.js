import React from "react";
import "./_header.scss";

import { StaticQuery, graphql, Link } from "gatsby";

const Header = () => (
  <StaticQuery
        query={ graphql`
      query HeaderQuery {
        allContentJson {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    ` }
        render={ (data) => {
          const linkContent = data.allContentJson.edges;
          const links = linkContent.map((content, idx) =>
            <li key={`nav-${idx}`} className="nav-item">
              <Link to={`/${content.node.slug}`} className="nav-link" activeClassName="active">{content.node.title}</Link>
            </li>
          );
          return (
            <div className="container">
              <nav id="header" className="navbar navbar-expand-lg navbar-dark">
                <div className="navbar-controls mr-md-auto">
                  <span className="navbar-brand" href="#home">
                    <img src="/images/abc_logo.svg" alt="Logo" />
                  </span>

                  <ul className="navbar-nav">
                    {links}
                  </ul>
                </div>

                <div className="ml-md-auto">
                  <button className="btn btn-outline-light">
                    Contact Us
                  </button>
                </div>
              </nav>
            </div>
          );
        }
      } />
);

export default Header;
