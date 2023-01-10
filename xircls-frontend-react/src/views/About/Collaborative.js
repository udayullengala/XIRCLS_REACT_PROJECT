import React from "react"
import '../../assets/scss/EphraimScss/App.scss'
import colla from "../EphraimAssets/why_collaborative_marketing_logo.png"
import { section1, section2, section3 } from "./CollaborativeConfig"
import CardLeft from "../Homepage/JS/CardLeft"
import CardRight from "../Homepage/JS/CardRight"
import Join from "../Homepage/JS/Join"
import JoinSign from "../Homepage/JS/JoinSign"

export default function Collaborative() {
  return (
    <div className="collaborative">
      <section className="container section1 text-center d-flex flex-column justify-content-center">
        <div className="container">
          <img src={colla} alt="colla" />
          <h1 className="display-4">
            Why <span className="color-blue">Collaborative Marketing</span>?
          </h1>
          <p className="lead">
            We believe the future of marketing must be collaborative.
          </p>
        </div>
      </section>
      <section className="container section1 section2 text-center">
        <div className="container">
          <h1 className="display-5 mb-4">
            XIRCLS is a <span className="color-blue">technology inspired</span>{" "}
            by universal fundamentals.
          </h1>
          <p className="lead">
            “The journey to the self is through the other.”
          </p>
          <p className="lead">
            In the history of mankind, we see this principle expressed time and
            again, across ancient texts, <br /> philosophical doctrines and the
            world of literature.
          </p>
          <p className="lead">
            Science too acknowledges all life as a complex network of cells in
            perpetual motion, <br /> operating in absolute harmony within
            themselves and with each other.
          </p>
          <p className="lead">
            It is as if we exist in a state of completion and incompletion all
            at once.
          </p>
          <p className="lead">
            Call it scientific, spiritual or divine, life seems to be an eternal
            journey that begins with you, <br /> leads to someone else and
            finally, comes back to you. A complete XIRCL.
          </p>
          <p className="lead">
            XIRCLS is an attempt to leverage technology to give this universal
            principle form and function.
          </p>
        </div>
      </section>
      <div className="container my-5">
        <div className="container section8">
          {section1.map((div, index) => {
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
      <section className="container section3 text-center">
        <div className="container">
          <h1 className="display-5 mb-4">
            <u className="color-blue">What Collaboration means to us.</u>
          </h1>
          <p className="lead">
            In an ‘Every Man for Himself’ kind of world, it’s no surprise that we’re often asked <br /> - what’s in it for XIRCLS, especially in the long run?
          </p>
          <p className="lead">
            Collaboration, to us, will always mean one thing - That we are all in it together.
          </p>
          <p className="lead">
            Yes, we have big dreams. Yes, we want to make the world a gentler place.
          <br /> Yes, we want to create a safe haven for businesses dying every day
           <br /> in the face of crony capitalism and hateful greed.
          </p>
          <p className="lead">
          But we’re not in it for the glory. We promise to leave that - as well as your customers and profits
          <br /> - to you, our merchants. That’s why XIRCLS will never communicate with your customers directly.
           <br /> We’ll try our very best to remain anonymous to your customers.
          </p>
        </div>
      </section>
      <div className="container my-5">
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
      <div className="container my-5 pb-5 section4">
        <h1 className="color-blue my-5 text-center py-5 display-5"><u>Benefits of Collaborative Marketing:</u></h1>
        <div className="container section8">
          {section3.map((div, index) => {
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
      <Join />
      <JoinSign />
    </div>
  )
}
