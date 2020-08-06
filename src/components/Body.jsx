import React, { Component } from 'react'

export default class Body extends Component {
    state = {
        clicked : false,
        range : "1 Jan - 30 June",
        show : 20,
        payment: "All"
    }
    
    render() {
        return (
            <div className="body">
                <div className="highlight d-flex justify-content-between">
                    <div className="highlight-left d-flex">
                        <div className="highlight-item mr-2 d-flex justify-content-between">
                            <div>
                                <p>Daily Transaction Volume</p>
                                <p className="font-weight-bold figures">2,342</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                        <div className="highlight-item mr-2 d-flex justify-content-between">
                            <div>
                                <p>Daily Transaction Value</p>
                                <p className="font-weight-bold figures">₦4,000,000</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                    </div>
                    <div className="highlight-right d-flex">
                    <div className="highlight-item mr-2 d-flex justify-content-between">
                            <div>
                                <p>Total Transaction Volume</p>
                                <p className="font-weight-bold figures">452,000</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                        <div className="highlight-item d-flex justify-content-between">
                            <div>
                                <p>Total Transaction Value</p>
                                <p className="font-weight-bold figures">₦4,000,000</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                    </div>
                </div>
                <section className="charts">
                    <div className="charts-left">
                        <div className="charts-left-top px-3 d-flex justify-content-between py-2">
                            <h5>Today: 5, Aug 2018</h5>
                            <div>
                                <div className="range-dropdown">
                                    <button className="range-btn">{this.state.range}<span className="ml-4"><img src="images/Shape.png" width="10px"></img></span></button>
                                    <ul>
                                        <li>Wisdom</li>
                                        <li>Wisdom</li>
                                        <li>Wisdom</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="charts-left-bottom">
                            
                        </div>
                    </div>
                    <div className="charts-right">

                    </div>
                </section>
            </div>
        )
    }
}
