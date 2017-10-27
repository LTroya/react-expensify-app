import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import { startRemoveExpense } from '../actions/expenses';
import { cancelRemoveExpense } from '../actions/expense';

export class RemoveExpenseModal extends Component {
    handleRemoveExpense = () => {
        this.props.startRemoveExpense(this.props.expense);
        // This is form hide the modal, maybe there is
        // an better approach to give it a better name
        this.props.cancelRemoveExpense();
        this.props.history.push('/');
    };

    render() {
        return (
            <Modal
                isOpen={this.props.showModal}
                onRequestClose={this.props.cancelRemoveExpense}
                contentLabel="Remove expense"
                closeTimeoutMS={200}
                className="modal">
                <h3 className="modal__title">Remove expense</h3>
                Are you sure you want to remove <strong>{this.props.expense.description}</strong> expense?
                <div className="modal__actions">
                    <button className="button" id="remove" onClick={this.handleRemoveExpense}>Remove</button>
                    <button className="button button--secondary" onClick={this.props.cancelRemoveExpense}>Cancel
                    </button>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense,
    showModal: !!state.expense.id,
    history: history,
});

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (data) => {
        dispatch(startRemoveExpense(data));
    },
    cancelRemoveExpense: () => {
        dispatch(cancelRemoveExpense());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveExpenseModal);
