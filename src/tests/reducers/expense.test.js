import expenseReducer from '../../reducers/expense';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set expense to remove', () => {
    const expenseToRemove = expenses[1];
    const action = {
        type: 'CONFIRM_REMOVE_EXPENSE',
        expenseToRemove,
    };
    const state = expenseReducer({}, action);
    expect(state).toEqual(expenseToRemove);
});

test('Should cancel and clean expense to remove', () => {
    const expenseToRemove = {};
    const action = {
        type: 'CANCEL_REMOVE_EXPENSE',
        expenseToRemove,
    };
    const state = expenseReducer(expenses[1], action);
    expect(state).toEqual({});
});

