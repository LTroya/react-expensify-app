import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, expense, history, startRemoveExpense, wrapper;

beforeEach(() => {
    expense = expenses[0];
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            expense={expense}
            history={history} id={expense.id}/>);
});

test('Should render EditExpensePage correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('Should handle start remove expense', () => {
   wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expense.id});
});
