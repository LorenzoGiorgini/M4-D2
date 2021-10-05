import{ Component } from 'react'
import Card from "react-bootstrap/Card"

class SingleBook extends Component {


    state = {
        selected: false,
    }

    fetchedData = async () => {
        try {
            let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/" + this.props.books.book,
            {
                method: "GET",
                headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzMwMDcyNjMsImV4cCI6MTYzNDIxNjg2M30.ZDL9OTcshlBWLagtOW6g0Sey_vs6vdIstYnehUcg4FY",
                },
            }
            );
            if (response.ok) {
            let data = await response.json();
            console.log({ data });
            this.setState({
                fetched: data,
            });
            } else {
            console.error("error");
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Card className="card-styled">
                <Card.Img
                  className="card-styled"
                  key={this.props.books.book.asin}
                  variant="top"
                  src={this.props.books.book.img}
                  onClick={() => {
                    this.fetchedData(this.props.books.book);
                    this.setState({
                      selected: !this.state.selected,
                    });
                  }}
                />
            </Card>
        )
    }
}


export default SingleBook