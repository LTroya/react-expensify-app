import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisiblesExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';

    return (
        <div>
            <p>Viewing {expensesCount} {expenseWord} totalling {numeral(expensesTotal).format('$0,0.00')}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisiblesExpenses(state.expenses, state.filters);
    const total = getExpensesTotal(visibleExpenses) / 100;

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: total,
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
