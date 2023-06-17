import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import team from "../images/team.png"
import { teamImplementation } from "../data/team-data"

export default function Team() {
  return (
    <>
      <div className="custom-container">
        <div className="mt-5 pt-5">
          <div className="common-para mb-2 text-center">Get TO Know Us</div>
          <h2 className="common-sub-heading text-center">
            Meat the <span className="common-color">team</span> behind it all
          </h2>
          <div className="row">
            <div className="col-12 col-md-3"></div>
            <div className="col-12 col-md-6">
              <div className="common-para mt-4">
                Unifiers team consists of professionals recognized for their
                contributions in the field of human resource development and
                vocational training. The key team of Unifiers has conceptualized
                and implemented some of the largest mandates in the Social
                Infrastructure space in the country. With a team of over 50 team
                members
              </div>
            </div>
            <div className="col-12 col-md-3"></div>
          </div>
        </div>

        <div className="mt-5 pt-5">
          <h2 className="common-sub-heading">Team</h2>
          <h2 className="common-sub-heading">
            <span className="common-color">Strategic Investors & Advisors</span>
          </h2>
        </div>
        <div className="row">
          {teamImplementation.map(data => {
            return (
              <div className="col-12 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-center mt-5">
                <Card className="team-card">
                  <Card.Body>
                    <Card.Text className="team-card-text">
                      <h4 className="team-heading-name">{data.name}</h4>
                      <div className="team-heading-designation">
                        {data.designation}
                      </div>
                      <div className="my-5">
                        {data.social_media_icons.map(socialMedia => {
                          return (
                            <img
                              className="img-fluid social-media-icons"
                              src={socialMedia}
                            />
                          )
                        })}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="mt-5 pt-5">
          <h2 className="common-sub-heading">Team</h2>
          <h2 className="common-sub-heading">
            <span className="common-color">Implementation</span>
          </h2>
        </div>
        <div className="row  mb-5 pb-5">
          {teamImplementation.map(data => {
            return (
              <div className="col-12 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-center mt-5">
                <Card className="team-card">
                  <Card.Body>
                    <Card.Text className="team-card-text">
                      <h4 className="team-heading-name">{data.name}</h4>
                      <div className="team-heading-designation">
                        {data.designation}
                      </div>
                      <div className="my-5">
                        {data.social_media_icons.map(socialMedia => {
                          return (
                            <img
                              className="img-fluid social-media-icons"
                              src={socialMedia}
                            />
                          )
                        })}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
