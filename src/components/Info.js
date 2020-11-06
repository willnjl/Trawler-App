import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import TwitFeed from "./TwitFeed";

export default function Info() {
  return (
    <Container id={"why"}>
      <Row>
        <Card as={"article"} className={"info"}>
          <Card.Header>
            <h3 className="logo">What is a Supertrawler?</h3>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroupItem>
                <p>
                  A super trawler is an enormous industrial fish factory ship
                  which can be over 100 meters long.
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  Contemporary factory ships are automated and have nets that
                  could fit 13 jumbo jets.
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>✈✈✈✈✈✈ ✈✈✈✈✈✈ ✈✈✈</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  Onboard fish processing allows super trawlers to remain active
                  for months.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card as={"article"} className={"info"}>
          <Card.Header>
            <h3 className="logo">
              Supertrawlers are plundering earth's oceans.
            </h3>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroupItem>
                <p>
                  Nets are large and crude, often catching hundreds of tonnes of
                  fish every day.
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  Commercial fish processing ships can affect birds, whales,
                  dolphins, turtles and sharks by their broad reach methods of
                  catching fish.
                </p>
              </ListGroupItem>

              <ListGroupItem>
                <p>
                  Super trawlers have been found operating in marine protected
                  areas.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card as={"article"} className={"info"}>
          <Card.Header>
            <h3 className="logo">The problem is getting worse.</h3>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroupItem>
                <p>
                  Time spent in marine protected areas by super trawlers in the
                  first half 2020 was more than double than the whole of last
                  year.
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>This threatens vital ocean habitats and ecosystems</p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  According to Greenpeace data super trawlers spent 5,590 hours
                  in 19 of the UK’s marine protected areas in the first six
                  months of 2020, compared with 2,963 hours in 39 protected
                  areas in the whole of last year.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card as={"article"} className={"info"}>
          <Card.Header>
            <h3 className="logo">Supertrawlers hurt economies.</h3>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroupItem>
                <p>
                  Super trawlers plundering our seas means fishing is
                  unsustainable in the long term.
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  They also take away the livelihoods of local fishers around
                  the world.
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  They can sell their catch wherever they get the best price.
                  Even if they catch fish in British waters, they will not
                  likely end up on British plates.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card as={"article"} className={"info"}>
          <Card.Header>
            <h3 className="logo">We have an opportunity to make a change.</h3>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroupItem>
                <p>
                  Last year 23 super trawlers operated in UK waters. None of
                  them were British.
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  egardless of what you think about leaving the EU, when the UK
                  leaves the EU Common Fisheries policy it will be possible for
                  the UK to ban super trawlers.
                </p>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  This will only happen if people are aware of the scale of the
                  problem and lobby their MPs.
                </p>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card as={"article"} className={"info"}>
          <Card.Header>
            <h3 className="logo">TwitterFeed</h3>
          </Card.Header>
          <Card.Body>
            <TwitFeed />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
