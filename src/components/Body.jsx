import React, { Component } from 'react'

export default class Body extends Component {
    state = {
        clickedRange : false,
        range : "1 Jan - 30 June",
        show : 20,
        payment: "All"
    }
    handlerange = (e) => {
        this.setState({
            range: e.target.textContent
        })
        this.handlerangeclick()
    }
    handlerangeclick = () => {
        this.setState(prevState => {
            return {
                clickedRange:!prevState.clickedRange
            }
        })
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
                <section className="charts d-flex">
                    <div className="charts-left">
                        <div className="charts-left-top px-3 d-flex justify-content-between py-2">
                            <h5>Today: 5, Aug 2018</h5>
                            <div className="d-flex align-items-center">
                                <div className="range-dropdown mr-3">
                                    <button className="range-btn" onClick={this.handlerangeclick}>{this.state.range}<span className="ml-4"><img src="images/Shape.png" width="10px"></img></span></button>
                                    {this.state.clickedRange ? <ul>
                                        <li onClick={this.handlerange}>1 Jan - 30 June</li>
                                        <li onClick={this.handlerange}>1 July - 31 Dec</li>
                                    </ul> : null}
                                </div>
                            
                                <div className="d-flex">
                                    <div className="arrow-holder d-flex align-items-center justify-content-center mr-3">
                                        <img src="images/Arrow (1).png" width="15px"></img>
                                    </div>
                                    <div className="arrow-holder d-flex align-items-center justify-content-center">
                                        <img src="images/Arrow.png" width="15px"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="charts-left-bottom">
                            
                        </div>
                    </div>
                    <div className="charts-right p-3">
                        <h4 className="mb-3">Orders</h4>
                        <progress className="progress_bar" value="80" max="100"></progress>
                    </div>
                </section>
            </div>
        )
    }
}
