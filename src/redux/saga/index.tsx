import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/types';
import {quizAsync, checkQuizAnswerAsync} from './quizSaga';
/**
 * Create root saga file for manage api request and response
 * @class rootSaga
 */
export default function* rootSaga() {
  // Take quiz saga request
  yield all([takeEvery(types.QUIZ_REQUEST, quizAsync)]);
  // Take check answer saga request
  yield all([takeEvery(types.CHECK_QUIZANSWER_REQUEST, checkQuizAnswerAsync)]);
}
