export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';
export function receiveQuestions(questions) {
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function updateQuestions(questions) {
    return{
        type: UPDATE_QUESTIONS,
        questions
    }
}

