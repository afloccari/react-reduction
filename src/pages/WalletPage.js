import React from 'react';
import { Row } from 'reactstrap';
import Page from '../components/Page';

const WalletPage = () => {
    return (
        <Page
        className="WalletPage"
        title="Wallet"
        breadcrumbs={[{ name: 'Wallet', active: true }]}
      >
        <Row className='p-5'>
            <h5>Biletera</h5>
        </Row>
        </Page>
    )
}


export default WalletPage;