import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header d-flex justify-content-between align-items-baseline px-4">
                <div className="header-left d-flex align-items-baseline">
                    <h3>TransMonitor</h3>
                    <div className="searchbox ml-5">
                        <img src='images/search.png' width="15px" className="mr-2"></img>
                        <input type="search" placeholder="Search" className="search-input"></input>
                    </div>
                </div>
                <div className="header-right">
                        <ul className="d-flex align-items-center">
                            <li>Support</li>
                            <li>FAQ</li>
                            <li>
                                <div className="notification">
                                    <img src="images/Group (1).png" width="20px"></img>
                                    <div className="badge">6</div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-start">
                                    <div className="mr-2 pt-2">
                                        <p className="text-right">Hello</p>
                                        <p className="text-right name"> Oluwaleke Ojo</p>
                                    </div>
                                    <img src="images/IMG-20180413-WA0005.png" className="round-img mt-2" width="40px" height="43px"></img>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        )
    }
}
