import { Card, CardBody, Container, Row, Col } from 'reactstrap'
import { NavLink, useLocation } from 'react-router-dom'
import "../../Css/Offercampaign.css"

const OfferCampaign = () => {

    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/")

    return (
        <Row className='d-flex justify-content-between align-items-center mb-3'>
            <NavLink style={{ paddingBottom: '0.5rem' }} className={`${splitLocation[2] === 'offer_value' && 'active'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col`} to="/merchant/offer_value">
                <div className="w-100 underline-color">Value</div>
            </NavLink>
            <NavLink style={{ paddingBottom: '0.5rem' }} className={`${splitLocation[2] === 'offer_acquisition' && 'active'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col`} to="/merchant/offer_acquisition">
                <div className="w-100 underline-color">Acquisition</div>
            </NavLink>
            <NavLink style={{ paddingBottom: '0.5rem' }} className={`${splitLocation[2] === 'offer_retention' && 'active'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col`} to="/merchant/offer_retention">
                <div className="w-100 underline-color">Retention</div>
            </NavLink>
            <NavLink style={{ paddingBottom: '0.5rem' }} className={`${splitLocation[2] === 'offer_action' && 'active'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col`} to="/merchant/offer_action">
                <div className="w-100 underline-color">Action</div>
            </NavLink>
            <NavLink style={{ paddingBottom: '0.5rem' }} className={`${splitLocation[2] === 'offer_email' && 'active'} mx-0 px-0 text-secondary cursor-pointer fw-bold text-center fs-6 mb-0 color-remover col`} to="/merchant/offer_email">
                <div className="w-100 underline-color">Email Customization</div>
            </NavLink>
        </Row>
    )
}

export default OfferCampaign