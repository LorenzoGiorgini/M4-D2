import {Component} from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"

class CommentArea extends Component {

    deleteComment = async (asin) => {
        try {
            let response = await fetch(
              "https://striveschool-api.herokuapp.com/api/comments/" + asin,
              {
                method: "DELETE",
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzMwMDcyNjMsImV4cCI6MTYzNDIxNjg2M30.ZDL9OTcshlBWLagtOW6g0Sey_vs6vdIstYnehUcg4FY",
                },
              }
            )
        } catch (error) {
        console.error(error);
        }
    }

    render() {
        return (

            <ListGroup>
            {
                this.props.selectedBook.length > 0 &&
                this.props.selectedBook.map(comments => (
                    <div>
                        <ListGroup.Item className="card-on-top" key={comments._id}>{comments.comment}<Button variant="danger" onClick={() => this.deleteComment(comments._id)}>X</Button></ListGroup.Item>
                    </div>
                ))
            }
            </ListGroup>
        )
    }
}


export default CommentArea