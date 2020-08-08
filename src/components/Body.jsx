import React, { Component } from 'react';
import data from './dummydata'


 class Table extends Component {

    render() {
        const style = {
            backgroundColor: "#FFFFFF",
            borderBottom : "1px solid #CCCFD4",
            height: 76
        }
        const yes = {
            color: "#7AE602"
        }
        const no = {
            color : "#EBC315"
        }
        return (
            <div className="d-flex align-items-center table-component px-3" style={style}>
                <div className="name d-flex align-items-center">
                    <img src="images/vw symbol.png" className="mr-3" width="36px"></img>
                    <p className="pt-2">{this.props.table["name"]}</p>
                </div>
                <div className="price text-left pt-3" >
                    <p>{this.props.table.price}</p>
                </div>
                <div className="transact pt-3" >
                    <p>{this.props.table.transactionNo}</p> 
                </div>
                <div className="time pt-3" >
                    <p>{this.props.table.time}</p>
                </div>
                <div className="status pt-3" >
                    <button  style ={this.props.table.status == "reconciled" ? yes : no}><span>{this.props.table.status == "reconciled" ? <img src="images/Ellipse 2 (1).png" width="9px" className="mr-2"></img> : <img src="images/Ellipse 2.png" width="9px" className="mr-2"></img>} </span> {this.props.table.status}</button>
                </div>
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
        clickedpay: false,
        data : data
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
        const style1 = {
            width: 110,
            borderRight: "1.4px solid #CFE8FB",
            height:300
        }
        const style2 = {
            width: 122.6,
            borderRight: "1.4px solid #CFE8FB",
            height:300
        }
        const style3 = {
            width: 120.6,
            borderRight: "1.4px solid #CFE8FB",
            height:300
        }
        const style4 = {
            width: 128.6,
            borderRight: "1.4px solid #CFE8FB",
            height:300
        }
        const style5 = {
            width: 122.62,
            borderRight: "1.4px solid #CFE8FB",
            height:300
        }
        const style6 = {
            width: 119.62,
           
            height:300
        }

        const tables = this.state.data.map(table => <Table key={table.id} table={table}/>)
        return (
        <React.Fragment>
            <div className="d-flex body flex-column">
                <div className="highlight d-flex flex-wrap">
                        <div className="highlight-item mb-2 d-flex justify-content-between flex-wrap">
                            <div>
                                <p>Daily Transaction Volume</p>
                                <p className="font-weight-bold figures">2,342</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                        <div className="highlight-item mb-2 d-flex justify-content-between">
                            <div>
                                <p>Daily Transaction Value</p>
                                <p className="font-weight-bold figures">₦4,000,000</p>
                            </div>
                            <img src="images/small chart.png" width="63px"></img>
                        </div>
                    
                    
                        <div className="highlight-item mb-2 d-flex justify-content-between">
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
                        <div className="charts-left-top mb-3 px-3 d-flex justify-content-between py-2">
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
                        <div className="charts-left-bottom d-flex">
                            <div className="text-center" style={style1}>
                                <p>Jan</p>
                            </div>
                            <div className="text-center" style={style2}>
                                <p>Feb</p>
                            </div>
                            <div className="text-center" style={style3}>
                                <p>Mar</p>
                            </div>
                            <div className="text-center" style={style4}>
                                <p>Apr</p>
                            </div>
                            <div className="text-center" style={style5}>
                                <p>May</p>
                            </div>
                            <div className="text-center" style={style6}>
                                <p>Jun</p>
                            </div>

                        </div>
                        <img className="graph" src="images/Gradient.png"></img>
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
                        <div className="show-dropdown mr-3">
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
                    <div className="table-scroll mt-3">
                        <div className="table d-flex px-3 align-items-center">
                            <div className="name pt-3" >
                                <p>Item Type</p>
                            </div>
                            <div className="price pt-3" >
                                <p>Price</p>
                            </div>
                            <div className="transact pt-3" >
                                <p>Transaction No</p> 
                            </div>
                            <div className="time pt-3" >
                                <p>Time</p>
                            </div>
                            <div className="status pt-3" >
                                <p>Status</p>
                            </div>
                        </div>
                        {tables}
                        
                    </div>
                    
                </div>
                <div className="footer d-flex justify-content-between flex-wrap mt-3">
                    <div>
                        <p>Showing 1 to 10 of 500 entries</p>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex pagination align-items-center justify-content-center px-3 py-1">
                            <p>Previous</p>
                        </div>
                        <div className="d-flex pagination1 align-items-center justify-content-center px-3 py-1 bg-primary text-white">
                            <p>1</p>
                        </div>
                        <div className="d-flex pagination2 align-items-center justify-content-center px-3 py-1">
                            <p>2</p>
                        </div>
                        <div className="d-flex pagination3 align-items-center justify-content-center px-3 py-1">
                            <p>Next</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
            
        )
    }
}
