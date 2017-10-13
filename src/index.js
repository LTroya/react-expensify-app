import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css/normalize.css';
import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', note: 'Amount of the invoice', amount: 3000, createdAt: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', note: 'Amount of the invoice', amount: 2500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', note: 'Amount of the invoice', amount: 109500, createdAt: 0 }));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
