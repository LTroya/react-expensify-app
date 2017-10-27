export const confirmRemoveExpense = (expenseToRemove) => ({
    type: 'CONFIRM_REMOVE_EXPENSE',
    expenseToRemove,
});

export const cancelRemoveExpense = () => ({
    type: 'CANCEL_REMOVE_EXPENSE',
    expenseToRemove: {},
});
