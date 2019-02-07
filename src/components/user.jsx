import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/user.css';

class User extends Component {

    render() {
        return (
            <div className='user'>
                <img className='user-pic' src={this.props.avatar} alt='none'/>
                <p className='user-name'>{this.props.firstName} {this.props.lastName}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, impedit sed eum eaque in fugiat fugit explicabo perspiciatis error quisquam reiciendis enim recusandae exercitationem? Quo culpa aliquam maxime consequuntur illum?</p>
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