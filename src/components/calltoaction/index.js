import React from 'react';
import './_calltoaction.scss';

const CallToAction = ({ props }) => (
  <div id="cta" className="row">
    <div className="col-md-7 cta-content">
      <h4 className="mb-0 ml-md-5">
        {props.blocks[0].cta}
      </h4>
    </div>
    <div className="col-md-5">
      <div className="cta-controls ml-auto mr-auto mt-5 ml-md-5 mr-md-0 mt-md-0 pl-md-3">
        <a href="#contact" className="btn btn-link btn-sm cta-btn">Let's talk.</a>
      </div>
    </div>
  </div>
);

export default CallToAction;
