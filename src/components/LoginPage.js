import React from 'react';
import { connect } from 'react-redux';
import {
    startLoginWithFacebook,
    startLoginWithGithub,
    startLoginWithGoogle,
    startLoginWithTwitter,
} from '../actions/auth';

export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook, startLoginWithTwitter, startLoginWithGithub }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button button--google" onClick={startLoginWithGoogle}>Login with Google</button>
            <button className="button button--facebook" onClick={startLoginWithFacebook}>Login with Facebook</button>
            <button className="button button--twitter" onClick={startLoginWithTwitter}>Login with Twitter</button>
            <button className="button button--github" onClick={startLoginWithGithub}>Login with Github</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook()),
    startLoginWithTwitter: () => dispatch(startLoginWithTwitter()),
    startLoginWithGithub: () => dispatch(startLoginWithGithub()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
