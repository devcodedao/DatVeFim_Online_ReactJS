import * as Types from "./../constants/actionTypes";

let initialState = {
  isLoginForm: false,
  isSignUpForm: false,
  isShowTrailer: false
};

const displayForm = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPEN_FORM:
      state = {
        isLoginForm: action.isOpenLoginForm,
        isSignUpForm: action.isOpenSignUpForm
      };
      return state;
    case Types.CLOSE_FORM:
      state = {
        isLoginForm: action.isOpenForm,
        isSignUpForm: action.isOpenForm,
        isShowTrailer: action.isOpenForm
      };
      return state;
    case Types.SHOW_TRAILER:
      state = {
        isLoginForm: action.isOpenLoginForm,
        isSignUpForm: action.isOpenSignUpForm,
        isShowTrailer: action.isOpen
      };
      return state;
    default:
      return state;
  }
};
export default displayForm;
