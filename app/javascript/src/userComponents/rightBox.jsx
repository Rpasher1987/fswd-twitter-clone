import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faCircle} from "@fortawesome/free-solid-svg-icons"; 
import {faUser} from '@fortawesome/free-regular-svg-icons';

class RightBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSearchResult: false,
        }
    };

    showSearchResultMethod = () => {

        const inputFocus = document.querySelector('.right-box-above .input-group');
        
        if(!this.state.showSearchResult) {
            inputFocus.classList.add('focus')   
        } else {
            inputFocus.classList.remove('focus')
        }
        this.setState({
            showSearchResult: !this.state.showSearchResult
        })
    };

    trendsForYouStats = [
        {
            id: 1,
            topic: "Ukraine",
            hashtag: "Ukraine",
            numberOfTweets: "14.7K",
        },
        {
            id: 2,
            topic: "Crypto",
            hashtag: "crypto",
            numberOfTweets: "12.6K",
        },
        {
            id: 3,
            topic: "Finance",
            hashtag: "finance",
            numberOfTweets: "11.5K",
        },
        {
            id: 4,
            topic: "Baking",
            hashtag: "keylimepie",
            numberOfTweets: "9.9K",
        },
    ];

    relevantUser = [
        {
            id: 1,
            name: 'Rick James',
            username: 'itsrickjamesbitch'
        },
        {
            id: 2,
            name: 'Indiana Jones',
            username: 'Indie'
        }

    ];

    render() {
        return(
            <div className="d-flex flex-column right-box-above px-2 py=2">
                <div className="mb-3">
                    <div className="input-group search-bar-background">
                        
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faSearch} className='search-bar-icon'/>
                        </span>

                        <input type="text" className="form-control" placeholder="Search on Twitter" aria-label="Search on Twitter" aria-describedby="basic-addon1" onFocus={this.showSearchResultMethod} onBlur={this.showSearchResultMethod} />

                    </div>
                </div>

                {this.state.showSearchResult ? (<div id="searchResults"><p className="search-bar-help">Search for any trending topic today</p></div>) : (<div></div>)
                }

                <div className="right-box-middle">
                    <div className="px-3 py-2">
                        <h2><b>Trends for you</b></h2>
                </div>
                    <div>
                        {this.trendsForYouStats.map(tweet => {
                            return(
                                <div key={tweet.id} className="row g-0 d-flex flex-column px-2 py-3 trend-for-you-stats">
                                    
                                    <div className="col">
                                        <span>{tweet.topic}</span>
                                        <span> • Trending</span>
                                    </div>
                                    
                                    <div className="col">
                                        <h6 className="my-0"><b>#{tweet.hashtag}</b></h6>
                                    </div>

                                    <div className="col">
                                        <span>{tweet.numberOfTweets} Tweets</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="right-box-below">
                    
                    <div className="px-3 py-2">
                        <h2><b>Who to follow</b></h2>
                    </div>

                    <div>
                        {this.relevantUser.map(user => {
                            return (

                                <div key={user.id} className='row g-0 d-flex align-items-center px-2 py-3'>
                                    
                                    <div className="col-2">
                                        <span className="fa-layers fa-fw fa-2x">
                                            <FontAwesomeIcon icon={faCircle} className="circle-grey"/>
                                            <FontAwesomeIcon icon={faUser} transform="shrink-4"/>
                                        </span>
                                    </div>

                                    <div className="col-6 d-flex flex-column justify-content-center">
                                        <h6 className="my-0"><b>{user.name}</b></h6>
                                        <h6 className="my-0"><b>@{user.username}</b></h6>
                                    </div>

                                    <div className="col-4 d-flex justify-content-center">
                                        <button type="button" className="btn btn-dark btn-follow">Follow</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default RightBox;