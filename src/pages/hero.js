import React from "react"
import { Row, Col } from "react-bootstrap"
import hero from "../images/Hero-section/hero.png"
import frame from "../images/Frame.png"
import frame2 from "../images/Frame2.png"

import {
  projectsDataRowOne,
  projectsDataRowTwo,
  projectsDataRowThree,
} from "../data/unifiers-projects-data"

export default function Hero() {
  return (
    <>
      <div className="custom-container">
        <div className="hero-section">
          <Row className="align-items-center">
            <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5 order-last order-sm-last order-md-last order-lg-first order-xl-first">
              <h1 className="hero-section-text">
                <span className="common-color">People</span> And
                <span className="common-color"> Ideas</span> Can Make A
                Beautiful World.
              </h1>
              <button className="btn btn-common">Learn More</button>
            </Col>
            <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7 text-center order-first order-sm-first order-md-first order-lg-last order-xl-last">
              <img src={hero} className="img-fluid" />
            </Col>
          </Row>
        </div>

        {/* ================Why do you need Unifiers=================== */}
        <div className="mt-5 pt-5">
          <Row className="align-items-center">
            <Col className="col-12 col-sm-12 col-md-12 col-lg-8">
              <h2 className="common-sub-heading">
                Why do you need <span className="common-color">Unifiers</span> ?
              </h2>
              <div className="common-para">
                Unifiers is the largest publisher of NOS-mapped vocational
                skilling content.
              </div>
              <ul className="common-para ml-5" style={{ paddingLeft: "10px" }}>
                <li>
                  Unifiers team consists of professionals recognized for their
                  contributions in the field of human resource development and
                  vocational training. The key team of Unifiers has
                  conceptualized and implemented some of the largest mandates in
                  the Social Infrastructure space in the country. With a team of
                  over 50 team members
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* ====================Our Numbers=================== */}
        <div className="mt-5 pt-5">
          <div className="card our-numbers-card">
            <div className="card-body our-numbers-text mt-5">Our numbers</div>
            <h2 className="our-numbers-heading mb-5">
              Handshake with leading workforce development organizations.
            </h2>

            <Row className="align-items-center mb-5">
              <Col md={4}>
                <div className="mb-4">
                  <span className="our-numbers"> 100 C </span>
                  <br />
                  <span className="our-numbers-text text-start">Courses</span>
                </div>
              </Col>
              <Col md={4}>
                <div className="mb-4">
                  <span className="our-numbers">1,300,000</span>
                  <br />
                  <span className="our-numbers-text">Learners</span>
                </div>
              </Col>
              <Col md={4}>
                <div className="mb-4">
                  <span className="our-numbers">50,000</span>
                  <br />
                  <span className="our-numbers-text">hours of multimedia</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* ====================How we Work=================== */}
        <div className="mt-5 pt-5">
          <h2 className="common-sub-heading">
            How we <span className="common-color">Work</span> ?
          </h2>
          <Row className="align-items-center">
            <Col className="col-12 col-sm-12 col-md-12 col-lg-6 order-last order-sm-last order-md-last order-lg-first order-xl-first order-xxl-first">
              <h2 className="common-sub-heading">
                Trust us due to our safe and convenient deposit
              </h2>
              <div className="common-para">
                Tristique morbi scelerisque vitae. Nulla dui ultrices sed nam
                ligula dignissim tellus semper lorem facilisis ut. Amet
                tincidunt adipiscing varius maecenas adipiscing.
              </div>
              <button className="btn btn-common">Learn More</button>
            </Col>
            <Col className="col-12 col-sm-12 col-md-12 col-lg-6 order-first order-sm-first order-md-first order-lg-last order-xl-last order-xxl-last">
              <img src={frame} className="img-fluid" />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="col-12 col-sm-12 col-md-12 col-lg-6">
              <img src={frame2} className="img-fluid" />
            </Col>
            <Col className="col-12 col-sm-12 col-md-12 col-lg-6">
              <h2 className="common-sub-heading">
                Trust us due to our safe and convenient deposit
              </h2>
              <div className="common-para">
                Tristique morbi scelerisque vitae. Nulla dui ultrices sed nam
                ligula dignissim tellus semper lorem facilisis ut. Amet
                tincidunt adipiscing varius maecenas adipiscing.
              </div>
              <button className="btn btn-common">Learn More</button>
            </Col>
          </Row>
        </div>

        {/* ====================Unifiers Project Portals================== */}
        <div className="mt-5 pt-5">
          <h2 className="common-sub-heading text-center">
            Unifiers Project <span className="common-color">Portals</span>
          </h2>
          <Row>
            {projectsDataRowOne.map(data => {
              return (
                <Col className="col-12 col-sm-12 col-md-12 col-lg-6 mt-5 pt-5 d-flex justify-content-center">
                  {/* */}
                  <div class="p-3 projects-portal-card d-flex flex-column justify-content-center align-items-center">
                    <img src={data.logo} className="img-fluid mt-2" />
                    <div className="projets-portal-card-heading py-2">
                      {data.heading}
                    </div>
                    <div className="projets-portal-card-para pb-4">
                      an initiative that celebrates women in business.
                    </div>
                    <button className="btn btn-common mt-3">Learn More</button>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            {projectsDataRowTwo.map(data => {
              return (
                <Col className="col-12 col-sm-12 col-md-12 col-lg-4 mt-5 pt-5 d-flex justify-content-center">
                  {/* */}
                  <div class="p-3 projects-portal-card d-flex flex-column justify-content-center align-items-center">
                    <img src={data.logo} className="img-fluid mt-2" />
                    <div className="projets-portal-card-heading py-2">
                      {data.heading}
                    </div>
                    <div className="projets-portal-card-para pb-4">
                      an initiative that celebrates women in business.
                    </div>
                    <button className="btn btn-common mt-3">Learn More</button>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            {projectsDataRowThree.map(data => {
              return (
                <Col className="col-12 col-sm-12 col-md-12 col-lg-6 mt-5 pt-5 d-flex justify-content-center">
                  {/* */}
                  <div class="p-3 projects-portal-card d-flex flex-column justify-content-center align-items-center">
                    <img src={data.logo} className="img-fluid mt-2" />
                    <div className="projets-portal-card-heading py-2">
                      {data.heading}
                    </div>
                    <div className="projets-portal-card-para pb-4">
                      an initiative that celebrates women in business.
                    </div>
                    <button className="btn btn-common mt-3">Learn More</button>
                  </div>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </>
  )
}
