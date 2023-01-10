import React from "react"
import '../../assets/scss/EphraimScss/App.scss'
import logo12 from "../EphraimAssets/mission_statement_logo.jpg"
import { Row, Col } from "react-bootstrap"
import Friendship from "../EphraimAssets/vision/friendship.png"
import Relation from "../EphraimAssets/vision/relation.png"
import Collab from "../EphraimAssets/vision/collab.png"
import backdrop from "../EphraimAssets/vision/backdrop_video.png"
import play from "../EphraimAssets/vision/controls-play.svg"
import Honesty from "../EphraimAssets/vision/honesty.png"
import Perfection from "../EphraimAssets/vision/Perfection-Driven.png"
import Integrity from "../EphraimAssets/vision/integrity.png"
import Purpose from "../EphraimAssets/vision/Purpose-driven.png"
import Originality from "../EphraimAssets/vision/Originality.png"
import Transparency from "../EphraimAssets/vision/Transparency.png"
export default function Vision() {
  return (
    <div className="vision">
      <section className="container section1 section2 text-center d-flex flex-column justify-content-center">
        <div className="container">
          <img src={logo12} alt="colla" />
          <h1 className="display-4">
            Our <span className="color-blue">Vision & Mission</span>?
          </h1>
          <h3 className="lead">
            To build a world where businesses, globally, can instantly connect
            to fulfill their mutually compatible marketing goals - with no
            third-party involvement or personal data violations.
          </h3>
        </div>

        <div className="container py-4">
          <h4 className="mb-5">We aim to be:</h4>

          <div className="row">
            <div className="col-md-4">
              <h4 className="remove_border">
                A global, verified network of companies, businesses, marketers
                &amp; content publishers.
              </h4>
            </div>

            <div className="vertline col-md-4">
              <h4 className="transparent remove_border">
                A transparent marketing platform that they can trust.
                <br></br>
              </h4>
            </div>
            <div className="vertline col-md-4">
              <h4 className="remove_border">
                Affordable, yet hyper-precise.
                <br />
                <br />
                <br />
              </h4>
            </div>
          </div>
        </div>

        <div className="downld col-md-12 pt-5">
          <a
            alt="xircls"
            href="window.open('https://www.xircls.com/static/images/website-slide/XIRCLS Vision &amp; Mission.pdf');return false;"
            class="button button-large button-circle button-rounded"
            download=""
          >
            DOWNLOAD OUR VISION AND MISSION DOCUMENT
          </a>
        </div>
      </section>

      <section className="container section1 section2 text-center">
        <h1 className="display-4">
          What We <span className="color-blue">Believe</span>
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <div className="container friendss">
          <Row className="believer">
            <Col className="colimg">
              <img src={Friendship} alt="Friendship" />
            </Col>
            <Col className="col-md-7">
              <h2 className="belivetext content-title">
                <span className="color-blue">Collaboration</span>, not
                Competition.
              </h2>
              <h6 className="lead">
                Living in an atmosphere of fear, doubt and competition, the
                world has come to accept this seeming status quo. XIRCLS aims to
                build a revolutionary alternative, not just in the field of
                marketing technology, but in the way that we choose to live our
                lives. We want to show the world there is a gentler way to live.
              </h6>
            </Col>
          </Row>
        </div>
      </section>

      <section className="container section1 section2 text-center">
        <div className="container">
          <Row className="believer">
            <Col className="col-md-7 ">
              <h2 className="belivetext content-title">
                Relationships <span className="color-blue">Drive Growth</span>
              </h2>
              <h6 className="lead">
                As long as money trumps relationships in the world of business,
                companies will struggle to acquire and retain their customers.
                <br></br>
                <br></br>
                Because any company that pays the ad platform or aggregator more
                money, gets the customer.<br></br>
                <br></br>
                At XIRCLS, when businesses collaborate, they are invested in
                each other’s growth and success is shared, not won.
              </h6>
            </Col>
            <Col className="colimg">
              <img src={Relation} alt="Relation" />
            </Col>
          </Row>
        </div>
      </section>

      <section className="container section1 section2 text-center">
        <div className="container">
          <Row className="believer">
            <Col className="colimg">
              <img src={Collab} alt="Collab" />
            </Col>
            <Col className="col-md-7">
              <h2 className="belivetext content-title">
                We'll Be a Global{" "}
                <span className="color-blue">Repository of Marketing</span> Best
                Practices
              </h2>
              <h6 className="lead">
                As a one-of-its-kind business network founded on the principles
                of collaboration & goodwill, XIRCLS will become its own
                knowledge economy built on tried-and-tested marketing methods,
                strategies & results, tips & advice from merchants and marketing
                professionals with decades of on-the-ground marketing experience
                from around the world.<br></br>
                <br></br>
                This repository will serve to offset the hype & confusion
                surrounding current marketing fads by giving young entrepreneurs
                and marketers a more balanced and seasoned viewpoint on how to
                grow their business for the long term.
              </h6>
            </Col>
          </Row>
        </div>
      </section>

      <section className="container section1 section2 text-center">
        <div className="believe container container-fluid item-align-center">
          <h1 className="display-4">
            Our Mission <span className="color-blue">in Action</span>
          </h1>
          <br></br>
          <h4>
            To empower them to market on their own terms, we will always ensure
            that companies:{" "}
          </h4>
          <br></br>
          <br></br>
          <div className="contents">
            <div className="points">
              <span className="material-symbols-outlined">done</span>
              <h4>
                Can instantly connect with any non-competing business, globally,
                nationally, locally and hyperlocally
              </h4>
            </div>
            <br></br>
            <div className="points">
              <span className="material-symbols-outlined">done</span>
              <h4>
                Will reach ONLY genuine, verified customers via their partners
              </h4>
            </div>
            <br></br>
            <div className="points">
              <span className="material-symbols-outlined">done</span>
              <h4>
                Will have 100% control over offer distribution i.e. they will
                reach actual customers, not a demographic group (without data
                shared)
              </h4>
            </div>
            <br></br>
            <div className="points">
              <span className="material-symbols-outlined">done</span>
              <h4>
                Can discreetly reward their new and existing customers with no
                public display of offers
              </h4>
            </div>
            <br></br>
            <div className="points">
              <span className="material-symbols-outlined">done</span>
              <h4>
                Will always be able to track campaign performance{" "}
                <u> down to every single lead and customer.</u> (without data
                shared)
              </h4>
            </div>
            <br></br>
            <div className="points">
              <span className="material-symbols-outlined">done</span>
              <h4>
                Will be respected with 100% transparency in our pricing &amp;
                performance reports
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="ourculture1  section1 section2 text-center">
        <div className="ourculture container-fluid item-align-center">
          <div className="ourculture2 container">
            <Row className="row">
              <Col className="ourculturetitle">
                <div>
                  <h2>
                    <bg>Our Culture</bg>
                  </h2>
                </div>
              </Col>
              <div className="col-lg-8">
                <Row className="row dark clearfix mt-lg-6">
                  <Col className="col-md-6 ">
                    <div className="fbox">
                      <h4 className="text-white">
                        <bg>Attract. Never Promote.</bg>
                      </h4>
                      <h5 className="text-white">
                        <bg>
                          XIRCLS overturns the traditional mindset of persuasion
                          &amp; aggression - an outward flow of energy and
                          therefore wasteful - to create a culture of value
                          creation that is sustainable and benefits everyone
                          involved.
                        </bg>
                      </h5>
                    </div>
                  </Col>

                  <Col className="col-md-6 ">
                    <div className="fbox">
                      <h4 className="text-white">
                        {" "}
                        <bg>Inspire Trust</bg>
                      </h4>
                      <h5 className="text-white">
                        <bg>
                          Through the principle of service, we aim to create a
                          global community of individuals who consistently work
                          to become pillars of support. We are the people you
                          turn to when the road ahead seems unclear. Knowing
                          fully well that when you reach out to us, you will
                          receive what is best for you.
                        </bg>
                      </h5>
                    </div>
                  </Col>

                  <Col className="service col-md-12 ">
                    <div className="fbox">
                      <h4 className="text-white">
                        <bg>Always Be of Service.</bg>
                      </h4>
                      <h5 className="text-white">
                        <bg>
                          To constantly deliver value, we assume a consciously
                          directed state of inner reflection that can be summed
                          up with the question: “How can I be of service to
                          someone today?”
                        </bg>
                      </h5>

                      <h5 className="text-white">
                        <bg>
                          Service is not just a concept at XIRCLS. It is the
                          greater aim that we, and the people who join us on our
                          journey, live by. It gives purpose to our interactions
                          with everyone around us, from clients and coworkers to
                          friends &amp; family to a stranger on the street.
                        </bg>
                      </h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
        </div>
      </section>

      <section className="container section1 section2 text-center">
        <div className="container">
          <Row>
            <Col className="culture col-md-7 ">
              <h2 class="impculture content-title">
                <span className="color-blue">
                  Why culture is important to us.
                </span>
              </h2>
              <h5>
                1. We believe it is crucial to our long-term success that the
                values we’ve defined for ourselves and our team bind us to a
                common purpose greater than our individual selves and keep us on
                path with our mission.<br></br>
                <br></br>
                2. To counter a naively self-celebratory culture that idolizes
                the grifter hero who goes for all he can get, regardless of its
                side-effects.<br></br>
                <br></br>
                3. To build a global team of employees, interns and partners who
                are aligned with our values & goals.
              </h5>
            </Col>
            <Col
              className="videodemo modal-image home-all-devices-access_now-embed-image"
              data-ref="home-all-devices-access_now"
              data-toggle="modal"
              data-target="#homeVideoModal"
            >
              <a href="https://bit.ly/XIRCLSDemo" target="blank">
                <img
                  src={backdrop}
                  className="backdropimg img-fluid "
                  alt=""
                  title=""
                />
                <img src={play} className="playimg" alt="" />
              </a>
            </Col>
          </Row>
        </div>
      </section>
      <section className="container section1 section2 text-center">
        <div className="container">
          <Row className="row col-mb-50">
            <div className="  justify-content-center ">
              <h1 className="text center">
                Our Core <span className="color-blue">Values</span>{" "}
              </h1>
            </div>

            <Col className="col-md-4">
              <div className="core">
                <div>
                  <img className="logo-image" alt="Honesty" src={Honesty} />
                </div>
                <div className="coretext">
                  <h4>HONESTY</h4>
                  <h5>
                    We are always willing to learn. We know our strengths, but
                    also our shortcomings. All our actions stem from here.
                  </h5>
                </div>
              </div>
            </Col>

            <Col className="col-md-4">
              <div className="core">
                <div>
                  <img
                    className="logo-image"
                    alt="Perfection"
                    src={Perfection}
                  />
                </div>
                <div className="coretext">
                  <h4>PERFECTION-DRIVEN</h4>
                  <h5>
                    We aim for 100% efficiency in all our processes, knowing
                    that the effort towards perfection can never stop.
                  </h5>
                </div>
              </div>
            </Col>

            <Col className="col-md-4">
              <div className="core">
                <div>
                  <img className="logo-image" alt="Integrity" src={Integrity} />
                </div>
                <div className="coretext">
                  <h4>INTEGRITY</h4>
                  <h5>
                    We don’t compromise. We don’t take shortcuts, even if it
                    means taking that extra moment to do something right.
                  </h5>
                </div>
              </div>
            </Col>

            <Col className="col-md-4">
              <div className="core">
                <div>
                  <img className="logo-image" alt="Purpose" src={Purpose} />
                </div>
                <div class="coretext">
                  <h4>PURPOSE-DRIVEN</h4>
                  <h5>
                    A clear sense of purpose informs everything we do. We are
                    not superfluous in logic, design and communication.
                  </h5>
                </div>
              </div>
            </Col>

            <Col className="col-md-4">
              <div className="core">
                <div>
                  <img
                    className="logo-image"
                    alt="Originality"
                    src={Originality}
                  />
                </div>
                <div className="coretext">
                  <h4>ORIGINALITY</h4>
                  <h5>
                    We create solutions that subvert common perception. We are
                    original in idea and execution.
                  </h5>
                </div>
              </div>
            </Col>

            <Col className="col-md-4">
              <div className="core">
                <div>
                  <img
                    className="logo-image"
                    alt="transparency"
                    src={Transparency}
                  />
                </div>
                <div className="coretext">
                  <h4>TRANSPARENCY</h4>
                  <h5>
                    With a core team of media professionals &amp; journalists,
                    we’re highly committed to the greatest levels of
                    transparency in both our professional and personal lives.
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}
