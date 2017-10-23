import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
    handleEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    handleRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Edit expense</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.handleEditExpense}
                />

                <button onClick={this.handleRemoveExpense}>
                    Remove
                </button>
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
    startRemoveExpense: (data) => {
        dispatch(startRemoveExpense(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
