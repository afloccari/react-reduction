import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Card, CardHeader, CardBody, CardText, Button, CardFooter, Row, Col } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';


const options = {
  cutoutPercentage: 72, 
  responsive: true,
  maintainAspectRatio: false,
};

const CarouselCustomers = ({items, onSelectItem}) => {

  const handleViewProyect = (item) => {
    onSelectItem(item);
  }


  return (
    <Carousel
      showArrows={true}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={false}
      dynamicHeight={false}
      centerMode={true}
      centerSlidePercentage={25}
      className="custom-carousel-customers"
    >
      {items.map((item) => (
        <div className='px-2' key={item.id}>
          <Card>
            <CardHeader>
              <div className="d-flex justify-content-between align-items-center">
                  <img className='carousel-customer-img ' src={item.imageSrc} alt="Imagen" />
                <div className="text-success">
                  <Row className='text-right'> 
                    <Col md={8} sm={12} >
                      <strong>{item.percentage}%</strong>
                    </Col>
                    <Col md={4} sm={12} className='p-0' >
                    <div style={{height:'2rem', width: '2rem', marginTop: '-0.5rem'}}>
                      <Doughnut data={{
                        datasets: [
                          {
                            data: [item.percentage, 100 - item.percentage],
                            backgroundColor: ['#45b649', '#E7E7E7'],
                            borderWidth: -1,
                          },
                        ]
                      }} options={options} />
                  </div>
                    </Col>
                  </Row>
                  
                  
                  
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <h6 className='text-left'><b>{item.customerName}</b></h6>
              <p className='text-left' style={{ marginTop: '-1rem' }}>
                <small className='text-primary'>{item.businesTypeDesc}</small>
              </p>

              <p className='text-left'>
                <ul className='ul-list-carousel-customer' style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  <li><small><b>Monto:</b> ${item.amount}</small></li>
                  <li><small><b>Plazo:</b> {item.term}</small></li>
                  <li><small><b>Cuota:</b> ${item.quota}</small></li>
                  <li><small><b>TNA:</b> {item.tna}%</small></li>
                  <li><small><b>Destino:</b> {item.destiny}</small></li>
                  <li><small><b>Fondeo:</b> {item.anchorage}%</small></li>
                </ul>
              </p>

              <div className='row'>
                <img src={"img_c_00" + item.id + ".png"} className='img-responsive img-radios-15 px-1'></img>
              </div>

            </CardBody>
            <CardFooter>
              <Button onClick={() => handleViewProyect(item)}  style={{ float: 'right' }} className='btn-sm border-0 bg-gradient-primary-right card text-white text-right'>
                Ver Proyecto
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCustomers;


