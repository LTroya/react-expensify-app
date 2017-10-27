import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveExpenseModal from './RemoveExpenseModal';

export class EditExpensePage extends Component {
    state = {
        showModal: false,
    };

    handleHideModal = () => {
        this.setState((prevState) => ({
            showModal: false,
        }));
    };

    handleRemoveRequested = () => {
        this.setState((prevState) => ({
            showModal: true,
        }));
    };

    handleEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    handleRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.handleHideModal();
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

                    <button className="button button--secondary" onClick={this.handleRemoveRequested}>
                        Remove Expense
                    </button>
                </div>

                <RemoveExpenseModal expense={this.props.expense}
                                     showModal={this.state.showModal}
                                     handleHideModal={this.handleHideModal}
                                     handleRemoveRequested={this.handleRemoveRequested}
                                     handleRemoveExpense={this.handleRemoveExpense}/>
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
