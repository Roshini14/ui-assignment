import React, { Component } from "react";
import Filters from "./Filters";
import ApplicantList from "./ApplicantList";
class Body extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="app-body">
        <Filters />
        <ApplicantList data={this.props.students} />
      </section>
    );
  }
}

export default Body;
