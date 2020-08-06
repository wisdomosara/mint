import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div>
                    <button className="invoice-btn">GENERATE INVOICE</button>
                </div>
                
                <div className="sidebar-main">
                    <p>Main</p>
                    <div className="d-flex align-items-center mt-3 py-2">
                        <img src="images/Vector (29).png" width="22px" className="mr-4"></img>
                        <p>Overview</p>
                    </div>
                    <p className="mt-3">Payments</p>
                    <div className="d-flex align-items-center mt-1 py-2">
                        <img src="images/Groupnew2.png" width="22px" className="mr-4"></img>
                        <p>All Payments</p>
                    </div>
                    <div className="d-flex align-items-center mt-1 py-2">
                        <img src="images/Groupnew1.png" width="22px" className="mr-4"></img>
                        <p>Reconcilled Payments</p>
                    </div>
                    <div className="d-flex align-items-center mt-1 py-2">
                        <img src="images/Group (2).png" width="22px" className="mr-4"></img>
                        <p>Un - Reconcilled Payments</p>
                    </div>
                    <div className="d-flex align-items-center mt-1 py-2">
                        <img src="images/Group (3).png" width="22px" className="mr-4"></img>
                        <p>Manual Settlement</p>
                    </div>
                    <p className="mt-3">Orders</p>
                    <div className="d-flex align-items-center mt-1 py-2">
                        <img src="images/Group (4).png" width="22px" className="mr-4"></img>
                        <p>All Orders</p>
                    </div>
                    <div className="d-flex align-items-center mt-1 py-2">
                        <img src="images/Group (5).png" width="22px" className="mr-4"></img>
                        <p>Pending Orders</p>
                    </div>
                    <div className="d-flex align-items-center mt-1 py-2">
                        <img src="images/Order.png" width="22px" className="mr-4"></img>
                        <p>Reconcilled Orders</p>
                    </div>
                    <div className="d-flex align-items-center mt-3 py-2">
                        <img src="images/Group (7).png" width="22px" className="mr-4"></img>
                        <p>Merchant Profile</p>
                    </div>
                </div>
            </div>
        )
    }
}
