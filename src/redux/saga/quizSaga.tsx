import { call, put } from 'redux-saga/effects';
import { quiz, checkQuizAnswer } from '../../services/api';
import * as quizActions from '../actions/quiz';
import * as type from '../actions/types';

/**
 * Create  quizAsync file for manage saga effects
 * @class  quizAsync
 */
export function* quizAsync() {
  try {
    // Enable quiz loader
    yield put(quizActions.enableLoader());

    // Calling function for API
    const response = yield call(quiz);

    if (response) {
      // Store quiz response
      yield put(quizActions.onQuizResponse(response));
      // Disable loader
      yield put(quizActions.disableLoader());

    } else {
      // quiz failed
      yield put(quizActions.quizFailed());
      // Disable loader
      yield put(quizActions.disableLoader());
    }
  } catch (error) {
    // quiz failed
    yield put(quizActions.quizFailed());
    // Disable loader
    yield put(quizActions.disableLoader());
  }
}

export function* checkQuizAnswerAsync() {
  try {
    // Enable quize Answer loader
    yield put(quizActions.enableLoader());

    // Calling function for API
    const response = yield call(checkQuizAnswer);
    if (response) {
      // Store quize Answer response
      yield put(quizActions.onCheckQuizAnswerResponse(response));
      // Disable loader
      yield put(quizActions.disableLoader());
    } else {
      // quize Answer failed
      yield put(quizActions.quizAnswerFailed());
      // Disable loader
      yield put(quizActions.disableLoader());
    }
  } catch (error) {
    // quize Answer failed
    yield put(quizActions.quizAnswerFailed());
    // Disable loader
    yield put(quizActions.disableLoader());
  }
}