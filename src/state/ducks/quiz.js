import data from "__mocks__/data";

export const quizState = {
  questions: data,
};

export default (state = quizState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
