import * as types from '../actions/types';
import {ActionType} from './type';
// init state value
const initialState = {
  spinner: false,
  quizeResponse: {},
  quizId: '',
  quizAnswer: '',
  quizAnswerId: '',
  quizAnswerResponse: {},
};

/**
 * Reducer
 * @class quizReducer
 */
export default function quizReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case types.ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.QUIZ_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.QUIZ_REQUEST_RESPONSE:
      return {
        ...state,
        quizeResponse: action.response,
        spinner: false,
      };
    case types.QUIZ_FAILED:
      return {
        ...state,
        spinner: false,
      };
    case types.CHECK_QUIZANSWER_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.CHECK_QUIZANSWER_RESPONSE:
      return {
        ...state,
        quizeResponse: action.response,
        spinner: false,
      };
    case types.QUIZANSWER_FAILED:
      return {
        ...state,
        spinner: false,
      };

    default:
      return state;
  }
}
