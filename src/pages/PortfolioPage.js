import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { FaCircle, FaCircleNotch } from "react-icons/fa";
import AmmountWidget from "../components/Widget/AmmountWidget";

const PortfolioPage = ({ history }) => {

    const [portfolioData, setDataState] = useState([]);

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

        setDataState(items);

    }, [])

    const showDetail = (id) => {
        history.push(`/portfoliodetail/${id}`);
    }

    return (
        <Page
            className="PortfolioPage"
            title="portfolio"
            breadcrumbs={[{ name: 'portfolio', active: true }]}>
            <Row className='px-2 porfolio-container'>
                <Col md="12" sm="12" xs="12">
                    <Card>
                        <CardHeader>
                            <h4><b>Mi cartera |</b> activa</h4>
                        </CardHeader>
                        
                        <CardBody>
                            <div className='responsive'>
                                <table className='table table-porfolio table-hover-pr'>
                                    <thead>
                                        <tr>
                                            <th>Empresa</th>
                                            <th>Fondeo</th>
                                            <th>Inversión</th>
                                            <th>Fecha de inversión</th>
                                            <th>Monto cuota</th>
                                            <th>TASA</th>
                                            <th>Cuotas pendientes</th>
                                            <th>Retornos a hoy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            portfolioData.map(item => {
                                                return <tr onClick={() => showDetail(item.id)} className={item.isComplete ? 'disabled': ''}>
                                                    <td>
                                                        <div class="form-check form-check-inline">
                                                            <label class="form-check-label">
                                                                <input type="checkbox" class="form-check-input" />
                                                            </label>
                                                        </div>
                                                        {
                                                            item.anchorage < 100 ? 
                                                            <FaCircleNotch className='text-success' style={{ fontSize: '0.5rem' }} />
                                                            : <FaCircle className={item.isComplete ? 'text-gray': 'text-success'} style={{ fontSize: '0.5rem' }} />

                                                        }
                                                        <span className='px-2'>{item.customerName}</span>
                                                    </td>
                                                    <td>{item.anchorage}%</td>
                                                    <td><AmmountWidget number={item.investment}/></td>
                                                    <td>15-01-21</td>
                                                    <td><AmmountWidget number={item.amount}/></td>
                                                    <td>{item.rate}%</td>
                                                    <td>{item.quotaPending}</td>
                                                    <td><AmmountWidget number={item.returnToday}/></td>
                                                    
                                                </tr>
                                            })
                                        }


                                        {/* <tr>
                                            <td>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />
                                                    </label>
                                                </div>
                                                <FaCircle className='text-success' style={{ fontSize: '0.5rem' }} />
                                                <span className='px-2'>PSA</span>
                                            </td>
                                            <td>100%</td>
                                            <td>$150.000</td>
                                            <td>15-01-21</td>
                                            <td>$42.000</td>
                                            <td>7%</td>
                                            <td>23|48</td>
                                            <td>$442.000</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />
                                                    </label>
                                                </div>
                                                <FaCircleNotch className='text-success' style={{ fontSize: '0.5rem' }} />
                                                <span className='px-2'>MODO OBRA</span>
                                            </td>
                                            <td>173%</td>
                                            <td>$515.600</td>
                                            <td>15-01-21</td>
                                            <td>-</td>
                                            <td>15%</td>
                                            <td>0|48</td>
                                            <td>$0.0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />
                                                    </label>
                                                </div>
                                                <FaCircleNotch className='text-success' style={{ fontSize: '0.5rem' }} />
                                                <span className='px-2'>Churrasic Park</span>
                                            </td>
                                            <td>7%</td>
                                            <td>$15.600</td>
                                            <td>15-01-21</td>
                                            <td>$21.000</td>
                                            <td>7%</td>
                                            <td>23|48</td>
                                            <td>23|48</td>
                                        </tr>
                                        <tr className="disabled">
                                            <td>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />
                                                    </label>
                                                </div>
                                                <FaCircle className='text-gray badge-light' style={{ fontSize: '0.5rem' }} />
                                                <span className='px-2'>Boxer Containers</span>
                                            </td>
                                            <td>100%</td>
                                            <td>$123.000</td>
                                            <td>15-01-21</td>
                                            <td>-</td>
                                            <td>7%</td>
                                            <td>24|24</td>
                                            <td>$147.000</td>
                                        </tr>
                                        <tr className="disabled">
                                            <td>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />
                                                    </label>
                                                </div>
                                                <FaCircle className='text-gray badge-light' style={{ fontSize: '0.5rem' }} />
                                                <span className='px-2'>AE Effects</span>
                                            </td>
                                            <td>100%</td>
                                            <td>$100.000</td>
                                            <td>15-01-21</td>
                                            <td>-</td>
                                            <td>30%</td>
                                            <td>48|48</td>
                                            <td>$130.000</td>
                                        </tr>
                                        <tr className="disabled">
                                            <td>
                                                <div class="form-check form-check-inline">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" />
                                                    </label>
                                                </div>
                                                <FaCircle className='text-gray badge-light' style={{ fontSize: '0.5rem' }} />
                                                <span className='px-2'>CoderHouse</span>
                                            </td>
                                            <td>100%</td>
                                            <td>$100.000</td>
                                            <td>15-01-21</td>
                                            <td>-</td>
                                            <td>40%</td>
                                            <td>12|12</td>
                                            <td>$280.000</td>
                                        </tr> */}
                                    </tbody>

                                </table>

                            </div>
                        </CardBody>
                        <Col md={12} className='text-center'>
                            <p style={{ fontFamily: 'Mada-Light' }}>6/14</p>

                            <Button style={{ marginBottom: '-1rem' }} className='btn-sm px-5 btn border-0 bg-gradient-primary-right  text-white'>
                                Ver más
                            </Button>
                        </Col>
                    </Card>
                </Col>
            </Row>
        </Page>
    )

}


export default PortfolioPage;