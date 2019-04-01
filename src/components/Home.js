import React, { Component, Fragment } from 'react';
import BlockList from './CardBlockItems/BlockList'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <BlockList />
            </Fragment>
        );
    }
}

export default Home;