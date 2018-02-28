import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserRequested, fetchUserSucceeded } from 'actions/users'


class User extends Component{
    render(){
        let user = this.props.user;
        return (
            <div>
                {user.age}
                <button onClick={this.props.fetchUserRequested}>fethcuser</button>
            </div>
        )
    }
}

User = connect(state=>({
    user:state.user
}), {fetchUserRequested} )(User);
export default User;