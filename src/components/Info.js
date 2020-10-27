import React from "react";
import { Card } from "react-bootstrap";
import Accordian from "react-bootstrap/Accordion";

export default function Info() {
  return (
    <React.Fragment>
      <section id={"why"} className={"info"}>
        <h2 className={"info_title"}>Whats the Big Deal?</h2>
        <Accordian defaultActiveKey="0" className={"accordian"}>
          <Card>
            <Accordian.Toggle as={Card.Header} variant="link" eventKey="0">
              <h3 className="accordian_title">What is a Supertrawler?</h3>
            </Accordian.Toggle>
            <Accordian.Collapse eventKey="0">
              <Card.Body>
                <p>
                  A supertrawler is an enormous industrial fish factory which
                  are over 100 meters long.
                </p>
                <p>They have nets that could fit 13 jumbo jets.</p>
                <p>✈✈✈✈✈✈ ✈✈✈✈✈✈ ✈✈✈</p>
                <p>
                  Onboard fish processing allows supertrawlers to remain active
                  for months.
                </p>
              </Card.Body>
            </Accordian.Collapse>
          </Card>
          <Card>
            <Accordian.Toggle as={Card.Header} eventKey="1">
              <h3 className="accordian_title">
                Supertrawlers are plundering earth's oceans.
              </h3>
            </Accordian.Toggle>
            <Accordian.Collapse eventKey="1">
              <Card.Body>
                <p>Nets are a crude and bi-catch is inevitable.</p>
                <p>Supertrawlers operate in marine protected areas.</p>
                <p>The nets can catch hundreds of tonnes of fish everyday</p>
              </Card.Body>
            </Accordian.Collapse>
          </Card>
          <Card>
            <Accordian.Toggle as={Card.Header} eventKey="2">
              <h3 className="accordian_title">The problem is getting worse</h3>
            </Accordian.Toggle>
            <Accordian.Collapse eventKey="2">
              <Card.Body>
                <p>
                  Time spent in marine protected areas by supertrawlers in the
                  first half 2020 was more than double than the whole of last
                  year.
                </p>
                <p>This threatens vital ocean habitats and ecosystems</p>
                <p>
                  According to Greenpeace data supertrawlers spent 5,590 hours
                  in 19 of the UK’s marine protected areas in the first six
                  months of 2020, compared with 2,963 hours in 39 protected
                  areas in the whole of last year
                </p>
              </Card.Body>
            </Accordian.Collapse>
          </Card>
          <Card>
            <Accordian.Toggle as={Card.Header} eventKey="3">
              <h3 className="accordian_title">Supertrawlers hurt economies.</h3>
            </Accordian.Toggle>
            <Accordian.Collapse eventKey="3">
              <Card.Body>
                <p>
                  Supertrawlers are plunding our seas meaning fishing is
                  unsustainable long term and taking away livelyhoods of local
                  fishers around the world.
                </p>
                <p>
                  They can sell their catch wherever they get the best price.
                  Meaning even if they catch fish in British waters, it will
                  likely not up on British Plates
                </p>
              </Card.Body>
            </Accordian.Collapse>
          </Card>
          <Card>
            <Accordian.Toggle as={Card.Header} eventKey="4">
              <h3 className="accordian_title">
                We have an opertunity to make a change.
              </h3>
            </Accordian.Toggle>
            <Accordian.Collapse eventKey="4">
              <Card.Body>
                <p>
                  Regardless of what you think of leaving the EU, when the UK
                  leaves the EU common fisheries policy it will be possible to
                  ban supertrawlers
                </p>
                <p>
                  Last year 23 supertrawlers operated in UK waters. None we're
                  British.
                </p>
                <p>
                  This will only happen if people are aware of the scale of the
                  problem and lobby their MP's
                </p>
              </Card.Body>
            </Accordian.Collapse>
          </Card>
        </Accordian>
      </section>
    </React.Fragment>
  );
}
