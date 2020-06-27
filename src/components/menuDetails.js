import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardImgOverlay
  } from 'reactstrap';

class MenuDetails extends Component {
    constructor(props){
        super(props);


    }

    render() {
    	console.log(this.props.selectedDish.comments);
    	const commentsdetails = this.props.selectedDish.comments.map((comments) => {
            if (comments != null){
                return(
                    <div key={comments.id}>
                        <CardText>{comments.comment}</CardText>
                        <CardText>--{comments.author}</CardText>
                    </div>
                );
            }
            else{
                return(
                    <div></div>
                );
            }
        });
               
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <Card key={this.props.selectedDish.id}>
                        <CardImg width="100%" src={this.props.selectedDish.image} />
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <Card key={this.props.selectedDish.id}>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {commentsdetails}
                    </CardBody>
                    </Card>
                </div>
            </div>
        );
    }

}

export default MenuDetails;