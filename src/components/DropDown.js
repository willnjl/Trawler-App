import React, { Component } from "react";
import Form from "react-bootstrap/form";

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
      <Form.Group>
        <Form.Control
          as={"select"}
          value={value}
          onChange={(e) => this.handleChange(e)}
        >
          <option value={0}> All</option>
          {vessels.map((vessel) => {
            return (
              <option key={vessel.id} value={vessel.id}>
                {vessel.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    );
  }
}
