import { useEffect } from 'react';
import { navigate, graphql } from 'gatsby';

// Redirect to the first page in our content.json
export default ({ data }) => {
  const edges = data && data.allContentJson && data.allContentJson.edges;
  if (edges == null || edges.length === 0) {
    return null;
  }
  
  useEffect(() => {
    navigate('/' + ((edges[0].node && edges[0].node.slug) || '404'));
  }, [edges]);
  return null;
};

export const query  = graphql`
  query HomepageQuery {
    allContentJson {
      edges {
        node {
          slug
        }
      }
    }
  }
`