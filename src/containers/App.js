import React from 'react';
import withUser from '../hoc/withUser';
import placeholder from '../api/placeholder';

class App extends React.Component {
    state = {
        name: 'Luis',
    };

    componentDidMount() {
        placeholder.get('/posts').then(res => {
            console.log('The response is ', res.data);
        });
    }

    render() {
        console.log(this.props);
        return <div>I'm the APP Component</div>;
    }
}

export default withUser(App);
