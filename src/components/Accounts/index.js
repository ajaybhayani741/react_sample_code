import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import "./accounts.css"
import accountsTabs from '../../descriptions/accounts'
import NavTabs from '../../reusable/NavTabs';

const Index = () => {

    return (
        <Fragment>
            <Container className="account-info-container" fluid="lg">
                <div className="row px-3 px-sm-0">
                    <NavTabs
                        tabList={accountsTabs}
                        title={'User Profile'}
                        tabs
                        vertical
                        className="col-sm-2 col-12 px-0 pl-sm-3 vertical-tab-ul"
                        tabContentClassName="col-sm-10 px-0 px-sm-3 pl-60"
                        titleClassName=" user-profile" />
                </div>
            </Container>
        </Fragment>
    )
}

export default Index
