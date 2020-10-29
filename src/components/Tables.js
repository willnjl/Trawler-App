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
        <Accordian>
          <Card>
            <Accordian.Toggle as={Card.Header} variant="link" eventKey="0">
              <h3 className="accordian_title">Data</h3>
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
