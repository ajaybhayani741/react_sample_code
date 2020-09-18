import React from "react"
import Img from "../../assets/img/pexels-photo-2531236.jpg"
import { Container, Row, Col } from "reactstrap"
import customerSay from "../../descriptions/customerSay"
import AliceCarousel from 'react-alice-carousel'

const CustomerSay = () => {

  const state = {
    galleryItems:
      customerSay.map(({ message, icon, designation }, index) => {
        return (
          <div key={index} className="customers-feedback-card">
            <div className="customer-message text-white text-left">
              "{message}"
            </div>
            <Row className="pt-4 align-center">
              <Col sm={2}>
                <div className="customer-round d-flex align-center justify-center">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
              </Col>
              <Col sm={10} className="text-left pl-4">
                <div className="customer-name text-white">Albert Jacobs</div>
                <div className="customer-designation text-white">{designation}</div>
              </Col>
            </Row>
          </div>
        )
      }),
  }

  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  }

  const onSlideChange = (e) => {
    // console.debug('Item`s position during a change: ', e.item)
    // console.debug('Slide`s position during a change: ', e.slide)
  }

  const onSlideChanged = (e) => {
    // console.debug('Item`s position after changes: ', e.item)
    // console.debug('Slide`s position after changes: ', e.slide)
  }

  return (
    <div className="text-center">
      <div
        className="bg-img py-3"
        style={{ backgroundImage: `url(${Img})`, width: "100%" }}
      >
        <Container fluid="lg" className=' py-5'>
          <h1 className="pb-3 text-white">What Our Customer Say About Us</h1>
          <AliceCarousel
            items={state.galleryItems}
            responsive={responsive}
            autoPlayInterval={4000}
            duration={1000}
            autoPlayDirection="ltr"
            autoPlay={true}
            mouseTrackingEnabled
            buttonsDisabled={true}
            // playButtonEnabled={true}
            disableAutoPlayOnAction={true}
            onSlideChange={onSlideChange}
            onSlideChanged={onSlideChanged} />
        </Container>
      </div>
    </div>
  )
}

export default CustomerSay;
