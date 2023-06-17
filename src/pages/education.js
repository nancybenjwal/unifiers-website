import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import team from "../images/team.png"
import { teamImplementation } from "../data/team-data"
import Carousel from "react-multi-carousel"
import skillCarousal from "../images/randon/skillCarousal.png"

export default function Education() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <>
      <div className="custom-container">
        <div className="mt-5 pt-5">
          <div className="common-para mb-2 text-center">Get TO Know Us</div>
          <h2 className="common-sub-heading text-center">Education</h2>
          <div className="container">
            {/* <div className="col-12 col-md-3"></div>
            <div className="col-12 col-md-6"> */}
            <div className="common-para mt-4">
              Unifiers team consists of professionals recognized for their
              contributions in the field of human resource development and
              vocational training. The key team of Unifiers has conceptualized
              and implemented some of the largest mandates in the Social
              Infrastructure space in the country. With a team of over 50 team
              members
            </div>
            {/* </div>
            <div className="col-12 col-md-3"></div> */}
          </div>
        </div>
      </div>
      <div className="unifiers-work-partners-container pb-5 mb-5">
        <div className="mt-5 pt-5">
          <Carousel
            responsive={responsive}
            itemClass="carousel-item-padding-40-px"
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={false}
            arrows={true}
          >
            <div style={{ padding: "0% 10%" }}>
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <img className="img-fluid" src={skillCarousal} />
                  <div className="card card-skilling d-none d-none-sm - d-md-none d-lg-block d-xl-block">
                    <div className="card-body">
                      <div className="card-skilling-text mb-3">
                        “We ensure that any information you need is served
                        immediately by simply contacting our team”
                      </div>

                      <div className="row">
                        <div className="col-md-6 card-skilling-name">
                          Peter Fennimore
                        </div>
                        <div className="col-md-6 card-skilling-designation">
                          Head of CS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <h4 className="skilling-heading">24/7 Customer Support</h4>

                  <div className="common-para mt-0 mt-md-4 mt-lg-4 mt-xl-4">
                    Our team is here to give you personalized support within the
                    hour available 24/7. In accordance with our commitment to
                    providing superior and professional service. Join daily live
                    webinars, watch our tutorials, or browse through our
                    knowledge base
                  </div>
                  <button className="btn btn-common mt-5">Learn More</button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
