import React from "react";
import { SHOW_COMPLETED, SHOW_LEFT } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import "./visibility_filter.css";

export default ({ filter }) => (
  <div className="filterContainer">
    <span>Filter:</span>
    {"  "}
    <Link
      to="/all"
      className={
        filter === "/" || filter === "/all" ? "activeFilter" : "filter"
      }
    >
      All
    </Link>
    {", "}
    <Link
      to={SHOW_COMPLETED}
      className={filter === SHOW_COMPLETED ? "activeFilter" : "filter"}
    >
      Completed
    </Link>
    {", "}
    <Link
      to={SHOW_LEFT}
      className={filter === SHOW_LEFT ? "activeFilter" : "filter"}
    >
      Left
    </Link>
  </div>
);
