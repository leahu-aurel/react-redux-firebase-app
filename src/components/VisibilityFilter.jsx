import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/actions/actionCreators";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_LEFT } from "../redux/actions/actions";

export default class VisibilityFilter extends React.Component {
  render() {
    const { setVisibilityFilter } = this.props;
    return (
      <div>
        <span>Filter:</span>
        <span onClick={() => setVisibilityFilter(SHOW_ALL)}>All</span>
        {", "}
        <span onClick={() => setVisibilityFilter(SHOW_COMPLETED)}>
          Completed
        </span>
        {", "}
        <span onClick={() => setVisibilityFilter(SHOW_LEFT)}>Left</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
VisibilityFilter = connect(mapStateToProps, { setVisibilityFilter })(
  VisibilityFilter
);
