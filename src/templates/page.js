import React from 'react';
import Helmet from 'react-helmet';
import Headline from '../components/headline';
import Subhead from '../components/subhead';
import CallToAction from '../components/calltoaction';
import Layout from '../components/layout';

import { graphql } from 'gatsby';

export default ({ data }) => {
  const pageData = data && data.allContentJson && data.allContentJson.edges && data.allContentJson.edges[0] && data.allContentJson.edges[0].node;

  if (!pageData) {
    return null;
  }
  
  return (
    <Layout>
      <Helmet>
        <style>{`body { background-image: url(/images/backgrounds/${pageData.blocks[0].background}); }`}</style>
      </Helmet>
      <div id="headline-container" className="container">
        <div className="row">
          <div className="col-md-7">
            <Headline props={pageData} />
          </div>
          <div className="col-md-5">
            <Subhead props={pageData} />
          </div>
        </div>
      </div>
      <div id="cta-container" className="container">
        <CallToAction props={pageData} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TemplateQuery($slug: String) {
    allContentJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          blocks {
            type
            headline
            subhead
            cta
            background
          }
        }
      }
    }
  }
`