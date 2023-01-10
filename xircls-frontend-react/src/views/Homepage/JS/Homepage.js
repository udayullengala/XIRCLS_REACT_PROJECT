import React from "react"
import '../../../assets/scss/EphraimScss/App.scss'
import { AiFillCaretRight, AiOutlineCheckCircle } from "react-icons/ai"
import { GiCheckMark } from "react-icons/gi"
import Carousel from "./Carousel"
import LogoSection from "./LogoSection"
import Cards from "./Cards"
import {
  section1,
  section2,
  section3,
  section4,
  section5,
  section6
} from "./HomeConfig"
import CardRight from "./CardRight"
import CardLeft from "./CardLeft"
import Join from "./Join"
import JoinSign from "./JoinSign"

export default function Homepage() {
  return (
    <div className="homepage">
      <Carousel />
      <LogoSection />
      <div className="container-fluid section1">
        <div className="container">
          <div className="pb-5">
            <h1 className="display-5">Partner with other Businesses</h1>
            <h5>
              Across Sectors, Online or Offline, Anywhere in the World.
              Instantly.
            </h5>
          </div>
          <div className="pb-5">
            <h1 className="display-5">Market Directly to their Customers</h1>
            <h5>
              At the Moment of Transaction. Without Customer Data being shared.
            </h5>
          </div>
          <div>
            <h1 className="display-5">Retain Existing Customers</h1>
            <h5>At Zero Cost, via Partner Rewards.</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid section2">
          <h1 className="display-4">
            Drive high-quality traffic to your website. <br /> Optimize for more
            conversions!
          </h1>
          <h5 className="my-4">
            Leverage collaborations to transform your website sales funnel.
          </h5>
          <div className="row my-5 gap-1">
            {section1.map((div) => (
              <div className="my-card col-sm py-2" key={div.title}>
                <Cards
                  image={div.image}
                  title={div.title}
                  content={div.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid section3 mb-5 p-5">
        <a href="/" className="container btn">
          <h4 className="my-2">
            No sign-up fee. No monthly commitment.{" "}
            <u>
              Sign up here. <AiFillCaretRight />
            </u>
          </h4>
        </a>
      </div>
      <div className="container-fluid text-center section4 py-5">
        <div className="container">
          <div className="pb-5">
            <h1 className="display-5 color-blue">
              100% Genuine Customer Reach. <br />
              <u>Guaranteed!</u>
            </h1>
            <h6>
              Engage genuine customers, not anonymous users on the internet.
            </h6>
          </div>
          <div className="pb-5">
            <h1 className="display-5 color-blue">
              100% Verification. <br />
              <u> 0% Fraud</u>
            </h1>
            <h6>
              We guarantee your every marketing dollar is spent to reach a
              genuine human being, verified in real time by your partners.
            </h6>
          </div>
        </div>
      </div>
      <div className="container-fluid section5">
        <div className="container">
          <div className="pb-4">
            <h1 className="display-5">
              Instant Brand Collaborations For Lead Nurturing, Conversions,
              Customer Retention & Loyalty
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid section2">
          <h1 className="display-4 my-4">Join a Global Network of Companies</h1>
          <div className="row my-5 py-4 my-card">
            {section2.map((div) => (
              <div className="col-sm-6 col-lg-3" key={div.title}>
                <Cards
                  image={div.image}
                  title={div.title}
                  content={div.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid section6">
        <div className="container py-5">
          <div className="py-3">
            <h1 className="display-3 text-center">
              Collaborate to Do Things <br />
              You Could Never Do Before.
            </h1>
          </div>
          <div className="d-flex justify-content-center py-4">
            <button className="btn">JOIN THE NETWORK</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid section2">
          <h1 className="display-4">Why Collaboration Makes Sense</h1>
          <h5 className="my-4">
            Partnerships Make Marketing Smarter, Cost-Efficient & Personalised.
          </h5>
          <div className="row my-5">
            {section3.map((div) => (
              <div className="col-sm-6 col-lg-4 mb-4" key={div.title}>
                <div className="my-card h-100 p-3">
                  <Cards
                    image={div.image}
                    title={div.title}
                    content={div.content}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="container section7">
          <h1 className="display-4">How It Works</h1>
          <p className="my-3 lead">
            Our proprietary, real-time matchmaking algorithms enable you to:
          </p>
          <div className="row my-5 mx-3">
            <div className="col-sm py-2">
              <h4 className="color-blue my-2">1. Connect</h4>
              <p>
                Invite, connect or get matched with other non-competing
                businesses, locally or globally.
              </p>
            </div>
            <div className="col-sm py-2">
              <h4 className="color-blue my-2">2. Collaborate</h4>
              <p>
                Form strategic partnerships to help you meet your marketing
                goals.
              </p>
            </div>
            <div className="col-sm py-2">
              <h4 className="color-blue my-2">3. Cross-Market</h4>
              <p>
                Run a campaign for precise customer reach or win customer
                loyalty with rewards sourced from your partners.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="container section8">
          {section4.map((div, index) => {
            if (index % 2) {
              return (
                <CardRight
                  key={div.title}
                  image={div.image}
                  title={div.title}
                  content={div.content}
                />
              )
            } else {
              return (
                <CardLeft
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
      <div className="container">
        <div className="container-fluid section2 section9">
          <h1 className="display-4">Join Hands to Nurture & Retain!</h1>
          <h5 className="my-4">
            Instantly collaborate with non-competing companies in allied
            categories to:
          </h5>
          <div className="container d-flex flex-column flex-sm-row my-5 justify-content-center">
            <div className="py-2 px-3 text-start bordered">
              <h4 className="color-blue my-4">
                <u>Boost your Conversion Rate</u>
              </h4>
              <p>
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-3 me-2"
                />
                Dip into an unlimited pool of exclusive partner offers
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-3 me-2"
                />
                Trigger your choice of partner offers against purchases &
                actions
              </p>
            </div>
            <div className="py-2 px-3 text-start bordered">
              <h4 className="color-blue my-4">
                <u>Reward & Retain Customers</u>
              </h4>
              <p>
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-3 me-2"
                />{" "}
                Curate partner offers for different customer types
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="green"
                  size="20px"
                  className="ms-3 me-2"
                />{" "}
                Perpetually reward without paying for it from your own pocket!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section1 pb-4">
        <div className="container">
          <div>
            <h1 className="display-5 mb-5">
              Instant Collaborations Without Sharing Customer Data.
            </h1>
            <div className="container w-75">
              <h5 className="mb-5">
                XIRCLS collaborative technology is showing the world that brand
                partnerships are very much possible without a single customer
                data set being shared between companies.
              </h5>
              <h5 className="mb-5">
                We’re also educating companies about how their customer data is
                stolen every single day, starting from their own websites.
              </h5>
              <small>More Coming Soon..</small>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="container section10">
          <h1 className="text-center display-4">
            XIRCLS empowers companies to do together what they could never do
            alone.
          </h1>
          <div className="container pt-5 ps-5">
            <div className="d-flex">
              <GiCheckMark className="me-3" size="22px" />
              <p className="lead">
                Create a Universally Connected Rewards Experience Across
                Borders!
              </p>
            </div>
            <div className="d-flex">
              <GiCheckMark className="me-3" size="22px" />
              <p className="lead">
                Keep their customers in a perpetual rewards loop, lock
                competition out
              </p>
            </div>
            <div className="d-flex">
              <GiCheckMark className="me-3" size="22px" />
              <p className="lead">
                Tap into micro-moments in customer journeys to uncover new
                marketing possibilities
              </p>
            </div>
            <div className="d-flex">
              <GiCheckMark className="me-3" size="22px" />
              <p className="lead">
                Leverage offline customer interactions that drive revenue
              </p>
            </div>
            <div className="d-flex">
              <GiCheckMark className="me-3" size="22px" />
              <p className="lead">
                Implement marketing initiatives hitherto available only to a few
              </p>
            </div>
            <div className="d-flex">
              <GiCheckMark className="me-3" size="22px" />
              <p className="lead">
                Mobilise first-party data for increased Customer Lifetime Value
              </p>
            </div>
            <div className="d-flex">
              <GiCheckMark className="me-3" size="22px" />
              <p className="lead">
                Tap into second-party data without compromising security
                Bookings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section1 pb-4">
        <div className="container">
          <div>
            <h1 className="display-5 mb-5">
              Enhance Your Inbound Marketing Efforts. <br />
              Increase Conversions. Reduce Your CAC!
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid section2">
          <h1 className="display-4">
            For You. <br /> No Matter Who You Are.
          </h1>
          <h5 className="my-4">
            A One-Of-Its-Kind Marketing Platform That Has Something For
            Everyone.
          </h5>
          <div className="row my-5">
            {section5.map((div) => (
              <div className="col-sm-6 col-lg-4 mb-4" key={div.title}>
                <div className="my-card h-100 p-3">
                  <Cards
                    image={div.image}
                    title={div.title}
                    content={div.content}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid section2">
          <h1 className="display-4">How Can You Promote Through XIRCLS?</h1>
          <h5 className="my-4">
            Choose a marketing message ideal for your target/existing customers
          </h5>
          <div className="row my-5">
            {section6.map((div) => (
              <div className="col-sm-6 col-lg-4 mb-4" key={div.title}>
                <div className="h-100 p-3">
                  <Cards image={div.image} title={div.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="container section10">
          <div className="text-center mb-5">
            <h1 className="container display-5 mb-4">
              More than <span className="color-blue">350000+ </span>transactions
              rewarded. <br /> Over <span className="color-blue">100,000</span>{" "}
              Genuine Customers marketed to.
            </h1>
            <p>With zero customer data shared.</p>
          </div>
          <div className="animation-bar">
            <span data-label="350000"></span>
          </div>
        </div>
      </div>
      <Join />
      <JoinSign />
    </div>
  )
}
