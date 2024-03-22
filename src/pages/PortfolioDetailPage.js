import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import Page from '../components/Page';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Doughnut } from 'react-chartjs-2';

const PortfolioDetailPage = ({match, history}) => {

    const [dataState, setDataState] = useState([]);

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

        //TODO:
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
                anchorage: 7,
                percentage: 83,
                rate : 7,
                quotaPending: '23|48',
                returnToday : 442000,
                investment : 15600,
                isComplete : false
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
                anchorage: 73,
                percentage: 52,
                rate : 15,
                quotaPending: '0|48',
                returnToday : 0,
                investment : 515600,
                isComplete : false
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
                anchorage: 100,
                percentage: 71,
                rate : 7,
                quotaPending: '23|48',
                returnToday : 442000,
                investment : 150000,
                isComplete : false
            },
            {
                id: 4,
                imageSrc: 'boxer-containers.png',
                customerName: 'Boxer',
                customerSecondName: 'Containers',
                businesTypeDesc: 'Tecnología',
                amount: '1.000.000',
                term: '24 Meses',
                quota: '100.000',
                tna: '72.30',
                destiny: 'Capital de trabajo',
                anchorage: 100,
                percentage: 28,
                rate : 30,
                quotaPending: '24|24',
                returnToday : 147000,
                investment : 123000,
                isComplete : true
            },
            {
                id: 5,
                imageSrc: '',
                customerName: 'AE Effects',
                customerSecondName: 'AE Effects',
                businesTypeDesc: 'Tecnología',
                amount: '1.000.000',
                term: '48 Meses',
                quota: '100.000',
                tna: '72.30',
                destiny: 'Capital de trabajo',
                anchorage: 100,
                percentage: 28,
                rate : 30,
                quotaPending: '48|48',
                returnToday : 130000,
                investment : 100000,
                isComplete : true
            },
            {
                id: 6,
                imageSrc: '',
                customerName: 'Coderhouse',
                customerSecondName: 'Coderhouse',
                businesTypeDesc: 'Tecnología',
                amount: '1.000.000',
                term: '12 Meses',
                quota: '100.000',
                tna: '72.30',
                destiny: 'Capital de trabajo',
                anchorage: 100,
                percentage: 28,
                rate : 40,
                quotaPending: '12|12',
                returnToday : 280000,
                investment : 200000,
                isComplete : true
            },
        ];

    useEffect(() => {
        const pid = match.params.pid;
        const data = items.find( (x) => x.id == pid);
        
        setDataState(data);

    },[])

    const toPorfolio = () => {
        history.goBack();
    }

    return (
        <Page
            className="PortfolioDetailPage"
            title="portfoliodetail"
            breadcrumbs={[{ name: 'portfoliodetail', active: true }]}>
                       <Row className='px-5 mt-4'>
                <h6><span onClick={toPorfolio} style={{cursor:'pointer'}}>Mi cartera</span> <MdKeyboardArrowRight /> activa <MdKeyboardArrowRight /><b>{dataState.customerName}</b></h6>

                <Col md={12} sm={12}>
                    <Card>
                        <CardHeader>
                            <div className="d-flex justify-content-between align-items-center">
                                <img className='carousel-customer-img ' src={'../'+dataState.imageSrc} alt="Imagen" />
                            </div>
                        </CardHeader>

                        <CardBody>
                            <h6><b>{dataState.customerName} |</b> <span style={{ fontFamily: 'Mada-Light' }}>{dataState.customerSecondName}</span></h6>
                            <small className='text-primary'>{dataState.businesTypeDesc}</small>

                            <Row className='text-center mt-4'>
                                <Col md={3} className=''>
                                    <img className='img-investment-galery-p' src='../img_c_003.png'></img>
                                    <img className='img-investment-galery-s' src='../img_c_002.png'></img>
                                    <img className='img-investment-galery-s' src='../img_c_002.png'></img>
                                    <img className='img-investment-galery-s' src='../img_c_002.png'></img>
                                    <img className='img-investment-galery-s' src='../img_c_002.png'></img>
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
                                        <Col className='text-left' md={5}>
                                            <p style={{fontSize:12}}>
                                                Parrilla Argentina. Sede del fmaoso Chef Salt Bae.
                                                <strong>Busca Expandir el negocio, abriendo sedes en la Patagonia</strong>                                            </p>
                                                <p style={{fontSize:12}}>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                                                ex ea commodo consequat. Duis autem vel eum iriure dolor in <b>hendrerit in vulputate velit esse</b> molestie
                                                consequat, vel
                                            </p>
                                        </Col>
                                        <Col className='text-left px-3 py-2' md={3}>
                                        <strong className='text-primary'>Porcentaje de participación en el proyecto</strong>
                                        <Col className='mt-2 px-3 py-2' style={{borderTop: 'solid 2px', boderColor:'#525252 !important'}}>
                                            <h6>
                                                <strong className='py-2 text-center' style={{color:'#525252'}}>USD 3580</strong>
                                            </h6>
                                        </Col>
                                        </Col>
                                        <Col md={4}>
                                            <div className='px-3'>
                                                <div style={{ position: 'relative' }}>
                                                    <Doughnut data={{
                                                        datasets: [
                                                            {
                                                                data: [dataState.percentage, (100 - dataState.percentage)],
                                                                backgroundColor: ['#801db5', '#E7E7E7'],
                                                                borderWidth: [1,6],
                                                                
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
                                                        <strong className='text-primary'>{dataState.percentage}%</strong>
                                                    </div>
                                                </div>
                                                <br></br>
                                                
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CardBody>
                       
                    </Card>
                </Col>
            </Row>
        </Page>
    )
}

export default PortfolioDetailPage;