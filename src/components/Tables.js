import React, { Component } from "react";
import VesselsTable from "./VesselsTable";
import HistoryTable from "./HistoryTable";
import DropDown from "./DropDown";
import Card from "react-bootstrap/Card";
import Accordian from "react-bootstrap/Accordion";

export default class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      toggleActive: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(value) {
    this.setState({
      selected: +value,
    });
  }

  handleToggle() {
    const { toggleActive } = this.state;
    this.setState({
      toggleActive: !toggleActive,
    });
  }

  render() {
    let { selected } = this.state;
    let { vessels } = this.props;

    return (
      <>
        <Accordian className={"data"} id={"data"}>
          <Card>
            <Accordian.Toggle
              as={Card.Header}
              variant="link"
              eventKey="0"
              onClick={() => this.handleToggle()}
            >
              <h3
                className={`accordian_title  ${
                  this.state.toggleActive ? "open" : "shut"
                }`}
              >
                Data
              </h3>
              <button>{this.state.toggleActive ? "-" : "+"}</button>
            </Accordian.Toggle>
            <Accordian.Collapse eventKey={"0"}>
              <Card.Body>
                <DropDown vessels={vessels} handleChange={this.handleChange} />
                {selected === 0 ? (
                  <VesselsTable vessels={vessels} />
                ) : (
                  <HistoryTable selected={selected} />
                )}
              </Card.Body>
            </Accordian.Collapse>
          </Card>
        </Accordian>
      </>
    );
  }
}
