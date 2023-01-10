import React, { useState, useRef } from "react"
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp
} from "react-icons/io"
import logo from "../EphraimAssets/logo-dark2.png"
import logo2 from "../EphraimAssets/logo12.jpg"
import logo3 from "../EphraimAssets/Sniper-logo.jpg"
import logo4 from "../EphraimAssets/mission_statement_logo.jpg"
import logo5 from "../EphraimAssets/Infiniti-logo.jpg"
import logo6 from "../EphraimAssets/Semper Fi heart-logo.jpg"
import { Link } from "react-router-dom"

export default function Header() {
  // State to determine the initial position of the nav dropdowns
  const [state, setState] = useState({
    about: false,
    products: false
  })

  // Hamburger Ref
  const ham = useRef()
  const about = useRef()
  const product = useRef()

  //Nav dropdown arrow types. switching between up and down
  // eslint-disable-next-line prefer-const, no-unused-vars
  let arrows = {
    about: state.about ? IoIosArrowUp : IoIosArrowDown,
    products: state.products ? IoIosArrowUp : IoIosArrowDown
  }

  //To disable body scrolling
  const disableBody = () => {
    document.body.classList.toggle("lock")
    ham.current.classList.toggle("open")
  }

  //Enabling and disabling the navbar dropdowns
  const toggleAbout = (e) => {
    if (e === "about") {
      setState({
        about: !state.about,
        products: false
      })
    } else if (e === "product") {
      setState({
        about: false,
        products: !state.products
      })
    }
  }
  const showAbout = (e) => {
    if (e === "about") {
      setState({
        about: true,
        products: false
      })
    } else if (e === "product") {
      setState({
        about: false,
        products: true
      })
    }
  }
  const hideAbout = () => {
    setState({
      about: false,
      products: false
    })
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid ex">
          <a className="navbar-brand" href="/">
            <img className="img-fluid" src={logo} alt="" />
          </a>
          <button
            onClick={() => {
              disableBody()
            }}
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div id="hamburgerBtn" ref={ham}>
              <div className="bar1"></div>
              <div className="bar2" id="crea"></div>
              <div className="bar3"></div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item text-center mx-3">
                <Link
                  to={"/"}
                  className="nav-link active links"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li
                className="nav-item drop mx-3"
                id="about"
                ref={about}
                onMouseEnter={() => {
                  showAbout(about.current.id)
                }}
                onMouseLeave={() => {
                  hideAbout()
                }}
                onClick={() => {
                  toggleAbout(about.current.id)
                }}
              >
                <button className="nav-link">
                  About Us {<arrows.about />}
                </button>
                <div
                  className={state.about ? "dropdown drop-about" : "dropdown"}
                >
                  <div className="dropdown-item">
                    <img className="img-fluid" src={logo2} alt="" />

                    <h5 className="color-blue">WHY XIRCLS</h5>

                    <p className="lead">
                      To Decentralize Online Marketing Praactices.
                    </p>
                    <p className="color-blue">
                      Learn more <IoIosArrowForward size="10px" />{" "}
                    </p>
                  </div>
                  <div className="dropdown-item">
                    <img className="img-fluid" src={logo3} alt="" />
                    <Link
                      to={"/about-us/why-collaborative-marketing"}
                      className="links"
                    >
                      <h5 className="color-blue">
                        WHY COLLABORATIVE MARKETING
                      </h5>
                    </Link>
                    <p className="lead">
                      Because Life Is Collaboration, Not Competition.
                    </p>
                    <Link
                      to={"/about-us/why-collaborative-marketing"}
                      className="links"
                    >
                      <p className="color-blue">
                        Learn more <IoIosArrowForward size="10px" />{" "}
                      </p>
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <img className="img-fluid" src={logo4} alt="" />
                    <Link
                      to={"/about-us/vision-&-mission-statement/"}
                      className="links"
                    >
                      <h5 className="color-blue">VISION & MISSION</h5>
                    </Link>
                    <p className="lead">To Empower Businesses, Globally.</p>
                    <Link
                      to={"/about-us/vision-&-mission-statement/"}
                      className="links"
                    >
                      <p className="color-blue">
                        Learn more <IoIosArrowForward size="10px" />{" "}
                      </p>
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className="nav-item drop mx-3"
                id="product"
                ref={product}
                onMouseEnter={() => {
                  showAbout(product.current.id)
                }}
                onMouseLeave={() => {
                  hideAbout()
                }}
                onClick={() => {
                  toggleAbout(product.current.id)
                }}
              >
                <button className="nav-link">
                  Products {<arrows.products />}
                </button>
                <div
                  className={
                    state.products ? "dropdown drop-about" : "dropdown"
                  }
                >
                  <div className="dropdown-item">
                    <img className="img-fluid" src={logo5} alt="" />
                    <h5 className="color-blue">INFINTI</h5>
                    <p className="lead">Customer Acquisition and Loyalty.</p>
                    <p className="color-blue">
                      Learn more <IoIosArrowForward size="10px" />{" "}
                    </p>
                  </div>
                  <div className="dropdown-item">
                    <img className="img-fluid" src={logo6} alt="" />
                    <Link
                      to={"/products/semperfi/customer-loyalty"}
                      className="links"
                    >
                      <h5 className="color-blue">SEMPER FI</h5>
                    </Link>
                    <p className="lead">Customer Loyalty.</p>
                    <Link
                      to={"/products/semperfi/customer-loyalty"}
                      className="links"
                    >
                      <p className="color-blue">
                        Learn more <IoIosArrowForward size="10px" />{" "}
                      </p>
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <img className="img-fluid" src={logo3} alt="" />
                    <h5 className="color-blue">SNIPER</h5>
                    <p className="lead">Customer Acquisition.</p>
                    <p className="color-blue">
                      Learn more <IoIosArrowForward size="10px" />{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li className="nav-item text-center mx-3">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className="nav-link" href="/">
                  Team
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className="nav-link" href="/">
                  Sign Up
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className="nav-link" href="/">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
