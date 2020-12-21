import React from 'react'
import Header from '../Header/Header'
import { DashboardStyled } from './Dashboard.styled'
import { Button } from '../../assets/styles/Button'
import LinkTree from './LinkTree'
import { connect } from 'react-redux';
import agent from '../../agent';
import {
    ADD_BRANCH,
    DASHBOARD_PAGE_LOADED,
    DASHBOARD_PAGE_UNLOADED,
    LINK,
    SHORTEN,
    UPDATE_FIELD_DASHBOARD
} from '../../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.dashboard,
    appName: state.common.appName,
    token: state.common.token
})

const mapDispatchToProps = dispatch => ({
    onChangeField: (name, value) =>
        dispatch({ type: UPDATE_FIELD_DASHBOARD, key: name, value }),
    onAddBranch: (name, link) =>
        dispatch({ type: ADD_BRANCH, payload: agent.Links.addLink(name, link) }),
    onLoad: (payload) =>
        dispatch({ type: DASHBOARD_PAGE_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: DASHBOARD_PAGE_UNLOADED })
});

class Dashboard extends React.Component {
    constructor() {
        super();
        this.changeField = ev => {
            let { name, value } = ev.target
            this.props.onChangeField(name, value);
        }
        this.deleteBranch = ev => {
            console.log('Should delete');
        }
    }
    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.Links.mytree()
        ]));
    }

    // const[myLinks, setMyLinks] = useState('')
    // const addLink = (e) => {
    // }
    render() {
        const newBranchName = this.props.branchName;
        const newBranchLink = this.props.branchLink;
        return (
            <div>
                <Header />
                <DashboardStyled>
                    <section>
                        <h2>My Links</h2>
                        <div>
                            <div className='item'>
                                <div className='details'>
                                    <p>https://linkify.io/sdfsdf</p>
                                    <span>F</span>
                                    <p>https://linkify.io/sdfsdf</p>
                                </div>
                                <span className='delete-btn'>D</span>

                            </div>
                            <div className='item'>
                                <div className='details'>
                                    <p>https://linkify.io/sdfsdf</p>
                                    <span>F</span>
                                    <p>https://linkify.io/sdfsdf</p>
                                </div>
                                <span className='delete-btn'>D</span>

                            </div>
                            <Button>Add</Button>
                        </div>
                    </section>
                    <section>
                        <h2>My LinkTree</h2>
                        <p>Link: https://linkify.io/sdfidfs</p>
                        <div>
                            <div><p>Name</p><p>Link</p></div>
                            <div className='item'>
                                <div className='details'>
                                    <p>https://linkify.io/sdfsdf</p>
                                    <span>F</span>
                                    <p>https://linkify.io/sdfsdf</p>
                                </div>
                                <span className='delete-btn' onClick={this.deleteBranch}>D</span>

                            </div>

                            <LinkTree branches={this.props.branches} />
                            <div className="item">
                                <div className='details'>
                                    <input
                                        name="branchName"
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Name"
                                        value={newBranchName}
                                        onChange={this.changeField
                                        } />

                                    <input
                                        name="branchLink"
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Link"
                                        value={newBranchLink}
                                        onChange={this.changeField}
                                    />
                                </div>
                            </div>

                            <Button onClick={this.props.onAddBranch}>Add</Button>
                        </div>
                    </section>
                </DashboardStyled>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
