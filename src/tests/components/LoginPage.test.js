import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLoginWithGoogle, startLoginWithFacebook, startLoginWithTwitter, startLoginWithGithub;

beforeEach(() => {
    startLoginWithGoogle = jest.fn();
    startLoginWithFacebook = jest.fn();
    startLoginWithTwitter = jest.fn();
    startLoginWithGithub = jest.fn();
    wrapper = shallow(<LoginPage startLoginWithGoogle={startLoginWithGoogle}
                                 startLoginWithFacebook={startLoginWithFacebook}
                                 startLoginWithTwitter={startLoginWithTwitter}
                                 startLoginWithGithub={startLoginWithGithub}/>);
});

test('Should render Header correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should start login with google on button click', () => {
    wrapper.find('button.button--google').simulate('click');
    expect(startLoginWithGoogle).toHaveBeenCalled();
});

test('Should start login with facebook on button click', () => {
    wrapper.find('button.button--facebook').simulate('click');
    expect(startLoginWithFacebook).toHaveBeenCalled();
});

test('Should start login with twitter on button click', () => {
    wrapper.find('button.button--twitter').simulate('click');
    expect(startLoginWithTwitter).toHaveBeenCalled();
});

test('Should start login with github on button click', () => {
    wrapper.find('button.button--github').simulate('click');
    expect(startLoginWithGithub).toHaveBeenCalled();
});
