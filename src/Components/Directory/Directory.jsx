import React from 'react';
import './Directory.scss';
import { connect } from "react-redux";
import MenuItem from '../Menu-Item/menu-item';
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/Directory/Directory.Selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
  {
      sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
      ))
  }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);