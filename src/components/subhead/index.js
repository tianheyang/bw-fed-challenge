import React from 'react';

import './_subhead.scss';

const Subhead = ({ props }) => (
  <section id="subhead" className="mt-3 ml-md-5 pl-md-3">
    <span>
      {props.blocks[0].subhead}
    </span>
  </section>
);

export default Subhead;
