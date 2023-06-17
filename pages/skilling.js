import React from "react"
import skilling from "../images/randon/skilling.png"
import Carousel from "react-multi-carousel"
import skillCarousal from "../images/randon/skillCarousal.png"
export default function Skilling() {
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
          <h2 className="common-sub-heading text-center">Skilling</h2>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-last order-sm-last order-md-first order-lg-first order-xl-first">
              <h4 className="skilling-heading text-center">
                Set up in minutes
              </h4>

              <div className="common-para mt-4">
                Get started fast with hundreds of visual and customizable
                templates - or create your own. Use our free online template
                maker to create beautiful template in minutes. Choose from
                hundreds of pre-made templates and tell stories with data with
                our easy drag-and-drop infographic creator.
              </div>
            </div>
            <div className="col-12 col-md-6 order-first order-sm-first order-md-last order-lg-last order-xl-last">
              <img className="img-fluid" src={skilling} />
            </div>
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
