import { Component } from "react";
import horror from "../Data/horror.json"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class LatestRelease extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    {
                        horror.map(books => (
                            <Col>
                                <Card className="card-styled">
                                    <Card.Img className="card-styled" variant="top" src={books.img} />
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