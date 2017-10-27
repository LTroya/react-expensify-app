import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: '123',
        description: 'New expense',
        amount: 2058,
        createdAt: 0,
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {
    const id = expenses[0].id;
    const description = 'New description';
    const action = {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: {
            description
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

test('Should not edit an expense if the id not found', () => {
    const id = 'ID_NOT_FOUND';
    const description = 'New description';
    const action = {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: {
            description
        },
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
   const action = {
       type: 'SET_EXPENSES',
       expenses
   };
   const state = expensesReducer([expenses[1]], action);
   expect(state).toEqual(expenses);
});
