import React from 'react';
import Modal from 'react-modal';

const RemoveExpensesModal = ({handleRemoveRequested, handleHideModal, handleRemoveExpense, showModal, expense}) => (
    <Modal
        isOpen={showModal}
        onRequestClose={handleHideModal}
        contentLabel="Remove expense"
        closeTimeoutMS={200}
        className="modal">
        <h3 className="modal__title">Remove expense</h3>
        Are you sure you want to remove <strong>{expense.description}</strong> expense?
        <div className="modal__actions">
            <button className="button" onClick={handleRemoveExpense}>Remove</button>
            <button className="button button--secondary" onClick={handleHideModal}>Cancel</button>
        </div>
    </Modal>
);

export default RemoveExpensesModal;
