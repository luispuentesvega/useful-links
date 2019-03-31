import React, { Component, Fragment } from 'react';
import BlockList from './../components/ChildBlock/BlockList'

class Home extends Component {
    render() {
        return (
            <Fragment>
                Home Component
                <BlockList />
            </Fragment>
        );
    }
}

export default Home;