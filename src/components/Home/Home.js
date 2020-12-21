import React from 'react';
import { Button } from '../../assets/styles/Button';
import '../App.css';
import Header from '../Header/Header';
import { HomeStyled } from './Home.styled'
import agent from '../../agent';
import { connect } from 'react-redux';
import {
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
    UPDATE_FIELD_HOME,
    LINK,
    SHORTEN
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.home,
    appName: state.common.appName,
    token: state.common.token
});

const mapDispatchToProps = dispatch => ({
    onChangeUrl: value =>
        dispatch({ type: UPDATE_FIELD_HOME, key: 'link', value }),
    onSubmit: (link) =>
        dispatch({ type: SHORTEN, payload: agent.Links.shortenonce(link) }),
    onLoad: (payload) =>
        dispatch({ type: HOME_PAGE_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
    constructor() {
        super();
        this.changeUrl = ev => this.props.onChangeUrl(ev.target.value);
        this.submitForm = (url) => ev => {
            ev.preventDefault();
            this.props.onSubmit(url);
        };
    }

    componentWillUnmount() {
        this.props.onUnload();
    }



    render() {
        const link = this.props.link
        return (
            <div className="Home" >
                <Header />
                <HomeStyled>
                    <div id="intro">
                        <h1>Linkify.io</h1>
                        <h3>An extremely fast URL shortner</h3>

                    </div>

                    <form onSubmit={this.submitForm(link)} className="form">
                        <input
                            name="link"
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Enter URL"
                            value={link}
                            onChange={this.changeUrl
                            } />
                        <div>

                        </div>
                        <Button
                            className="btn btn-lg btn-primary pull-xs-right"
                            type="submit">
                            Linkify it!
                  </Button>
                    </form>
                </HomeStyled>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
