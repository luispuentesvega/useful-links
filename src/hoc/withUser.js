import React from 'react';

const withUser = WrappedComponent => {
    class WithUser extends React.Component {
        state = {
            user: 'Luis'
        };

        render() {
            return <WrappedComponent user={this.state.user} {...this.props} />;
        }
    }

    return WithUser;
};

export default withUser;
