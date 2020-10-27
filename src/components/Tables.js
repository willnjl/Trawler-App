import React, { Component } from "react";
import VesselsTable from "./VesselsTable";
import HistoryTable from "./HistoryTable";
import DropDown from "./DropDown";

export default class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      selected: +value,
    });
  }

  render() {
    console.log("render");
    let { selected } = this.state;
    let { vessels } = this.props;
    return (
      <>
        <DropDown vessels={vessels} handleChange={this.handleChange} />
        {selected === 0 ? (
          <VesselsTable vessels={vessels} />
        ) : (
          <HistoryTable selected={selected} />
        )}
      </>
    );
  }
}
