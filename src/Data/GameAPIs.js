import {_getUsers,_getQuestions,_saveQuestionAnswer,_saveQuestion} from './_DATA'

export function getGameInitialData() {
    return Promise.all(
        [
        _getUsers(),
        _getQuestions()
        ]
    ).then(([users,questions]) => ({
        users,questions
    }));
}

export function answerQuestions(userId,questionId,answer) {
    return new Promise( (resolve,reject) => resolve(_saveQuestionAnswer({
        authedUser:userId, qid:questionId, answer:answer
    }))).then(() => Promise.all(
        [
            _getUsers(),
            _getQuestions()
        ]
    )).then(([users,questions]) => ({
        users,questions
    }));
}

export function createNewQuestions(optionA,optionB,user)
{
    const question = {
        optionOneText:optionA, optionTwoText:optionB, author:user.id
    };
    return new Promise( (resolve,reject) => resolve(_saveQuestion(question))).then(() => Promise.all(
        [
            _getUsers(),
            _getQuestions()
        ]
    )).then(([users,questions]) => ({
        users,questions
    }));
}