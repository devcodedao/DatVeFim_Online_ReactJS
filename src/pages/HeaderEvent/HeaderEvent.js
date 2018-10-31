import React, { Component, Fragment } from "react";
import Header from "../../components/Header/Header";
import LoginForm from "./../../components/LoginForm/LoginForm";
import SignUpForm from "./../../components/SignUpForm/SignUpForm";
import ShowTrailer from "../../components/ShowTrailer/ShowTrailer";

class HeaderEvent extends Component {
  openForm = (isOpenLoginForm, isOpenSignUpForm) => {
    this.props.openForm(isOpenLoginForm, isOpenSignUpForm);
  };
  closeLoginForm = isOpenLoginForm => {
    this.props.closeLoginForm(isOpenLoginForm);
  };
  openSignUpForm = (isOpenSignUpForm, isOpenLoginForm) => {
    this.props.openSignUpForm(isOpenSignUpForm, isOpenLoginForm);
  };
  closeForm = isOpenForm => {
    this.props.closeForm(isOpenForm);
  };
  addNewUser = user => {
    this.props.addNewUser(user);
  };

  userLogin = userLogin => {
    this.props.userLogin(userLogin);
  };
  render() {
    let { displayForm, users } = this.props;
    let isLoginForm = displayForm.isLoginForm;
    let isSignUpForm = displayForm.isSignUpForm;
    return (
      <Fragment>
        <Header openForm={this.openForm} />
        <LoginForm
          isLoginForm={isLoginForm}
          closeLoginForm={this.closeLoginForm}
          openForm={this.openForm}
          closeForm={this.closeForm}
          userLogin={this.userLogin}
          users={users}
        />
        <SignUpForm
          users={users}
          addNewUser={this.props.addNewUser}
          isSignUpForm={isSignUpForm}
          openForm={this.openForm}
          closeForm={this.closeForm}
        />
      </Fragment>
    );
  }
}

export default HeaderEvent;
