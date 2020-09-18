import React from "react";
import ContactUs from "../ContactUs";
import { Col, Row, Container } from "reactstrap";
import FooterLeftSide from "./FooterLeftSide";
import FooterRightSide from "./FooterRightSide";
import FooterTop from "./FooterTop";
import './style.css'
import { withRouter } from "react-router-dom";

const footerDescription = [
  {
    comp: <FooterLeftSide />,
    col: 3
  },
  {
    comp: <ContactUs />,
    col: 6
  },
  {
    comp: <FooterRightSide />,
    col: 3
  }]

const Footer = (props) => {
  const { location } = props;
  const isHome = (location.pathname === '/' || location.pathname === '/home') ? true : false;

  return (
    <Container fluid="lg">
      <FooterTop />
        {isHome && <Row className='pb-3'>
        {
          footerDescription.map(({ comp, col }, index) => {
            return <Col sm={col} key={index} className="footer-divide-col">{comp}</Col>
          })
        }
      </Row>}
    </Container>
  )
}

export default withRouter(Footer)
