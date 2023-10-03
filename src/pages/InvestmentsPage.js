import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import Page from '../components/Page';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Doughnut } from 'react-chartjs-2';
import CarouselCustomers from '../components/CarouselCustomers';

const InvestmentsPage = () => {
    const [dataState, setDataState] = useState([]);
    const items = [
        {
            id: 1,
            imageSrc: 'Jurassic_Park-Logo-PNG4.png',
            customerName: 'Churrasic Park',
            customerSecondName: 'Parrilla Argentina',
            businesTypeDesc: 'Gastronomía',
            amount: '1.000.000',
            term: '48 Meses',
            quota: '100.000',
            tna: '72.30',
            destiny: 'Capital de trabjo',
            anchorage: '33',
            percentage: 83,
        },
        {
            id: 2,
            imageSrc: 'Modo_obra.png',
            customerName: 'Modo Obra',
            customerSecondName: '',
            businesTypeDesc: 'Construcción',
            amount: '1.000.000',
            term: '48 Meses',
            quota: '100.000',
            tna: '72.30',
            destiny: 'Capital de trabjo',
            anchorage: '33',
            percentage: 52,
        },
        {
            id: 3,
            imageSrc: 'psa_logo.png',
            customerName: 'PSA',
            customerSecondName: 'Purificadores de Agua',
            businesTypeDesc: 'Tecnología',
            amount: '1.000.000',
            term: '48 Meses',
            quota: '100.000',
            tna: '72.30',
            destiny: 'Capital de trabajo',
            anchorage: '33',
            percentage: 71,
        },
        {
            id: 4,
            imageSrc: 'boxer-containers.png',
            customerName: 'Boxer',
            customerSecondName: 'Containers',
            businesTypeDesc: 'Tecnología',
            amount: '1.000.000',
            term: '48 Meses',
            quota: '100.000',
            tna: '72.30',
            destiny: 'Capital de trabajo',
            anchorage: '33',
            percentage: 28,

        },
    ];
    const options = {
        cutoutPercentage: 80,
        
        elements: {
            arc: {
              borderCapStyle: 'round',
              borderJoinStyle: 'round', 
              borderRadius: 30,
              
            },
        },
        tooltips: {
            enabled: false, // Deshabilita las etiquetas emergentes predeterminadas
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    useEffect(() => {
        setDataState(...[items[0]])

    }, [])

    const handleViewProyect = (item) => {
        setDataState(...[item])
    }

    return (
        <Page
            className="InvestmentsPage"
            title="investments"
            breadcrumbs={[{ name: 'investments', active: true }]}>
            <Row className='px-5 mt-4'>
                <h6>Inversiones <MdKeyboardArrowRight /><b>{dataState.customerName}</b></h6>

                <Col md={12} sm={12}>
                    <Card>
                        <CardHeader>
                            <div className="d-flex justify-content-between align-items-center">
                                <img className='carousel-customer-img ' src={dataState.imageSrc} alt="Imagen" />
                            </div>
                        </CardHeader>

                        <CardBody>
                            <h6><b>{dataState.customerName} |</b> <span style={{ fontFamily: 'Mada-Light' }}>{dataState.customerSecondName}</span></h6>
                            <small className='text-primary'>{dataState.businesTypeDesc}</small>

                            <Row className='text-center mt-4'>
                                <Col md={3} className=''>
                                    <img className='img-investment-galery-p' src='jurasic_galery_001.jpg'></img>
                                    <img className='img-investment-galery-s' src='jurasic_galery_002.jpg'></img>
                                    <img className='img-investment-galery-s' src='jurasic_galery_003.jpg'></img>
                                    <img className='img-investment-galery-s' src='jurasic_galery_004.jpg'></img>
                                    <img className='img-investment-galery-s' src='jurasic_galery_005.jpg'></img>
                                </Col>
                                <Col md={9}>
                                    <Row>
                                        <Col md={2} >
                                            <p><b>Monto</b> <br></br>
                                                <small>${dataState.amount}</small>
                                            </p>

                                        </Col>
                                        <Col md={2} className='bl-1'>
                                            <p><b>Plazo</b> <br></br>
                                                <small>{dataState.term}</small>
                                            </p>
                                        </Col>
                                        <Col md={2} className='bl-1'>
                                            <p><b>Cuota</b> <br></br>
                                                <small>${dataState.quota}</small>
                                            </p>
                                        </Col>
                                        <Col md={2} className='bl-1'>
                                            <p><b>TNA</b> <br></br>
                                                <small>{dataState.tna}%</small>
                                            </p>
                                        </Col>
                                        <Col md={2} className='bl-1'>
                                            <p><b>Destino</b> <br></br>
                                                <small>{dataState.destiny}</small>
                                            </p>
                                        </Col>
                                        <Col md={2} className='bl-1'>
                                            <p><b>Fondeo</b> <br></br>
                                                <small>{dataState.anchorage}%</small>
                                            </p>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='text-left' md={7}>
                                            <p>
                                                Parrilla Argentina. Sede del fmaoso Chef Salt Bae.
                                                <strong>Busca Expandir el negocio, abriendo sedes en la Patagonia</strong>                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                                                ex ea commodo consequat. Duis autem vel eum iriure dolor in <b>hendrerit in vulputate velit esse</b> molestie
                                                consequat, vel
                                            </p>
                                        </Col>
                                        <Col md={5}>
                                            <div className='px-5'>
                                                <div style={{ position: 'relative' }}>
                                                    <Doughnut data={{
                                                        datasets: [
                                                            {
                                                                data: [dataState.percentage, (100 - dataState.percentage)],
                                                                backgroundColor: ['#45b649', '#E7E7E7'],
                                                                borderWidth: [4,10],
                                                                
                                                            },
                                                        ]
                                                    }} options={options} />
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '50%',
                                                            transform: 'translate(-50%, -50%)',
                                                            fontSize: '2rem',
                                                        }}
                                                    >
                                                        <span className='text-success'>{dataState.percentage}%</span>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <strong className='text-success'>Ya falta menos para el #MomentoGrow!</strong>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CardBody>
                        <Row style={{marginBottom: '-1rem'}} className="justify-content-center">
                        <button className='btn btn-outline-secondary px-5'>
                                Simular
                        </button>
                            <Button className='ml-4 px-5 btn border-0 bg-gradient-primary-right  text-white'>
                                Invertir
                            </Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className='px-5'>
                <h6 className='text-primary'><b>Inversiones similares</b></h6>
                <Col md={12}>
                    <CarouselCustomers 
                        items={items.filter((item) => item.id != dataState.id)}
                        onSelectItem={handleViewProyect}
                        />
                </Col>
            </Row>
        </Page>
    )
}


export default InvestmentsPage;