import { login, logout } from '../../actions/auth';

test('Should set up login action object', () => {
    const action = login(123);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 123,
    });
});

test('Should set up logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});
