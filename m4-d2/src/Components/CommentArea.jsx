import {Component} from "react"
import ListGroup from "react-bootstrap/ListGroup"

class CommentArea extends Component {
    render() {
        return (

            <ListGroup>
            {
                this.props.selectedBook.length > 0 &&
                this.props.selectedBook.map(comments => (
                    <ListGroup.Item className="card-on-top" key={comments._id}>{comments.comment}</ListGroup.Item>
                ))
            }
            </ListGroup>
        )
    }
}


export default CommentArea