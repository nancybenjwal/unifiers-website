import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import team from "../images/team.png";
import monika from "../images/team/MonikaHalan.png";
import { teamImplementation } from "../data/team-data";

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

        {/* <div className="mt-5 pt-5">
          <h2 className="common-sub-heading">Team</h2>
          <h2 className="common-sub-heading">
            <span className="common-color">Implementation</span>
          </h2>
        </div>
        <div className="row  mb-5 pb-5">
          {teamImplementation.map((data) => {
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
                        {data.social_media_icons.map((socialMedia) => {
                          return (
                            <img
                              className="img-fluid social-media-icons"
                              src={socialMedia}
                            />
                          );
                        })}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div> */}

        <div className="">
          <div className="mt-5 pt-5">
            <h2 className="common-sub-heading">Team</h2>
            <h2 className="common-sub-heading">
              <span className="common-color">
                Strategic Investors & Advisors
              </span>
            </h2>
          </div>
          <div className="row">
            {teamImplementation.map((data) => {
              return (
                <div className="col-12 col-md-6 col-lg-6 col-xl-3 d-flex justify-content-center mt-5">
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <img src={data.img} class="card-img-top" alt="..." />
                        <div className="row mt-3">
                          <div className="col-10">
                            <div className="">{data.name}</div>
                          </div>
                          {data.social_media_icons && (
                            <div className="col-2">
                              <a href={data.social_media_icons} target="_blank">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="36"
                                  height="36"
                                  fill="#75a55c"
                                  class="bi bi-linkedin"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                              </a>
                            </div>
                          )}
                        </div>
                        <div className="">{data.designation}</div>
                        <div className="fw-bold">
                          {data.designation_at_unifiers}
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/* <Card className="team-card">
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
                </Card> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
