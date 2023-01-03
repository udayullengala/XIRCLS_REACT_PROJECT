import React from "react"
import { Bell, Globe, User } from "react-feather"
import { NavLink, useLocation } from 'react-router-dom'
import '../../Css/Purchases.css'

const PurchaseNav = () => {

    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/")

    return (
        <>
            <div className="purchases">
                <NavLink className={`${ splitLocation[2] === 'purchase_sub' && 'active'} w-100 rounded-2 d-flex align-items-center gap-1 p-custom text-secondary`} to='/merchant/purchase_sub'><User size={20} />Subscription Manager</NavLink>
                <NavLink className={`${ splitLocation[2] === 'purchase_transaction' && 'active'} w-100 rounded-2 d-flex align-items-center gap-1 p-custom text-secondary mt-1`} to='/merchant/purchase_transaction'><Bell size={20} />All Transactions</NavLink>
                <NavLink className={`${ splitLocation[2] === 'purchase_invoice' && 'active'} w-100 rounded-2 d-flex align-items-center gap-1 p-custom text-secondary mt-1`} to='/merchant/purchase_invoice'><User size={20} />XIRCLS Invoices</NavLink>
                <NavLink className={`${ splitLocation[2] === 'purchase_wallet' && 'active'} w-100 rounded-2 d-flex align-items-center gap-1 p-custom text-secondary mt-1`} to='/merchant/purchase_wallet'><Globe size={20} />Wallet</NavLink>
            </div>
        </>
    )
}

export default PurchaseNav