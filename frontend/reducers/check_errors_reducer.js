import { RECEIVE_CHECK_ERRORS, CLEAR_ERRORS } from '../actions/check_actions';


const CheckErrorsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_CHECK_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};


export default CheckErrorsReducer;
