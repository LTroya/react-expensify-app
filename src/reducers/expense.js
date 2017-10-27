const expenseReducerDefaultState = {};

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'CONFIRM_REMOVE_EXPENSE':
            return action.expenseToRemove;
        case 'CANCEL_REMOVE_EXPENSE':
            return {};
        default:
            return state;
    }
};

export default expenseReducer;
