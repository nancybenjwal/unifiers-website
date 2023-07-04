import React from "react";
import hero from "../images/design.png";
import Carousel from "react-multi-carousel";
import {
  corporate,
  sectorSKillCounsil,
  governmentInstitutional,
} from "../data/work-partners-data";

import {
  projectPortals,
  education,
  skilling,
  consulting,
  heroSection,
} from "../data/hero-section-data";

export default function Hero() {
  const responsiveWorkPartners = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
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
  };

  const responsiveOthers = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="custom-container px-2 px-sm-2 px-md-5 px-lg-5 px-xl-5">
        <div className="pb-5">
          <div className="row py-3">
            <div className="mt-5 pt-5 col-12 col-sm-12 col-md-12 col-lg-11 col-xl-6">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-8">
                  <h1 className="hero-section-text">
                    <span className="common-color">Unifiers </span> has been
                    <span className="common-color"> set up </span>
                    <br />
                    with this belive that <br />
                    people and ideas
                    <br /> can make a{" "}
                    <span className="common-color"> beautiful world</span>.
                  </h1>
                </div>
              </div>

              <h1
                className="hero-section-text"
                style={{ color: "#BEBEBE", paddingTop: "16%" }}
              >
                Our projects portals
              </h1>
              <ul className="brands_list_portal">
                {projectPortals.map((data) => {
                  return (
                    <>
                      <li className="brand_item_portal">
                        <h2 className="brand_logo_portal">
                          <a title="" href={data.link} target="_blank">
                            <img
                              className="brand_logo_portal"
                              src={data.url}
                              alt={``}
                            />
                          </a>
                        </h2>
                      </li>
                    </>
                  );
                })}
              </ul>

              <ul className="brands_list_portal_text">
                {projectPortals.map((data) => {
                  return (
                    <>
                      <li className="brand_item_portal_text">
                        <h2 className="brand_logo_portal_text">
                          <a
                            target="_blank"
                            style={{ color: "black", textDecoration: "none" }}
                            href={data.link}
                          >
                            <h6>{data.name}</h6>
                          </a>
                        </h2>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className="mt-5 pt-5 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <Carousel
                responsive={responsive}
                arrows={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
              >
                {heroSection.map((data) => {
                  return (
                    <div>
                      <div className="">
                        <div className="">
                          <img src={data.url} className="img-fluid" />
                        </div>
                      </div>
                      <h6 className="mb-5 px-3 text-center caption-text">
                        {data.caption}
                      </h6>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>

        {/* ======================= Education ============================== */}
        <div className="pt-0 pt-sm-0 pt-md-0 pt-lg-5 pt-xl-5" id="education">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
              <h1 className="heading">Education</h1>

              <div className="common">
                Ensuring <span className="common-color">Children</span> not just
                go to school
                <br />
                but become
                <br />
                <span className="common-color">
                  Happy, Upright & Successful Citizens
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Carousel
                responsive={responsiveOthers}
                arrows={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
              >
                {education.map((data) => {
                  return (
                    <div>
                      <div className="card">
                        <div className="card-body">
                          <img src={data.url} className="img-fluid" />
                        </div>
                      </div>
                      <h6 className="mb-5 px-3 text-center caption-text">
                        {data.caption}
                      </h6>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>

        {/* ================================== SKILLING =================== */}

        <div
          className="mt-5 pt-0 pt-sm-0 pt-md-0 pt-lg-5 pt-xl-5"
          id="skilling"
        >
          <div className="row">
            <div className="mt-5 col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 order-last order-sm-last order-md-last order-lg-last order-xl-first">
              <Carousel
                responsive={responsiveOthers}
                arrows={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
              >
                {skilling.map((data) => {
                  return (
                    <div>
                      <div className="card">
                        <div className="card-body">
                          <img src={data.url} className="img-fluid" />
                        </div>
                      </div>
                      <h6 className="mb-5 px-3 text-center caption-text">
                        {data.caption}
                      </h6>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="mt-5 col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 order-first order-sm-first order-md-first order-lg-first order-xl-last">
              <h1 className="heading">Skilling</h1>

              <div className="common">
                Connecting <span className="common-color">Youth</span> to
                existing & emerging <br />
                <span className="common-color">Jobs</span> and Self Employment
                opportunities Connecting Youth to existing & emerging Jobs and{" "}
                <span className="common-color">Self Employment</span>
                opportunities
              </div>
            </div>
          </div>
        </div>

        {/* =================== CONSULTING ================================ */}

        <div
          className="mt-5 pt-0 pt-sm-0 pt-md-0 pt-lg-5 pt-xl-5"
          id="consulting"
        >
          <div className="row">
            <div className="mt-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h1 className="heading">Consulting</h1>

              <div className="common">
                Working with Public Sector, Corporate and Social <br />
                Sector Partners to make{" "}
                <span className="common-color">Transformational</span>{" "}
                Education, <br />
                Skilling & Capacity Building{" "}
                <span className="common-color">Plans</span>
              </div>
            </div>
            <div className="mt-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <Carousel
                responsive={responsiveOthers}
                arrows={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
              >
                {consulting.map((data) => {
                  return (
                    <div>
                      <div className="card">
                        <div className="card-body">
                          <img src={data.url} className="img-fluid" />
                        </div>
                      </div>
                      <h6 className="mb-5 px-3 text-center caption-text">
                        {data.caption}
                      </h6>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>

        {/* =================== WORK PARTNERS ===================== */}
        {/* <div className="row">
          <div className="col-md-4">Government & Institutional</div>
          <div className="col-md-8">
            <Carousel
              responsive={responsiveWorkPartners}
              arrows={true}
              showDots={true}
              infinite={true}
              autoPlay={true}
            >
              {governmentInstitutional.map((data) => {
                return (
                  <div>
                    <div className="card">
                      <div className="card-body">
                        <img src={data.url} className="img-fluid" />
                      </div>
                    </div>
                    <p className="mb-5 text-center">{data.caption}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div> */}
        <div className="pt-5 mt-5">
          <h1 className="heading text-center">
            Some of our <span className="common-color">work</span> partners
          </h1>
          <div className="mt-4">
            <h2 className="second-heading text-center">
              Government & Institutional
            </h2>

            <ul className="brands_list">
              {governmentInstitutional.map((data) => {
                return (
                  <li className="brand_item">
                    <h2 className="brand_logo">
                      <a title="" href="">
                        <img className="brand_logo" src={data.url} alt={``} />
                      </a>
                    </h2>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="row align-items-center mt-4">
            <div className="col-md-12">
              <h2 className="second-heading text-center">
                Sector Skill Councils
              </h2>
            </div>
            <div className="col-md-12">
              <ul className="brands_list">
                {sectorSKillCounsil.map((data) => {
                  return (
                    <li className="brand_item">
                      <h2 className="brand_logo">
                        <a title="" href="">
                          <img className="brand_logo" src={data.url} alt={``} />
                        </a>
                      </h2>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-md-12">
              <h2 className="second-heading text-center">Corporate</h2>
            </div>
            <div className="col-md-12">
              <ul className="brands_list">
                {corporate.map((data) => {
                  return (
                    <li className="brand_item">
                      <h2 className="brand_logo">
                        <a title="" href="">
                          <img className="brand_logo" src={data.url} alt={``} />
                        </a>
                      </h2>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
