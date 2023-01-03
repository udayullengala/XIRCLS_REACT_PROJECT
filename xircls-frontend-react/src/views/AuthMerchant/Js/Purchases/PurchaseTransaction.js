import React from "react"
import { Container, Card, CardBody, Row, Col, Input } from 'reactstrap'
import '../../Css/Purchases.css'
import PurchaseNav from "./PurchaseNav"
import DataTable from "react-data-table-component"

const PurchaseTransaction = () => {

    return (
        <>
            <Container fluid className="purchases px-0">
                <Row className="match-height">
                    <Col md={3}>
                        <Card>
                            <CardBody>
                                <PurchaseNav />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <Card>
                            <CardBody>
                                <Row className='justify-content-end mx-0'>
                                    <Col className='d-flex align-items-center justify-content-center mt-1' md='4' sm='12'>
                                        <h4 className="fs-3">All Transactions</h4>
                                    </Col>
                                    <Col className='d-flex align-items-center justify-content-end mt-1' md='4' sm='12'>
                                        <Input
                                            className='dataTable-filter form-control ms-1'
                                            style={{ width: `180px`, height: `2.714rem` }}
                                            type='text'
                                            bsSize='sm'
                                            id='search-input-1'
                                            placeholder="Search Transactions"
                                        />
                                    </Col>
                                </Row>
                                <div className='react-dataTable'>
                                    <DataTable
                                        pagination
                                        selectableRowsNoSelectAll
                                        className='react-dataTable table'
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PurchaseTransaction