import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Info, Share2, User } from "react-feather"

const CustomerBasicNav = () => {
    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/")
    return (
        <>
            <div className="customer-basic-details d-flex gap-2">
                <Link className={`${splitLocation[3] === "" && 'active-3'} rounded-2 d-flex justify-content-center align-items-center p-custom text-secondary`} to='/merchant/customer_basic/'><User size={20} />Basic Information</Link>
                <Link className={`${splitLocation[3] === "basic_personal" && 'active-3'} rounded-2 d-flex justify-content-center align-items-center p-custom text-secondary`} to='/merchant/customer_basic/basic_personal'><User size={20} />Personal Information</Link>
                <Link className={`${splitLocation[3] === "basic_idproof" && 'active-3'} rounded-2 d-flex justify-content-center align-items-center p-custom text-secondary`} to='/merchant/customer_basic/basic_idproof'><User size={20} />Identity Proof Information</Link>
                <Link className={`${splitLocation[3] === "basic_address" && 'active-3'} rounded-2 d-flex justify-content-center align-items-center p-custom text-secondary`} to='/merchant/customer_basic/basic_address'><Share2 size={20} />Address</Link>
                <Link className={`${splitLocation[3] === "basic_companyinfo" && 'active-3'} rounded-2 d-flex justify-content-center align-items-center p-custom text-secondary`} to='/merchant/customer_basic/basic_companyinfo'><Info size={20} />Company Information</Link>
                <Link className={`${splitLocation[3] === "basic_account" && 'active-3'} rounded-2 d-flex justify-content-center align-items-center p-custom text-secondary`} to='/merchant/customer_basic/basic_account'><User size={20} />Account</Link>
            </div>
        </>
    )
}

export default CustomerBasicNav