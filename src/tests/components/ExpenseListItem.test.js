import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render ExpenseListItem correctly', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem {...expense} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
