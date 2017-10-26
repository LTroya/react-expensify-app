import authReducer from '../../reducers/auth';

test('Should set up uid for login', () => {
    const uid = 123;
    const action = {
        type: 'LOGIN',
        uid,
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('Should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer({uid: 123}, action);
    expect(state).toEqual({});
});
