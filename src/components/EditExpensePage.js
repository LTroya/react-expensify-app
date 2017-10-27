import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { confirmRemoveExpense } from '../actions/expense';
import RemoveExpenseModal from './RemoveExpenseModal';

export class EditExpensePage extends Component {
    handleRemoveExpenseConfirmation = () => {
        this.props.confirmRemoveExpense(this.props.expense);
    };

    handleEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.handleEditExpense}
                    />

                    <button className="button button--secondary" onClick={this.handleRemoveExpenseConfirmation}>
                        Remove Expense
                    </button>
                </div>

                <RemoveExpenseModal/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => {
        dispatch(startEditExpense(id, expense));
    },
    confirmRemoveExpense: (expenseToRemove) => {
        dispatch(confirmRemoveExpense(expenseToRemove));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
