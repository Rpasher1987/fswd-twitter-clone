import React from "react";
import { safeCredentials, handleErrors } from "@utils/fetchHelper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag, faEllipsis, faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { faBell, faEnvelope, faBookmark, faRectangleList, faUser, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class LeftBox extends React.Component {
    constructor(props) {
        super(props);
    }

    logout = e => {
        e.preventDefault();

        fetch('api/sessions', safeCredentials({
            method: 'DELETE',
        }))
        .then(handleErrors)
        .then(data => {
            if(data.success) {
                this.setState({
                    authenticated: false,
                })
                const params = new URLSearchParams(window.location.search);
                const redirect_url = params.get('redirect_url') || '/';
                window.location = redirect_url;
            }
        })
        .catch(error => {
            this.setState({
                error: 'You could not sign out.',
            })
        })
    }

    render() {
        const {username, email} = this.props;

        return(
            <div className="d-flex flex-column left-box px-2 py-2">
                <nav className="navbar d-flex flex-column">
                    <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faTwitter} className="twitter-small-icon nav-icon"/></a>
                    <ul className="navbar-nav">
                        
                        <li className="nav-item active">
                            <a className="nav-link" href="/"><span><FontAwesomeIcon icon={faHome} className='nav-icon' /> Home</span></a>
                        </li>

                        <li className="nav-item">
                             <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faHashtag} className="nav-icon" /> Explore</span></a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faBell} className="nav-icon" /> Notifications</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faEnvelope} className="nav-icon" /> Messages</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faBookmark} className="nav-icon" /> Bookmarks</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faRectangleList} className="nav-icon" /> Lists</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={`/${username}`}><span><FontAwesomeIcon icon={faUser} className="nav-icon" /> Profile</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"><span>
                            <span className="fa-layers fa-fw nav-icon-layer">
                            <FontAwesomeIcon icon={faCircle} className="nav-icon" />
                            <FontAwesomeIcon icon={faEllipsis} transform="shrink-2" className="nav-icon" />
                            
                            </span>More</span></a>
                        </li>

                    </ul>
                </nav>

                <div className="user-logout">
                        <div className="row d-flex align-items-center">
                            <div className="col-3">
                            <span className="fa-layers fa-fw fa-2x">
                                <FontAwesomeIcon icon={faCircleSolid} className="circle-grey"/>
                                <FontAwesomeIcon icon={faUser} transform="shrink-4"/>
                            </span>
                            </div>
                            <div className="col">
                            <h6>@{username}</h6>
                            </div>
                        </div>
                     
                        <form onSubmit={this.logout} className="d-flex justify-content-center">
                            <button className="btn-primary btn-sm rounded-pill" type="submit" variant="link" size="sm">
                            Log out @{username}
                            </button>
                        </form>
                </div>
            </div>
        )
    }

}

export default LeftBox;