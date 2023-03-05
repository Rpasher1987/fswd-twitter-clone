import React from "react";
import { handleErrors, safeCredentials } from "@utils/fetchHelper";
import FormatDate from '@utils/formatDate';
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faCircle}  from "@fortawesome/free-regular-svg-icons";
import {faUser}  from "@fortawesome/free-regular-svg-icons";


class Tweets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username
        }
    }

    deleteTweet = e => {
        e.preventDefault();
        let tweetElement = e.target.closest('.tweet-inner');
        let tweetId = tweetElement.getAttribute('id');

        fetch(`/api/tweets/${tweetId}`, safeCredentials({
            method: 'DELETE',
        }))
        .then(handleErrors)
        .then(data => {
            console.log('data: ', data);
            if(data.success) {
                this.props.getAllTweets();
            }
        })
        .catch(error => {
            this.setState({
                error: 'You cannot delete the tweet.'
            })
        })
    }

    render() {
        const { username } = this.state;
        const { tweets } = this.props;

        return(
            <div className="tweets pt-3">
            {tweets.map(tweet => {
                return(
                    <div key={tweet.id} id={tweet.id} className="row d-flex py-2 tweet-inner">
                        <div className="col-1">
                            <span className="fa-layer fa-fw fa-2x">
                                <FontAwesomeIcon icon={faCircle} className="circle-grey"/>
                                <FontAwesomeIcon icon={faUser} transform="shrink-4"/>
                            </span>
                        </div>
                        <div className="col-11">
                            <div className="row d-flex flex-column tweet-details">
                                <div className="col d-flex justify-content-between">
                                    <div>
                                        <span className="tweet-name"><b>{tweet.username}</b></span>
                                        <a href={`/${tweet.username}`} className="p-0 tweet-username">@{tweet.username}</a>
                                        <span className="tweet-time">• {FormatDate(tweet.created_at, true)}</span>
                                    </div>

                                    {(tweet.username == username) ? <button type="button" className="btn btn-link btn-delete" onClick={this.deleteTweet}>Delete</button> : <div></div>}

                                </div>
                                <div className="col py-1">
                                    <span>{tweet.message}</span>
                                    {(tweet.image !== null) ? <div><img className="img-fluid" src={tweet.image} alt='Image'/></div> : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Tweets;