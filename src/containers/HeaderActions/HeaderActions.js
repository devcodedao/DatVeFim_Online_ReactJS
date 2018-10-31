import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderEvent from "./../../pages/HeaderEvent/HeaderEvent";
import * as actions from "./../../actions/index";
export class HeaderActions extends Component {
  openForm = (isOpenLoginForm, isOpenSignUpForm) => {
    this.props.openForm(isOpenLoginForm, isOpenSignUpForm);
  };
  closeForm = isOpenForm => {
    this.props.closeForm(isOpenForm);
  };
  openSignUpForm = (isOpenSignUpForm, isOpenLoginForm) => {
    this.props.openSignUpForm(isOpenSignUpForm, isOpenLoginForm);
  };
  addNewUser = user => {
    this.props.addNewUser(user);
  };
  userLogin = userLogin => {
    this.props.userLogin(userLogin);
  };
  render() {
    let { displayForm, users } = this.props;
    return (
      <HeaderEvent
        users={users}
        addNewUser={this.addNewUser}
        userLogin={this.userLogin}
        displayForm={displayForm}
        openForm={this.openForm}
        closeForm={this.closeForm}
        openSignUpForm={this.openSignUpForm}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    displayForm: state.displayForm,
    users: state.users
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    openForm: (isOpenLoginForm, isOpenSignUpForm) => {
      dispatch(actions.actOpenForm(isOpenLoginForm, isOpenSignUpForm));
    },
    closeForm: isOpenForm => {
      dispatch(actions.actCloseForm(isOpenForm));
    },
    addNewUser: user => {
      dispatch(actions.actAddNewUserRequest(user));
    },
    userLogin: userLogin => {
      dispatch(actions.actUserLoginRequest(userLogin));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderActions);
