import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header d-flex justify-content-between align-items-baseline">
                <div className="header-left">
                    <h3>TransMonitor</h3>
                    <div className="searchbox">
                        <img src='images/search.png' width="12px" className="mr-5"></img>
                        <input type="search" placeholder="Search"></input>
                    </div>
                </div>
                <div className="header-right">
                    <div className="d-flex align-items-baseline">
                        <ul>
                            <li>Support</li>
                            <li>FAQ</li>
                            <li>
                                <div className="notification">
                                    <img src="images/Group (1).png"></img>
                                    <div className="badge">6</div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <div>
                                        <p>Hello</p>
                                        <p>Wisdom</p>
                                    </div>
                                    <img src="images/IMG-20180413-WA0005.png" className="round-img" width="40px" height="53px"></img>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
