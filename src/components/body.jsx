import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './user';
import '../css/body.css';

class Body extends Component {

    render() {

        let usersList = this.props.usersList;

        console.log('BODY COMPONENT');
        console.log(usersList);

        return (
            <div className='body'>
                
                <h2>Team Members</h2>
                
                <div className='user-list-panel'>  
                    <ul className="user-list">
                        {usersList.map(user => {
                            return (
                                <li key={user.id}>
                                    <User key={user.id} avatar={user.avatar} 
                                        firstName={user.first_name} lastName={user.last_name}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
            </div>
        );
    }
}

Body.propTypes = {
    usersList: PropTypes.array
}

export default Body;