import React, { useEffect } from "react";

import Page from "../components/Page";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const PortfolioDetailPage = () => {

    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        console.log(id)
            
    },[])

    return (
        <Page
            className="PortfolioDetailPage"
            title="portfoliodetail"
            breadcrumbs={[{ name: 'portfoliodetail', active: true }]}>
            <Row>

                <Card>

                </Card>

            </Row>
        </Page>
    )
}

export default PortfolioDetailPage;