import React, { Component } from 'react';
import Information from './../../components/Information/Information';
import {connect} from "react-redux";
import * as actions from "./../../actions/index";
export class UserInformation extends Component {
  updateUser = (user) => {
    this.props.updateUser(user);
  }
  render() {
    let {userUpdate} = this.props;
    return (
      <Information updateUser = {this.updateUser} userUpdate={userUpdate}/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userUpdate: state.userUpdate,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    updateUser: (user) => {
      dispatch(actions.actUpdateUserRequest(user));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInformation);
