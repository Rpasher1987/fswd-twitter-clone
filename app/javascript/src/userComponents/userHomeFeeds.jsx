import React from "react";
import TweetForm from './tweetForm';
import Tweets from './tweets';
import { handleErrors } from '@utils/fetchHelper';

class UserHomeFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            tweets: [],
        }
    }

    componentDidMount() {
        this.getAllTweets();
    }

    getAllTweets = () => {
        fetch('/api/tweets')
        .then(handleErrors)
        .then(data => {
            console.log('data', data);
            this.setState({
                tweets: data.tweets,
            })
        })
    }

    render() {
        const { username, tweets } = this.state;
        return(
            <div>
                <div className="row d-flex flex-column px-3 py-2">
                    <div className="col py-3">
                        <h5 className="mb-0"><b>Home</b></h5>
                    </div>
                </div>

                <div className="col">
                    <TweetForm tweets={tweets} getAllTweets={this.getAllTweets}/>
                </div>

                <div className="col">
                    <Tweets username={username} tweets={tweets} getAllTweets={this.getAllTweets}/>
                </div>
            </div>            
        )
    }
}

export default UserHomeFeed;