import React, { Component } from 'react';



 class Table extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default class Body extends Component {
    state = {
        clickedRange : false,
        range : "1 Jan - 30 June",
        show : 20,
        payment: "All",
        clickedshow: false,
        clickedpay: false
    }
    handlerange = (e) => {
        this.setState({
            range: e.target.textContent
        })
        this.handlerangeclick()
    }
    handleshow = (e) => {
        this.setState({
            show: e.target.textContent
        })
        this.handleshowclick()
    }
    handlepay = (e) => {
        this.setState({
            payment: e.target.textContent
        })
        this.handlepayclick()
    }
    handlerangeclick = () => {
        this.setState(prevState => {
            return {
                clickedRange:!prevState.clickedRange
            }
        })
    }
    handleshowclick = () => {
        this.setState(prevState => {
            return {
                clickedshow:!prevState.clickedshow
            }
        })
    }
    handlepayclick = () => {
        this.setState(prevState => {
            return {
                clickedpay:!prevState.clickedpay
            }
        })
    }
    render() {
        return (
        <React.Fragment>
            <div className="d-flex body flex-column">
                <div className="highlight d-flex flex-wrap">
                        <div className="highlight-item mr-sm-2 mb-2 d-flex justify-content-between flex-wrap">
                            <div>
                                <p>Daily Transaction Volume</p>
                                <p className="font-weight-bold figures">2,342</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                        <div className="highlight-item mr-sm-2 mb-2 d-flex justify-content-between">
                            <div>
                                <p>Daily Transaction Value</p>
                                <p className="font-weight-bold figures">₦4,000,000</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                    
                    
                        <div className="highlight-item mr-sm-2 mb-2 d-flex justify-content-between">
                            <div>
                                <p>Total Transaction Volume</p>
                                <p className="font-weight-bold figures">452,000</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                        <div className="highlight-item mb-2 d-flex justify-content-between">
                            <div>
                                <p>Total Transaction Value</p>
                                <p className="font-weight-bold figures">₦4,000,000</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                </div>
                <div className="charts  d-flex">
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
                        <p>Orders</p>
                        <progress  value="80" max="100"></progress>
                        <p>Pending Orders: 20</p>
                        <p>Reconcilled Orders: 80</p>
                        <p>Total Orders: 100</p>
                        <p className=" mt-5">Orders</p>
                        <progress  value="80" max="100"></progress>
                        <p>Un-reconcilled Payments: 20</p>
                        <p>Reconcilled Payments: 80</p>
                        <p>Total Payments: 100</p>
                    </div>
                </div>
                <div className="payment">
                    <h4>Payments</h4>
                    <div className="filter-row d-flex align-items-baseline flex-wrap">
                        <p className="mr-4">Showing</p>
                        <div className="show-dropdown mr-5">
                            <button className="show-btn" onClick={this.handleshowclick}>{this.state.show}<span className="ml-2"><img src="images/Shape.png" width="10px"></img></span></button>
                            {this.state.clickedshow ? <ul>
                                <li onClick={this.handleshow}>10</li>
                                <li onClick={this.handleshow}>20</li>
                            </ul> : null}
                        </div>
                        <p className="mr-1 out">out of 500 payments</p>
                        <div className="search-payments mr-4">
                            <img src='images/search.png' width="15px" className="mr-2"></img>
                            <input type="search" placeholder="Search Payments.." className="search-input"></input>
                        </div>
                        <p className="mr-4">Show</p>
                        <div className="pay-dropdown mr-3">
                            <button className="pay-btn" onClick={this.handlepayclick}>{this.state.payment}<span className="float-right"><img src="images/Shape.png" width="10px"></img></span></button>
                            {this.state.clickedpay ? <ul>
                                <li onClick={this.handlepay}>All</li>
                                <li onClick={this.handlepay}>Reconcilled</li>
                                <li onClick={this.handlepay}>Un-reconcilled</li>
                                <li onClick={this.handlepay}>Settled</li>
                                <li onClick={this.handlepay}>Unsettled</li>
                            </ul> : null}
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
            
        )
    }
}
