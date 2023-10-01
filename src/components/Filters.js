import React, { Component } from "react";
import { filterData } from "../data/filter_data";
import { ReactComponent as FileIcon } from "./../assets/ic_fileIcon.svg";

class Filters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="app-body-filters">
        <div className="app-body-filters-header">
          <div className="app-body-filters-header-name">Filters </div>
          <div className="app-body-filters-header-count">(0 selected)</div>
        </div>
        {filterData.map((filter, index) => (
          <div key={`filter_${index}`} className="app-body-filter-name">
            <FileIcon />
            {filter}
          </div>
        ))}
      </section>
    );
  }
}

export default Filters;
