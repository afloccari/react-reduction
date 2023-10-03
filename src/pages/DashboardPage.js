import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { FaCircle, FaCircleNotch } from 'react-icons/fa';
import {
  MdArrowDownward,
  MdArrowUpward,
  MdBubbleChart,
  MdInsertChart,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardFooter,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Table,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import CarouselCustomers from '../components/CarouselCustomers';
const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);
const items = [
  {
    id: 1,
    imageSrc: 'Jurassic_Park-Logo-PNG4.png',
    customerName: 'Churrasic Park',
    customerSecondName: '',
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
    destiny: 'Capital de trabajo',
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

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row className="cr-bg-secondary p-5">

          <Col lg={3} md={3} sm={6} xs={6}>
            <h6 style={{ fontFamily: 'Mada-Light' }} className='text-gray'>Billetera Grow</h6>
            <h3 className='text-white ml-5 mt-4'>$11.759,50</h3>

          </Col>
          <Col lg={1} md={1} sm={6} xs={6}>
            <div class="vertical-line"></div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6} style={{ marginLeft: '-2rem' }}>
            <h6 style={{ fontFamily: 'Mada-Light' }} className='text-gray'>Últimos movimientos</h6>
            <Table className="table table-borderless table-last-movements">
              <tbody>
                <tr>
                  <td>Transferencia a Pedro</td>
                  <td>-$500</td>
                </tr>
                <tr>
                  <td>Recarga</td>
                  <td>$20.000</td>
                </tr>
                <tr>
                  <td>YPF</td>
                  <td>-$2.500</td>
                </tr>
              </tbody>
            </Table>

          </Col>
          <Col lg={5} md={5} sm={6} xs={6}>

            <Row>
              <Col lg={4} md={4}>
                <Card className="dark-bill-card">
                  <CardBody className='text-center'>
                  <MdArrowDownward style={{marginTop:'-0.3rem', position: 'absolute', left:'2.7rem'}} className='text-white text-center' />
                  <svg width="41px" height="41px" viewBox="0 0 24 24" stroke-width="1" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 15a3 3 0 110-6 3 3 0 010 6zM18.5 12.01l.01-.011M5.5 12.01l.01-.011" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </CardBody>
                  <CardFooter className="text-center">
                    <p>Recarga Saldo</p>
                  </CardFooter>
                </Card>
              </Col>

              <Col lg={4} md={4}>
                <Card className="dark-bill-card">
                  <CardBody className='text-center'>
                  <MdArrowUpward style={{marginTop:'-0.3rem', position: 'absolute', left:'2.7rem'}} className='text-white text-center' />
                    <svg width="41px" height="41px" viewBox="0 0 24 24" stroke-width="1" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 15a3 3 0 110-6 3 3 0 010 6zM18.5 12.01l.01-.011M5.5 12.01l.01-.011" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </CardBody>
                  <CardFooter className="text-center" >
                    <p>Enviar Dinero</p>
                  </CardFooter>
                </Card>
              </Col>

              <Col lg={4} md={4}>
                <Card className="dark-bill-card">
                  <CardBody className='text-center'>
                  <svg width="41px" height="41px" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M21.168 8A10.003 10.003 0 0012 2C6.815 2 2.55 5.947 2.05 11" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 8h4.4a.6.6 0 00.6-.6V3M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.05 16h-4.4a.6.6 0 00-.6.6V21" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>                  </CardBody>
                  <CardFooter className="text-center">
                    <p className='text-gray'>Transferir</p>
                  </CardFooter>
                </Card>
              </Col>
            </Row>

          </Col>

        </Row>

        <Row className="myWallet px-5" style={{marginTop: '-3rem'}}>
        <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader><b>Mi cartera</b></CardHeader>
              {/* TODO: CONVERTIR EN COMPONETNE */}
              <CardBody>
                <div className='responsive'>
                  <table className='table table-striped table-borderless'>
                    <thead>
                      <tr>
                        <th></th>
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
                              <input type="checkbox" class="form-check-input"/>
                            </label>
                          </div>
                            <FaCircle className='text-success' style={{fontSize: '0.5rem'}} />
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
                              <input type="checkbox" class="form-check-input"/>
                            </label>
                          </div>
                            <FaCircleNotch className='text-success' style={{fontSize: '0.5rem'}} />
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
                              <input type="checkbox" class="form-check-input"/>
                            </label>
                          </div>
                            <FaCircleNotch className='text-success' style={{fontSize: '0.5rem'}} />
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
                    </tbody>
                  </table>
                </div>
              </CardBody>
              <CardFooter className='cr-bg-secondary px-5'> 
                <h6  className='text-white'>Flujos esperados</h6>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row className='bg-cr-foreground'>
          <Col md='12' sm='12' className='px-5 py-2'>
            <h6 style={{ fontFamily: 'Mada-Bold' }} 
              className='text-secondary px-4'>Inversiones destacadas</h6>
            <CarouselCustomers items={items} className='px-2' />
          </Col>
        </Row>

        {/* <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Total Revenue{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Total Expense</CardHeader>
              <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Cost of sales{' '}
                  <Badge color="secondary">$3000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Management
                  costs <Badge color="secondary">$1200</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Financial costs{' '}
                  <Badge color="secondary">$800</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Other operating
                  costs <Badge color="secondary">$2400</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row> */}

        {/* <CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="50+ Likes"
            subtitle="People you like"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="10+ Reviews"
            subtitle="New Reviews"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="30+ Shares"
            subtitle="New Shares"
          />
        </CardGroup> */}

        {/* <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Line
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [0, 13000, 5000, 24000, 16000, 25000, 10000],
                })}
                options={stackLineChartOptions}
              />
              <CardBody
                className="text-primary"
                style={{ position: 'absolute' }}
              >
                <CardTitle>
                  <MdInsertChart /> Sales
                </CardTitle>
              </CardBody>
            </Card>
          </Col>

          <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Line
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [10000, 15000, 5000, 10000, 5000, 10000, 10000],
                })}
                options={stackLineChartOptions}
              />
              <CardBody
                className="text-primary"
                style={{ position: 'absolute' }}
              >
                <CardTitle>
                  <MdInsertChart /> Revenue
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Card>
              <Line
                data={getStackLineChart({
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                  ],
                  data: [0, 13000, 5000, 24000, 16000, 25000, 10000].reverse(),
                })}
                options={stackLineChartOptions}
              />
              <CardBody
                className="text-primary"
                style={{ position: 'absolute', right: 0 }}
              >
                <CardTitle>
                  <MdInsertChart /> Profit
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row> */}

        {/* <Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <InfiniteCalendar
              selected={today}
              minDate={lastWeek}
              width="100%"
              theme={{
                accentColor: primaryColor,
                floatingNav: {
                  background: secondaryColor,
                  chevron: primaryColor,
                  color: '#FFF',
                },
                headerColor: primaryColor,
                selectionColor: secondaryColor,
                textColor: {
                  active: '#FFF',
                  default: '#333',
                },
                todayColor: secondaryColor,
                weekdayColor: primaryColor,
              }}
            />
          </Col>

          <Col lg="8" md="12" sm="12" xs="12">
            <Card inverse className="bg-gradient-primary">
              <CardHeader className="bg-gradient-primary">
                Map with bubbles
              </CardHeader>
              <CardBody>
                <MapWithBubbles />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <CardDeck style={{ marginBottom: '1rem' }}>
          <Card body style={{ overflowX: 'auto', 'paddingBottom': '15px', 'height': 'fit-content', 'paddingTop': 'inherit' }}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 50 }}
            />
          </Card>

          <Card body style={{ overflowX: 'auto', 'paddingBottom': '15px', 'height': 'fit-content', 'paddingTop': 'inherit' }}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 50 }}
              reversed
            />
          </Card>
        </CardDeck>

        <Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header="Announcement"
              avatarSize={60}
              name="Jamy"
              date="1 hour ago"
              text="Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna"
              buttonProps={{
                children: 'show',
              }}
              style={{ height: 500 }}
            />
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Support Tickets</span>
                  <Button>
                    <small>View All</small>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {supportTicketsData.map(supportTicket => (
                  <SupportTicket key={supportTicket.id} {...supportTicket} />
                ))}
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <TodosCard todos={todosData} />
          </Col>
        </Row> */}

      </Page>
    );
  }
}
export default DashboardPage;
