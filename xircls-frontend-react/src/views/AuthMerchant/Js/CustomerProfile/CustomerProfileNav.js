import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Row } from 'reactstrap'
import '../../Css/CustomerProfile.css'

const CustomerProfileNav = () => {
    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/")

    return (
        <>
            <Row className='d-flex justify-content-between align-items-center'>
                <Link id='cpNav-1' className={`${splitLocation[2] === "customer_details" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_details">
                    <div className="w-100 underline-color">Customer Details</div>
                </Link>
                <Link id='cpNav-2' className={`${splitLocation[2] === "customer_basic" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_basic/">
                    <div className="w-100 underline-color">Basic Details</div>
                </Link>
                <Link id='cpNav-3' className={`${splitLocation[2] === "customer_vehicle" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_vehicle">
                    <div className="w-100 underline-color">Vehicle Details</div>
                </Link>
                <Link id='cpNav-4' className={`${splitLocation[2] === "customer_products" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_products">
                    <div className="w-100 underline-color">Product Details</div>
                </Link>
                <Link id='cpNav-5' className={`${splitLocation[2] === "customer_offer" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_offer">
                    <div className="w-100 underline-color">Offer</div>
                </Link>
                <Link id='cpNav-6' className={`${splitLocation[2] === "customer_booking" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_booking">
                    <div className="w-100 underline-color">Booking</div>
                </Link>
                <Link id='cpNav-7' className={`${splitLocation[2] === "customer_invoice" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_invoice">
                    <div className="w-100 underline-color">Invoices</div>
                </Link>
                <Link id='cpNav-8' className={`${splitLocation[2] === "customer_call" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_call">
                    <div className="w-100 underline-color">Call</div>
                </Link>
                <Link id='cpNav-9' className={`${splitLocation[2] === "customer_loyalty" && 'active-nav'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col customer_nav`} to="/merchant/customer_loyalty">
                    <div className="w-100 underline-color">Loyalty Points</div>
                </Link>
            </Row>
        </>
    )
}

export default CustomerProfileNav