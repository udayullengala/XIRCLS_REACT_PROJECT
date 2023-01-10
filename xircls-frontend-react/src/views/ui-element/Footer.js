import React from "react"
import logo from "../EphraimAssets/logo-dark.png"
import india from "../EphraimAssets/india.svg"
import usa from "../EphraimAssets/usa.svg"
import { SiGmail, SiShopify, SiWoo, SiMagento } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="pt-3">
      <div className="container main-footer mb-4">
        <div className="container grid1">
          <img src={logo} alt="logo" />
          <br />
          <small>
            The World's First Decentralized, Collaborating Marketing Network.
          </small>
          <div className="mb-3 mt-4">
            <h6>HQ</h6>
            <small>
              G-08, The Summit Business Bay by Omkar, <br /> Andheri (East),{" "}
              <br /> Mumbai - 400093
            </small>
          </div>
          <div className="mb-3">
            <h6>Registered Address</h6>
            <small>
              7, Mahim House, Mogal Lane, <br /> Mahim, <br /> Mumbai - 400016
            </small>
          </div>
          <div>
            <small>
              <img src={india} alt="" className="call"/> +91 9969 333 666 <br />
              <img src={usa} alt="" className="call"/> +1 (936) 333 6363 <br />
              <SiGmail color="#a22f2f" size="18px" />
              <span className="mx-3">info@xircls.com</span>
            </small>
          </div>
        </div>
        <div className="container mt-4 w-100 product">
          <div className="mb-2 ">
            <h6>Products</h6>
            <p>Infiniti</p>
            <p>Semper Fi</p>
            <p>Sniper</p>
          </div>
          <h6 className="mb-3">Careers</h6>
          <h6 className="mb-3">Channel Partners</h6>
          <div>
            <h6>Contact Us</h6>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex flex-column">
                <SiShopify color="#95bf47" size="28px" />
                <small>Shopify</small>
              </div>
              <div className="d-flex flex-column">
                <SiWoo color="#ad62f3" size="28px" />
                <small>Woo Commerce</small>
              </div>
              <div className="d-flex flex-column">
                <SiMagento color="#eb5202" size="28px" />
                <small>Magento</small>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 nums">
          <div>
            <p className="num">359411</p>
            <p>Real-Time Marketing Collaborations Enabled</p>
          </div>
          <div>
            <p className="num">111</p>
            <p>Partner Companies</p>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <div className="d-flex justify-content-between">
          <small className="text-muted">
            XIRCLS is a registered trademark of ALTISSADVANCE TECH PVT. LTD.
          </small>
          <small className="text-muted text-end">
            Copyright © 2022 All Rights Reserved. AltissAdvance Tech Private
            Limited
          </small>
        </div>
        <small className="d-flex justify-content-center text-muted gap-2 mt-3">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Employee Login</span>
        </small>
      </div>
    </footer>
  )
}
