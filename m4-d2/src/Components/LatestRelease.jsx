import { Component } from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"

import horror from "../Data/horror.json"
import history from "../Data/history.json"
import fantasy from "../Data/fantasy.json"
import romance from "../Data/romance.json"
import scifi from "../Data/scifi.json"

let category = [
    {genre: "Horror" , content: horror} , 
    {genre: "History" , content: history} , 
    {genre: "Fantasy" , content: fantasy} , 
    {genre: "Romance" , content: romance} , 
    {genre: "Scifi" , content: scifi}
]

class LatestRelease extends Component {


    state = {
        category : category[0].content,
        genre: category[0].genre
    }

    render() {
        return (
            <Container fluid>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {
                                this.state.genre
                            }
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                category.map((cat , i) => (
                                    <Dropdown.Item key={i} onClick={() => this.setState({category: cat.content , genre: cat.genre})}>{cat.genre}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Row>
                    {
                        this.state.category.map(books => (
                            <Col>
                                <Card className="card-styled">
                                    <Card.Img className="card-styled" key={books.asin} variant="top" src={books.img} />
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}

export default LatestRelease