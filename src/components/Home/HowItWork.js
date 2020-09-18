import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

class HowItWork extends Component {
  render() {
    return (
      <div className="text-center p-25">
        <Jumbotron fluid>
          <Container fluid="lg">
            <h1 className='pb-3'>How Does It Work? </h1>
            <p className="col-8 m-auto pb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s.
            </p>
            <div className="row text-center">
              <div className="col-4">
                <div className='circle bg-grey d-flex align-center justify-center m-auto mb-4'>
                  <h4 className='d-inline-block mb-0'>01</h4>
                </div>
                <h4 className='pt-2'>Search</h4>
                <p className='px-2'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
              <div className="col-4">
                <div className='circle bg-grey d-flex align-center justify-center m-auto mb-4'>
                  <h4 className='d-inline-block mb-0'>02</h4>
                </div>
                <h4 className='pt-2'>Purchase</h4>
                <p className='px-2'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
              <div className="col-4">
                <div className='circle bg-grey d-flex align-center justify-center m-auto mb-4'>
                  <h4 className='d-inline-block mb-0'>03</h4>
                </div>
                <h4 className='pt-2'>Connect</h4>
                <p className='px-2'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default HowItWork;
