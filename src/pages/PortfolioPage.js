import React from "react";
import Page from "../components/Page";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { FaCircle, FaCircleNotch } from "react-icons/fa";

const PortfolioPage = () => {

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
                        {/* TODO: CONVERTIR EN COMPONETNE */}
                        <CardBody>
                            <div className='responsive'>
                                <table className='table table-porfolio'>
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
                                        <tr>
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
                                        </tr>
                                    </tbody>

                                </table>

                            </div>
                        </CardBody>
                        <Col md={12} className='text-center'>
                            <p style={{ fontFamily: 'Mada-Light' }}>6/14</p>

                            <Button style={{marginBottom: '-1rem'}} className='btn-sm px-5 btn border-0 bg-gradient-primary-right  text-white'>
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