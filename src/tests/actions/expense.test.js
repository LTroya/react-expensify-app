import { confirmRemoveExpense, cancelRemoveExpense } from '../../actions/expense';
import expenses from '../fixtures/expenses';

test('Should set up confirmRemoveExpense object', () => {
    const expenseToRemove = expenses[1];
    const action = confirmRemoveExpense(expenseToRemove);
    expect(action).toEqual({
        type: 'CONFIRM_REMOVE_EXPENSE',
        expenseToRemove,
    });
});

test('Should set up cancelRemoveExpenseObject', () => {
    const action = cancelRemoveExpense();
    expect(action).toEqual({
        type: 'CANCEL_REMOVE_EXPENSE',
        expenseToRemove: {},
    });
});
