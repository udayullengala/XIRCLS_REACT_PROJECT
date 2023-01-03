import React, { useState } from "react"
import { ArrowLeft, ArrowRight, Edit, Monitor, MoreVertical, Send, Smartphone } from "react-feather"
import { Card, CardBody, Container, Row, Col } from 'reactstrap'
import OfferCampaign from "./OfferCampaign"

import ReactQuill from "react-quill"
import "react-quill/dist/quill.core.css"
import "react-quill/dist/quill.snow.css"
import "react-quill/dist/quill.bubble.css"


const OfferEmail = () => {
    const [rowWidth, setRowWidth] = useState(true)
    const [showWidth, setShowWidth] = useState(1)
    const [title, setTitle] = useState('')
    const [subject, setSubject] = useState('')
    const [tempView, setTempView] = useState(true)
    const [err, setErr] = useState(false)

    const titleChange = (event, type) => {
        if (type === 1) {
            setTitle(event.target.value)
        }
        if (type === 2) {
            setSubject(event.target.value)
        }
    }

    const [text, setText] = useState('')

    const onChange = text => {
        setText(text)
    }


    const [file, setFile] = useState()
    const imageAdd = (e) => {
        console.log(e.target.files)

        const maxSizeKB = 100    //Size in KB
        const maxSize = maxSizeKB * 1024    //File size is returned in Bytes
        if (e.target.files[0].size < maxSize) {
            setFile(URL.createObjectURL(e.target.files[0]))
            setErr(false)
        } else {
            setFile(null)
            setErr(true)
        }

    }

    return (
        <>
            <Container fluid className="offercampaign px-0">
                <Card className={tempView ? '' : 'd-none'}>
                    <CardBody>
                        <Container fluid>
                            <OfferCampaign />
                            <Row className="match-height transitionRow px-1">
                                <Col md={rowWidth ? 4 : 1}>
                                    <Card className="border">
                                        <CardBody>
                                            <Container className="px-0" fluid>
                                                <Row>
                                                    <div className="w-100 d-flex justify-content-end position-absolute " style={{ zIndex: 3, right: rowWidth ? '2.5%' : '10%' }}>
                                                        <div className="d-flex justify-content-center align-items-center text-white rounded-2 btn-dark cursor-pointer" onClick={() => setRowWidth(!rowWidth)} style={{ width: '25px', height: '25px' }}>{rowWidth ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}</div>
                                                    </div>
                                                    <h4 className={`mb-0 ${rowWidth ? '' : 'd-none'}`}>Templates</h4>
                                                </Row>
                                                <Row className={`mb-0 ${rowWidth ? '' : 'd-none'}`}>
                                                    <div className='my-2'>
                                                        <label htmlFor="template-type">
                                                            Type:
                                                        </label>
                                                        <select id='template-type' class="form-select" aria-label="Default select example">
                                                            <option selected>Type 1</option>
                                                            <option value="1">Type 2</option>
                                                            <option value="2">Type 3</option>
                                                            <option value="3">Type 4</option>
                                                        </select>
                                                    </div>
                                                    <div className='mb-2'>
                                                        <label htmlFor="search-template">
                                                            Search
                                                        </label>
                                                        <input placeholder="Search your Template" type='text' id='search-template' name='search-template' className="form-control" />
                                                    </div>
                                                    <div className='mb-2 overflow-scroll'>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Id</th>
                                                                    <th scope="col">Template</th>
                                                                    <th scope="col">Type</th>
                                                                    <th scope="col">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>XIRCLS default</td>
                                                                    <td>XIRCLS default</td>
                                                                    <td className="d-flex justify-content-start align-items-center h-100"><button className="btn p-0">
                                                                        <Edit onClick={() => setTempView(!tempView)} size='15' /></button><button className="btn p-0 m-1"><MoreVertical size='15' />
                                                                        </button></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </Row>
                                            </Container>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={rowWidth ? 8 : 11}>
                                    <Card className="border">
                                        <CardBody>
                                            <Container className="px-0" fluid>
                                                <Row>
                                                    <h4>Templates View</h4>
                                                </Row>
                                                <Row className="my-2">
                                                    <Col xs={4} className='d-flex justify-content-start'>
                                                        <button onClick={() => setTempView(!tempView)} className="btn btn-primary w-65" style={{ padding: '0.5rem' }}>Add new Template</button>
                                                    </Col>
                                                    <Col xs={4} className='d-flex justify-content-center'>
                                                        <button onClick={() => setShowWidth(1)} style={{ padding: '0.5rem', backgroundColor: showWidth === 1 && 'rgba(130, 134, 139, 0.25)' }} className="btn btn-outline-secondary mx-1"><Smartphone size={25} /></button>
                                                        <button onClick={() => setShowWidth(2)} style={{ padding: '0.5rem', backgroundColor: showWidth === 2 && 'rgba(130, 134, 139, 0.25)' }} className="btn btn-outline-secondary mx-1"><Monitor size={25} /></button>
                                                    </Col>
                                                    <Col xs={4} className='d-flex justify-content-end'>
                                                        <button className="btn btn-primary" style={{ padding: '0.75rem' }}><Send size='15' /><span className="mx-1">Test Mail</span></button>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-3 px-1 d-flex justify-content-center">
                                                    <div className='bg-secondary rounded fs-4 text-white text-center' style={{ padding: '0.5rem', width: showWidth === 1 ? '325px' : '100%' }}>
                                                        Subject:
                                                    </div>
                                                </Row>
                                            </Container>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="px-1 my-2">
                                <Col s={6}><button className="btn btn-primary rounded-2">Back</button></Col>
                                <Col s={6} className='text-end'><button className="btn btn-primary rounded-2">Save & Proceed</button></Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
                {!tempView && <Card>
                    <CardBody>
                        <Container fluid>
                            <OfferCampaign />
                            <Row className="match-height transitionRow px-1">
                                <Col md={5}>
                                    <Card className="border rounded">
                                        <CardBody className="p-1">
                                            <h4>Title/ Header: {title}</h4>
                                            <Card className="border rounded">
                                                <CardBody className="px-1 py-2 mb-0">
                                                    <div className='mb-2'>
                                                        <label htmlFor="infiniti-type">
                                                            Infiniti Type:
                                                        </label>
                                                        <select id='infiniti-type' class="form-select" aria-label="infiniti-type">
                                                            <option selected disabled>Please select Infiniti type</option>
                                                            <option value="1">Infiniti Type </option>
                                                            <option value="2">Infiniti Type </option>
                                                            <option value="3">Infiniti Type </option>
                                                        </select>
                                                    </div>
                                                    <div className='mb-2'>
                                                        <label htmlFor="title-header">
                                                            Title/ Header:
                                                        </label>
                                                        <input placeholder="Title/ Header" onChange={event => titleChange(event, 1)} type='text' id='title-header' name='title-header' className="form-control" />
                                                    </div>
                                                    <div className='mb-2'>
                                                        <label htmlFor="subject-temp">
                                                            Subject:
                                                        </label>
                                                        <input placeholder="Subject" onChange={event => titleChange(event, 2)} type='text' id='subject-temp' name='subject-temp' className="form-control" />
                                                    </div>
                                                    <div class="mb-2">
                                                        <label htmlFor="img-temp">
                                                            Images:
                                                        </label>
                                                        <label htmlFor="template-file-img" id='img-temp' className="w-100">
                                                            <div className="form-control w-100"> Browse Files...</div>
                                                        </label>
                                                        <input class="form-control d-none" type="file" onChange={imageAdd} id="template-file-img" style={{ width: '100%' }} />
                                                        {err && <span className="text-danger" style={{ fontSize: '12px' }}>Please select image size less than 100kb</span>}
                                                    </div>
                                                    <div class="mb-2 text-wrap">
                                                        <label htmlFor="img-temp">
                                                            Message:
                                                        </label>
                                                        <ReactQuill
                                                            theme="snow"
                                                            placeholder="Type here"
                                                            value={text}
                                                            onChange={onChange}
                                                            modules={{
                                                                toolbar: [
                                                                    [{ header: [] }, { font: [] }],
                                                                    [{ size: [] }],
                                                                    ['bold', 'italic', 'underline'],
                                                                    [
                                                                        { list: 'ordered' },
                                                                        { list: 'bullet' }
                                                                    ],
                                                                    ['link'],
                                                                    [{ color: [] }, { background: [] }],
                                                                    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }]
                                                                ]
                                                            }}
                                                            formats={[
                                                                'header', 'font', 'size', 'color', 'background',
                                                                'bold', 'italic', 'underline',
                                                                'list', 'bullet',
                                                                'link',
                                                                'align'
                                                            ]}
                                                        />

                                                    </div>
                                                </CardBody>
                                            </Card>
                                            <h4>Placeholders</h4>
                                            <Card className="border rounded">
                                                <CardBody style={{ height: '15rem' }} className="px-1 py-2 mb-0 overflow-scroll">
                                                    <ul style={{ listStyle: 'none' }} className='placeholder-list position-relative'>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                        <li className='mb-1'>sample</li>
                                                    </ul>
                                                </CardBody>
                                            </Card>

                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={7}>
                                    <Card className="border">
                                        <CardBody>
                                            <Container className="px-0" fluid>
                                                <Row className="my-0">
                                                    <Col xs={12} className='d-flex justify-content-end'>
                                                        <button className="btn btn-primary w-25" style={{ padding: '0.75rem' }}><Send size='15' /><span className="mx-1">Test Mail</span></button>
                                                    </Col>
                                                </Row>
                                                <Row className="my-1">
                                                    <Col xs={5} className='d-flex justify-content-start'>

                                                    </Col>
                                                    <Col xs={2} className='d-flex justify-content-center'>
                                                        <button onClick={() => setShowWidth(1)} style={{ padding: '0.5rem', backgroundColor: showWidth === 1 && 'rgba(130, 134, 139, 0.25)' }} className="btn btn-outline-secondary mx-1"><Smartphone size={15} /></button>
                                                        <button onClick={() => setShowWidth(2)} style={{ padding: '0.5rem', backgroundColor: showWidth === 2 && 'rgba(130, 134, 139, 0.25)' }} className="btn btn-outline-secondary mx-1"><Monitor size={15} /></button>
                                                    </Col>
                                                    <Col xs={5} className='d-flex justify-content-end'>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-1 px-1 d-flex justify-content-center">
                                                    <div className='bg-secondary rounded fs-4 text-white text-center' style={{ padding: '0.5rem', width: showWidth === 1 ? '325px' : '100%' }}>
                                                        Subject: {subject}
                                                    </div>
                                                </Row>
                                                <Row className="mt-3 px-1 d-flex justify-content-center">
                                                    <div className='rounded text-center' style={{ width: '100%' }}>
                                                        <img style={{ width: '100%' }} src={file} alt="" />

                                                    </div>
                                                </Row>
                                                <Row className="mt-3 px-1 d-flex justify-content-center">
                                                    <div dangerouslySetInnerHTML={{ __html: text }} className='default-dis'></div>
                                                </Row>
                                            </Container>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="px-1 my-2">
                                <Col s={6}><button onClick={() => setTempView(!tempView)} className="btn btn-primary rounded-2">Back</button></Col>
                                <Col s={6} className='text-end'></Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>}
            </Container>
        </>
    )
}

export default OfferEmail