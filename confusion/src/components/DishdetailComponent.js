import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Modal, Button, ModalHeader, ModalBody, FormGroup, Label, Input, Form, Col  } from "reactstrap";
import { Link } from 'react-router-dom';

class CommentForm extends Component {

    constructor(props) {
        super(props);
  
     
        this.state = {
        
          isCommentModalOpen: false
        };
  
        
        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  
      }


      toggleCommentModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
      }

      handleCommentSubmit(evt) {
        this.toggleCommentModal();
        alert("Welcome!  " + this.YourName.value + " | " + "Your Rating" + this.Rating );
        evt.preventDefault();


    }

    render(){

        return(

            <React.Fragment>
            <Button type="submit" value="submit" className="btn btn-outline-secondary" outline onClick={this.toggleCommentModal}> 
            <span> <i class=" fa fa-solid fa-pencil fa-lg"></i></span> Write a Comment
            </Button>

            <Modal isCommentFormOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}> 

              <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>

              <ModalBody>

                <Form onSubmit={this.handleCommentSubmit}>

                  <FormGroup>
                    <Label htmlFor="Rating">Rating</Label>
                    <Input type="text" id="Rating" name="Rating" 
                    innerRef={(input) => this.Rating = input}></Input>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="YourName">Your Name</Label>
                    <Input type="YourName" id="YourName" name="YourName" 
                    innerRef={(input) => this.YourName = input}></Input>
                  </FormGroup>

                  <FormGroup row>
                                <Label htmlFor="commentarea" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Input type="commentarea" id="commentarea" name="commentarea"
                                        rows="12" innerRef={(input) => this.commentarea = input}>
                                     </Input>
                                </Col>
                  </FormGroup>

                  <Button type="submit" value="submit" className="bg-danger"> Submit</Button>

                </Form>

              </ModalBody>

       </Modal>

       </React.Fragment>

        );
    }

}
    function RenderDish({dish}) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}){
        if (comments == null) {
            return (<div></div>)
        }
        const rate = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', 
                    { year: 'numeric', 
                    month: 'short', 
                    day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {rate}
                </ul>

                <CommentForm  />

                
            </div>
        )
    }

    
    function DishDetail (props){
        const dish = props.dish

        
        
        if (dish == null) {
            return (<div></div>);
        }


        return (
            <div className='container'>

                <div className="row">

                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>

                    <div className="col-12">

                        <h3>Menu</h3>

                        <hr />

                    </div>                
                </div>

                <div className='row'>

                        <RenderDish dish = {props.dish} />
                        <RenderComments comments = {props.comments} />
                        
                       

                </div>

                
            </div>
        )
    }



export default DishDetail;