import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RemoveExpenseModal } from '../../components/RemoveExpenseModal';
import expenses from '../fixtures/expenses';

let wrapper, startRemoveExpense, cancelRemoveExpense, expense, showModal, history;

beforeEach(() => {
    expense = expenses[1];
    history = { push: jest.fn() };
    startRemoveExpense = jest.fn();
    cancelRemoveExpense = jest.fn();
    wrapper = shallow(<RemoveExpenseModal expense={expense}
                                          history={history}
                                          startRemoveExpense={startRemoveExpense}
                                          cancelRemoveExpense={cancelRemoveExpense}
                                          showModal={showModal}/>);
});

test('Should render RemoveExpenseModal correclty', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('Should hide modal on cancel description', () => {
    wrapper.find('button.button--secondary').simulate('click');
    expect(cancelRemoveExpense).toHaveBeenCalled();
});

test('Should start remove expense', () => {
    wrapper.find('#remove').simulate('click');
    expect(cancelRemoveExpense).toHaveBeenCalled();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense);
});
