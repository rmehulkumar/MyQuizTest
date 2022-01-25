const SERVICEURL = '';

export const quiz = () => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve({});
    } catch (e: any) {
      reject(e);
    }
  });
};

export const checkQuizAnswer = (
  quizId: string,
  answerId: string,
  answer: string,
) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve({});
    } catch (e: any) {
      reject(e);
    }
  });
};
