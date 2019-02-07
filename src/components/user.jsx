import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

    render() {
        return (
            <div>
                <img src={this.props.avatar} alt='none'/>
                <p>{this.props.firstName} {this.props.lastName}</p>
            </div>
        );
    }
}

User.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string
}

export default User;