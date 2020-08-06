import React, { Component } from 'react'

export default class Body extends Component {
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
            </div>
        )
    }
}
