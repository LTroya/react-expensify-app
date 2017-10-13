import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render correctly ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('Should render correctly ExpensesSummary with multiples expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23521321}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});
