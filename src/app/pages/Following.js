import React from 'react';
import { connect } from 'react-redux';
import { getFollowing } from '../../actions/user';
import _Following_Follower_Card from './_Following_Follower_Card';

import { changeLoadingStatus } from '../../actions/app';

class Following extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            filterList: []
        };
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(e){
        var keyword = e.target.value;
        if(keyword != ""){
            var filterList = [];
            for(var i = 0; i < this.props.followingList.length; i ++)
            {
                var item = this.props.followingList[i];
                if (item.name.toLowerCase().includes(keyword.toLowerCase())) filterList.push(item);
            }
            this.setState({filterList: filterList})
        }
        else this.setState({filterList: this.props.followingList})
    }

    componentDidMount()
    {
        document.title = "Following List";
        var token = localStorage.getItem('token');
        this.props.getFollowing(token).then(() =>{
            this.props.changeLoadingStatus(false);
            this.setState({
                filterList: this.props.followingList
            });
        });
    }
    render() {
        var list = [];
        for(var i = 0; i < this.state.filterList.length; i++)
        {
            console.log(i);
            var item = <_Following_Follower_Card name={this.state.filterList[i].name} />;
            list.push(item);
        }
        return (
            <>
            <div class="container">
                <div className="row mt-3 d-flex justify-content-between ">
                    <div className="col-sm-4 ">
                        <h3>Total <span class="badge badge-primary p-2">{this.props.followingList.length}</span></h3>
                    </div>
                    <div class="col-md-3">
                        <input class="form-control mr-sm-2 " type="search" placeholder="Search" onChange={this.searchHandler}/>
                    </div>
                </div>
                <hr></hr>
                <div className="row d-flex justify-content-start">
                    {list}
                </div>
            </div>
        </>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    //console.log(state);
    return {
        followingList: state.user.followingList,
    }
}
const mapDispatchToProps = dispatch => ({
    getFollowing: (token) => dispatch(getFollowing(token)),
    changeLoadingStatus: (status) => dispatch(changeLoadingStatus(status))
})

export default connect(mapStateToProps, mapDispatchToProps) (Following);