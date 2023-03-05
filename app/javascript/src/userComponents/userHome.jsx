import React from "react";
import LeftBox  from './leftBox';
import RightBox from './rightBox';
import UserHomeFeed from './userHomeFeeds';
import "../home.scss";

class UserHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            email: this.props.email,
        }
    }

    render() {
        const {username, email} = this.state;

        return (
            <div className="container">
                <div className="row g-0 h-100">
                    <div className="col-3 d-flex justify-content-end">
                        <LeftBox username={username} email={email}/>
                    </div>
                    <div className="col-6 feed-inner">
                        <UserHomeFeed username={username}/>
                    </div>
                    <div className="col-3">
                        <RightBox/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserHome;