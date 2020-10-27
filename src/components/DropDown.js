import React, { Component } from "react";

export default class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = e.currentTarget.value;
    this.setState({
      value,
    });
    this.props.handleChange(value);
  }

  render() {
    const { vessels } = this.props;
    const { value } = this.state;
    return (
      <form>
        <label htmlFor="vessel"> Table View </label>
        <select
          id="vessels"
          value={value}
          onChange={(e) => this.handleChange(e)}
        >
          <option value={0}> show all </option>
          {vessels.map((vessel) => {
            return <option value={vessel.id}>{vessel.name}</option>;
          })}
        </select>
      </form>
    );
  }
}
