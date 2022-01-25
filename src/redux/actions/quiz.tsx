/**
 * Reducer actions related with quiz
 * @class quizActions
 */
import * as types from './types';

/**
 * @description requestQuiz - quiz request
 */
export function requestQuiz() {
  return {
    type: types.QUIZ_REQUEST,
  };
}

/**
 * @description  quizFailed - quiz failed action
 */
export function quizFailed() {
  return {
    type: types.QUIZ_FAILED,
  };
}

/**
 * @description  onQuizResponse - quiz failed action
 * @param  {object} response - quiz Response
 */
export function onQuizResponse(response: any) {
  return {
    type: types.QUIZ_REQUEST_RESPONSE,
    response,
  };
}

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}

/**
 * @description  disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.DISABLE_LOADER,
  };
}

/**
 * @description requestCheckQuizAnswer - check quiz answer request
 */
export function requestCheckQuizAnswer(quizId: string, quizAnswer: string) {
  return {
    type: types.CHECK_QUIZANSWER_REQUEST,
    quizId: quizId,
    quizAnswer: quizAnswer,
  };
}

/**
 * @description  quizAnswerFailed - check quiz answer failed action
 */
export function quizAnswerFailed() {
  return {
    type: types.QUIZANSWER_FAILED,
  };
}

/**
 * @description  onCheckQuizAnswerResponse - check quiz answer failed action
 * @param  {object} response - check quiz answer Response
 */
export function onCheckQuizAnswerResponse(response: any) {
  return {
    type: types.CHECK_QUIZANSWER_RESPONSE,
    response,
  };
}
