import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../redux/actions/actionCreators";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_LEFT,
} from "../../redux/actions/actions";
import "./visibility_filter.css";

let VisibilityFilter = ({ visibilityFilter, setVisibilityFilter }) => (
  <div className="filterContainer">
    <span>Filter:</span>
    <span
      className={visibilityFilter === SHOW_ALL ? "activeFilter" : "filter"}
      onClick={() => setVisibilityFilter(SHOW_ALL)}
    >
      All
    </span>
    {", "}
    <span
      className={
        visibilityFilter === SHOW_COMPLETED ? "activeFilter" : "filter"
      }
      onClick={() => setVisibilityFilter(SHOW_COMPLETED)}
    >
      Completed
    </span>
    {", "}
    <span
      className={visibilityFilter === SHOW_LEFT ? "activeFilter" : "filter"}
      onClick={() => setVisibilityFilter(SHOW_LEFT)}
    >
      Left
    </span>
  </div>
);

VisibilityFilter = connect((state) => state, { setVisibilityFilter })(
  VisibilityFilter
);

export default VisibilityFilter;
