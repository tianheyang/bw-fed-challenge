import React from 'react';

import './_headline.scss';

const Headline = ({ props }) => (
  <div id="headline">
    <h1 className="mb-0">{props.blocks[0].headline}</h1>
  </div>
);

export default Headline;
