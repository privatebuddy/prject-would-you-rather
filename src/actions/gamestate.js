export const SETUP_GAME_INITIAL_STATE = 'SETUP_GAME_INITIAL_STATE';
export const APPLY_FILTER_TO_QUESTIONS = 'APPLY_FILTER_TO_QUESTIONS';
export function setupInitialState() {
    return{
        type:SETUP_GAME_INITIAL_STATE
    }
}

export function applyFilterToQuestion(filter) {
    return{
        type:APPLY_FILTER_TO_QUESTIONS,
        filter
    }
}