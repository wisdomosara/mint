import React, { Component } from 'react'

export default class Header extends Component {

    state = {
        mobile: false
    }

    handlenav = () => {
        this.setState(prevState => {
            return {
                mobile : !prevState.mobile
            }
        })
    }
    render() {
        const nav ={ 
            top:60,
            right:1
        }
        return (
            <div className="header">
                <div className="d-flex heading justify-content-between align-items-center">
                    <div className="header-left d-flex align-items-baseline">
                        <h3>TransMonitor</h3>
                        <div className="searchbox">
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
                                    <div className="d-flex align-items-center">
                                        <div className="mr-3">
                                            <p className="text-right small-name">Hello</p>
                                            <p className="text-right big-name"> Oluwaleke Ojo</p>
                                        </div>
                                        <img src="images/IMG-20180413-WA0005.png" className="round-img" width="40px" height="43px"></img>
                                    </div>
                                </li>
                            </ul>
                    </div>
                    <div className="mobile" onClick={this.handlenav}>
                        {this.state.mobile ? <img src="images/TWalsh__close1-512.png" width="30px"></img> : <img src="images/Hamburger_icon.svg.png" width="30px"></img>}
                        
                    </div>
                    {this.state.mobile ? <div className="mobile-nav">
                            <ul className="d-flex align-items-center justify-content-center flex-column">
                                    <li>Support</li>
                                    <li>FAQ</li>
                                    <li>
                                        <div className="notification">
                                            <img src="images/Group (1).png" width="20px"></img>
                                            <div className="badge">6</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="mr-3">
                                                <p className="text-right small-name">Hello</p>
                                                <p className="text-right big-name"> Oluwaleke Ojo</p>
                                            </div>
                                            <img src="images/IMG-20180413-WA0005.png" className="round-img" width="40px" height="43px"></img>
                                        </div>
                                    </li>
                                </ul>
                        </div> : null}
                </div>
            
            </div>
        )
    }
}
