import { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";

import horror from "../Data/horror.json";
import history from "../Data/history.json";
import fantasy from "../Data/fantasy.json";
import romance from "../Data/romance.json";
import scifi from "../Data/scifi.json";
import SingleBook from "./SingleBook";

let category = [
  { genre: "Horror", content: horror },
  { genre: "History", content: history },
  { genre: "Fantasy", content: fantasy },
  { genre: "Romance", content: romance },
  { genre: "Scifi", content: scifi },
];

class LatestRelease extends Component {
  state = {
    category: category[0].content,
    genre: category[0].genre,
    fetched: [],
    selected: false,
  };

  

  render() {
    return (
      <Container fluid>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {this.state.genre}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {category.map((cat, i) => (
              <Dropdown.Item
                key={i}
                onClick={() => this.setState({ category: cat.content })}
              >
                {cat.genre}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Row className="row-modified">
          {this.state.category.map((book) => (
            <Col>
              <SingleBook books={book}/>
              {this.state.selected && (
                  <div className="card-on-top">
                    <AddComment asinOfBook={this.state.fetched[0]?.elementId} />
                    {this.state.fetched.length > 0 && (
                      <CommentArea selectedBook={this.state.fetched} />
                    )}
                  </div>
                )}
                {/* {
                this.state.fetched[0]?.elementId === book.asin  && this.state.selected ?
                (
                  <div className="card-on-top">
                    <AddComment asinOfBook={this.state.fetched[0]?.elementId} />
                    <CommentArea selectedBook={this.state.fetched} />
                  </div>
                ) 
                : (<></>)
                } */}
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;