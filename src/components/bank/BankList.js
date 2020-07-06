import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import BankListItems from "./BankListItems";
import HeadNavFoot from "../../components/HeadNavFoot";
import { getBanks } from "../../redux/actions/BankActions";

class BankList extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      banksTestList: [
        { bank : { bankName: "SDCC", tenantId: 11011, bankStatus: "1" }, activeAtms: 21, inactiveAtms: 4 },
        { bank : { bankName: "KDCC", tenantId: 11012, bankStatus: "0" } , activeAtms: 21, inactiveAtms: 4 },
        { bank : { bankName: "NDCC", tenantId: 11013, bankStatus: "1" }, activeAtms: 21, inactiveAtms: 4 },
        { bank : { bankName: "ShreeCharan",tenantId: 11014, bankStatus: "1" }, activeAtms: 21, inactiveAtms: 4},
        { bank : { bankName: "GP parsik", tenantId: 11015, bankStatus: "1" },activeAtms: 21, inactiveAtms: 4}
      ],
    };
  }

  componentDidMount() {
    // const token = localStorage.getItem("token")
    const token = sessionStorage.getItem("token")
    // console.log(token);
    this.props.getBanks(token);
    
    const script = document.createElement("script");
    script.src = `js/contentDatatable.js`;
    script.async = true;
    document.body.appendChild(script);
  }



  renderTableData() {
    // return this.state.banksTestList.map((bankValue, bankkey) => {
    return this.props.banks.map((bank, bankkey) => {
      // const { bank, activeAtms, inactiveAtms } = bankValue; //destructuring
      const { tenantId, bankName, acqId, bankStatus } = bank;
      return (
        <tr key={bankName}>
          <td>{tenantId}</td>
          <td>
            {" "}
            <Link to={{pathname:"/bankdash" , state:{item:bank}}} style={{ color: "black" }}>
              {bankName}
            </Link>
          </td>
          <td>{acqId}</td>
          {/* <td>{activeAtms}</td>
          <td>{inactiveAtms}</td> */}
          <td>
            {bankStatus !== 0 ? (
              <span className="approve">Active</span>
            ) : (
              <span className="reject">InActive</span>
            )}
          </td>
          <td>
            <a href="#" className="viewbtn">
              <img src="../images/icon/view.png" alt="view" />
            </a>
          </td>
        </tr>
      );
    });
  }
  

  render() {
    // console.log(this.props);
    // console.log(this.state)
    if(this.props.banks.length!==0){
      return(
        <div>
          <HeadNavFoot/>
            <main className="main-container">
              <div className="in-main">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 px-0">
                      {/*============================== Right Main Column Starts ==================================*/}
                      {/* ***************************************************************************************** */}
                      <div className="right-main-column">
                        <div className="right-col-container">
                          {/*================================ Body code starts Here ===================================*/}
                          <div className="main-content">
                            <div className="in-mcontainer">
                              {/*=============================== breadcrumb starts ===============================*/}
                              <div className="breadcrumb">
                                <ul className="lst-breadcrumb">
                                  <li>
                                    <a href="javascript:;">Banks</a>
                                  </li>
                                  <li>Banks</li>
                                </ul>
                                {/*.lst-breadcrumb*/}
                              </div>
                              {/* .breadcrumb */}
                              {/*=============================== breadcrumb ends ===============================*/}
                              {/*============================ grid container starts ============================*/}
                              <div className="grid-container">
                                {/*================ Department Master Datattables list starts ================*/}
                                <div className="grid-header">
                                  <div className="dt-header">
                                    <div className="row">
                                      <div className="col-sm-12 col-md-5">
                                        <h2>Banks</h2>
                                      </div>
                                      <div className="col-sm-12 col-md-7">
                                        <div className="dt-container">
                                          <ul className="dt-buttons">
                                            <li>
                                              <Link
                                                to="/addbank"
                                                className="dt-add button"
                                                data-toggle="tooltip"
                                                title="add"
                                              >
                                                <em>New Bank</em>
                                              </Link>
                                            </li>

                                            <li>
                                              <a
                                                href="javascript:;"
                                                className="expand-cont button"
                                                data-toggle="tooltip"
                                                title="expand"
                                              >
                                                {" "}
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        {/* dt-buttons */}
                                      </div>
                                    </div>
                                  </div>
                                  {/* .dt-header */}
                                </div>
                                <div className="datatable-box custom-table">
                                  <div>
                                    <div className="table-responsivebox">
                                      <table
                                        id="dt-sample"
                                        className="table table-hover"
                                      >
                                        <thead>
                                          {/* <tr>
                                            <th>Bank Name</th>
                                            <th>Active ATM List</th>
                                            <th>Inactive ATM List</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                          </tr> */}
                                          <tr>
                                            <th>Tenant Id</th>
                                            <th>Bank Name</th>
                                            <th>Acquirer Id</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>{this.renderTableData()}</tbody>
                                      </table>
                                    </div>
                                    {/*.table-responsivebox*/}
                                  </div>
                                  {/* content loader starts */}
                                  <div
                                    className="placeholder-content"
                                    style={{ display: "none" }}
                                  >
                                    <div className="placeholder-content_item" />
                                    <div className="placeholder-content_item" />
                                    <div className="placeholder-content_item" />
                                    <div className="placeholder-content_item" />
                                    <div className="placeholder-content_item" />
                                    <div className="placeholder-content_item" />
                                  </div>
                                  {/* placeholder-content */}
                                  {/* content loader ends */}
                                </div>
                                {/*.datatable-box*/}
                                {/*================ Department Master Datattables list ends ================*/}
                              </div>
                              {/* .grid-container */}
                              <div className="vspacer50" />
                              {/*============================ grid container ends ============================*/}
                              {/*================================ Footer code starts Here ================================*/}
                            </div>
                            {/* .in-mcontainer */}
                          </div>
                          {/* .main-content */}
                          {/*================================ Body code starts Ends ===================================*/}
                          {/* ***************************************************************************************** */}
                        </div>
                        {/* .right-col-container */}
                      </div>
                      {/*  .right-main-column */}
                      {/*============================== Right Main Column Ends ==========================================*/}
                      {/* *********************************************************************************************** */}
                    </div>
                    {/*  col-12 */}
                  </div>
                  {/* row */}
                </div>
                {/* .container-fluid  */}
              </div>

            {/* .in-main */}
          </main>
        </div>
      );
    }
    else{
      return (
        <div>
          <HeadNavFoot/>
          <div className="center">
            <div className="loading_box">
                
            </div>
          </div>
        </div>
      );
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    banks: state.banks,
    load: state.loading,
  };
};

export default connect(mapStateToProps, { getBanks })( BankList );
