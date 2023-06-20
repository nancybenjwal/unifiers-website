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
} from "../data/hero-section-data";

export default function Hero() {
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
      items: 1,
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
      <div className="custom-container">
        <div className="py-5 mt-4">
          <div className="row py-5">
            <div className="mt-5 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 order-last order-sm-last order-md-last order-lg-last order-xl-first">
              <div className="row">
                <div className="col-md-9">
                  <h1 className="hero-section-text pb-5 mb-5">
                    <span className="common-color">Unifiers </span> has been
                    <span className="common-color"> set up </span>
                    with this belive that people and ideas can make a beautiful
                    world.
                  </h1>
                </div>
              </div>

              <h1
                className="hero-section-text pt-5"
                style={{ color: "#BEBEBE" }}
              >
                Our projects portals
              </h1>
              <ul className="brands_list_portal">
                {projectPortals.map((data) => {
                  return (
                    <>
                      <li className="brand_item_portal">
                        <h2 className="brand_logo_portal">
                          <a title="" href="">
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
                            title=""
                            style={{ color: "black", textDecoration: "none" }}
                            href=""
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 order-first order-sm-first order-md-first order-lg-first order-xl-last">
              <Carousel
                responsive={responsive}
                arrows={true}
                showDots={false}
                infinite={false}
                autoPlay={false}
              >
                <div
                  className="align-items-center card"
                  style={{ borderRadius: "15px" }}
                >
                  <img src={hero} className="img-fluid hero-carousal" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        {/* ======================= Education ============================== */}
        <div className="pt-3" id="education">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
              <h1 className="heading">Education</h1>

              <div className="common">
                Ensuring Children not just go to school but become Happy,
                Upright & Successful Citizens
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
                      <p className="mb-5 text-center">{data.caption}</p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5" id="skilling">
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
                      <p className="mb-5 text-center">{data.caption}</p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="mt-5 col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 order-first order-sm-first order-md-first order-lg-first order-xl-last">
              <h1 className="heading">Skilling</h1>

              <div className="common">
                Connecting Youth to existing & emerging Jobs and Self Employment
                opportunities
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 mt-5" id="consulting">
          <div className="row">
            <div className="mt-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h1 className="heading">Consulting</h1>

              <div className="common">
                Working with Public Sector, Corporate and Social Sector Partners
                to make Transformational Education, Skilling & Capacity Building
                plans
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
                      <p className="mb-5 text-center">{data.caption}</p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>

        {/* =================== WORK PARTNERS ===================== */}
        <div className="pt-5 mt-5">
          <h1 className="hero-section-text">
            Some of our <span className="common-color">work</span> partners
          </h1>
          <div className=" mt-5">
            <h2 className="">Government & Institutional</h2>

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
          <div className="row align-items-center mt-5">
            <div className="col-md-12">
              <h2 className="">Sector Skill Councils</h2>
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

          <div className="row align-items-center mt-5">
            <div className="col-md-12">
              <h2 className="">Corporate</h2>
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
