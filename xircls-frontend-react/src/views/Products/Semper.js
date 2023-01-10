import React from "react"
import '../../assets/scss/EphraimScss/App.scss'
import semper from "../EphraimAssets/Semper Fi heart-logo.jpg"
import Cards from "../Homepage/JS/Cards"
import { section1, section2 } from "./SemperConfig"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import JoinSign from "../Homepage/JS/JoinSign"
import CardLeft from "../Homepage/JS/CardLeft"
import CardRight from "../Homepage/JS/CardRight"
import videoImage from "../EphraimAssets/semper/videoback.jpg"
import control from "../EphraimAssets/semper/control.svg"

export default function Semper() {
  return (
    <div className="semper">
      <section className="container section1 text-center d-flex flex-column justify-content-center">
        <div className="container">
          <img src={semper} alt="colla" />
          <h1 className="display-4 mb-3">
            <span className="color-blue">Retain </span>
            Customers with Rewards <br />
            <span className="color-blue"> You Don’t Pay For.</span>
          </h1>
          <p className="lead">
            Semper Fi* is the only customer loyalty program in the world where{" "}
            <br />
            other businesses pay to help YOU retain YOUR customers!
          </p>
          <small>
            *Semper Fi comes from Semper Fidelis - a Latin phrase that means
            'Always Loyal’.
          </small>
          <div className="join-button mt-5">
            <button className="btn">START A SEMPER FI CAMPAIGN</button>
          </div>
        </div>
      </section>
      <section className="container section2">
        <div className="row my-5 gap-1">
          {section1.map((div) => (
            <div className="col-sm py-2" key={div.title}>
              <Cards
                image={div.image}
                title={div.title}
                content={div.content}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="container section3">
        <div className="container">
          <h1 className="display-4 text-center">How Semper Fi is Different</h1>
          <div className="container d-flex flex-column flex-sm-row my-5 justify-content-center">
            <div className="py-2 px-3 text-start bordered">
              <h4 className="color-blue my-4">Typical Loyalty Programs</h4>
              <p className="d-flex align-items-center">
                <AiOutlineCloseCircle
                  color="#bc1414"
                  size="20px"
                  className="ms-4 me-2"
                />
                Reward points take too long to collect
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCloseCircle
                  color="#bc1414"
                  size="20px"
                  className="ms-4 me-2"
                />
                Collect points stay unredeemed
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCloseCircle
                  color="#bc1414"
                  size="20px"
                  className="ms-4 me-2"
                />
                Doesn't address a customer's immediate needs; instant
                gratification is missing
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCloseCircle
                  color="#bc1414"
                  size="20px"
                  className="ms-4 me-2"
                />
                Your rewarding capacity is limited to your own marketing budget/
                product or service range
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCloseCircle
                  color="#bc1414"
                  size="20px"
                  className="ms-4 me-2"
                />
                Most importantly, all customer retention costs come from your
                own pocket!
              </p>
            </div>
            <div className="py-2 px-3 text-start bordered">
              <h4 className="color-blue my-4">Semper Fi</h4>
              <p>
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                Reward instantly
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                No reward points to collect
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                Instant customer gratification
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                Cross-brand relationship marketing
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                Reward every engagement & purchase
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                Run a rewards program that works across borders!
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                Ensure your customers receive the star treatment everywhere they
                go
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                Reward across categories & experiences
              </p>
              <p className="d-flex align-items-center">
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-4 me-2"
                />{" "}
                Cultivate loyalty without fear of marketing expense!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="container pb-5 section4">
          <h1 className="color-blue mt-5 text-center pt-5 display-5">
            Create a <u>virtuous </u>cycle of goodwill.
          </h1>
          <p className="lead text-center">
            Equate your brand with unlimited value in the minds of your
            customers. <br />
            Make their purchases with you a source of perpetual delight!
          </p>
          <div className="container section8">
            {section2.map((div, index) => {
              if (index % 2) {
                return (
                  <CardLeft
                    key={div.title}
                    image={div.image}
                    title={div.title}
                    content={div.content}
                  />
                )
              } else {
                return (
                  <CardRight
                    key={div.title}
                    image={div.image}
                    title={div.title}
                    content={div.content}
                  />
                )
              }
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid mb-5 py-5 section5">
          <div className="container text-center">
            <h1 className="display-4 fw-normal">
              Instant Gratification Never Felt So Good.
            </h1>
            <p className="lead fw-normal">
              Generously reward your customers on every single purchase without
              feeling the pinch.
            </p>
            <p className="lead fw-normal">
              Reserve your marketing budget for other activities <br />
              while actively cultivating loyalty for your brand every single
              day.
            </p>
          </div>
        </div>
      </section>
      <section className="section6 p-5">
        <div className="container">
          <div className="row container">
            <div className="col-12 col-md-4 align-self-center mb-3">
              <h1 className="display-5">Why Customer Retention Makes Sense.</h1>
            </div>
            <div className="col-12 col-md-8 my-3">
              <div className="mb-5 row">
                <div className="col-12 col-sm-6">
                  <p className="lead">Lower Spending Acquiring</p>
                  <p className="lead">
                    Acquiring a new customer is 5 times more expensive than
                    retaining an existing customer.
                  </p>
                </div>
                <div className="col-12 col-sm-6">
                  <p className="lead">Higher Conversion</p>
                  <p className="lead">
                    The probability of selling to an existing customer is
                    60-70%. The probability of selling to a new prospect is as
                    little as 5-20%.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <p className="lead">Greater Profits</p>
                  <p className="lead">
                    Increasing customer retention rates by 5% increases profits
                    by 25-95%.
                  </p>
                </div>
                <div className="col-12 col-sm-6">
                  <p className="lead">Improved CLV</p>
                  <p className="lead">
                    Lower your customer churn rates and increase your Customer
                    Lifetime Value (CLV), both important indicators of your
                    business health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section7 my-5">
        <div className="container">
          <div className="py-5 mt-5">
            <div className="row flex-lg-row-reverse align-items-center g-4 py-5">
              <div className="col-12 col-sm-12 col-lg-6 d-flex justify-content-center case">
                <a href="https://bit.ly/XIRCLSDemo" rel="noreferrer">
                  <img
                    src={videoImage}
                    className="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    loading="lazy"
                  />
                  <img src={control} alt="" className="control" />
                </a>
              </div>
              <div className="col-lg-6">
                <h1 className="display-4 mb-3 color-blue">
                  Launch A Perpetual Rewards Loop
                </h1>
                <p className="lead">
                  Gift your customers with partner offers every single time they
                  buy from you to keep them coming back for more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container my-5">
        <div className="text-center my-5 py-5">
          <h1 className="display-4 fw-normal color-blue">
            Give value to become truly invaluable.
          </h1>
          <p className="fw-normal lead mt-5">
            You must give to receive.’ We help you put this principle to
            practice.
          </p>
          <p className="fw-normal lead">
            Instead of leaving it to your customers to reap the benefits of
            their loyalty to you, we ask you to <br /> take the first step and
            reward them from their very first purchase – and forever after that.
          </p>
          <p className="fw-normal lead mb-5 ">Consistently give them value.</p>
        </div>
      </section>
      <JoinSign />
    </div>
  )
}
