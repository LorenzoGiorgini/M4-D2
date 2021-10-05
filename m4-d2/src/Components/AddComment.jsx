import { Component } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default class AddComment extends Component {

    state = {
        comment: {
            comment: '',
            rate: "0",
            elementId: this.props.asinOfBook
        }
    }


    postComment = async (e) => {
        try {
            let response = await fetch(
              "https://striveschool-api.herokuapp.com/api/comments",
              {
                method: "POST",
                body: JSON.stringify(this.state.comment),
                headers: {
                  'Content-type': "application/json",
                  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzMwMDcyNjMsImV4cCI6MTYzNDIxNjg2M30.ZDL9OTcshlBWLagtOW6g0Sey_vs6vdIstYnehUcg4FY"
                }
              }
            )
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Write a comment"
                        value={this.state.comment.comment}
                        onChange={
                            (e) => this.setState({
                                comment: {
                                    ...this.state.comment , 
                                    comment: e.target.value
                                }
                            })
                        }
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control 
                        as="select" 
                        value={this.state.comment.rate}
                        onChange={
                            (e) => this.setState({
                                comment: {
                                    ...this.state.comment , 
                                    rate: e.target.value
                                }
                            })
                        }
                        >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    className="btn-form"
                    onClick={this.postComment}
                    >
                    Submit Comment  
                    </Button>
                </Form>
            </div>
        )
    }
}
