import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ExpenseListFilters } from '../../components/ExpensesListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />,
    );
});

test('Should render ExpenseListFilters correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('Should render ExpenseListFilters with all data correctly', () => {
    wrapper.setProps({
        filters: altFilters,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('Should handle text change', () => {
    const value = 'Text to filter';
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {value: 'amount'}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
    const startDate = moment(1000);
    const endDate = moment(4000);
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate: startDate,
        endDate: endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
