import React, {Component} from 'react';
import {connect} from 'react-redux'
import HeadNavFoot from "../../HeadNavFoot";
import { Link } from "react-router-dom";
// import {getConfigs} from '../../../redux/actions/ConfigActions';
import {getBanks} from '../../../redux/actions/BankActions'

class ConfigBankList extends Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    const token = sessionStorage.getItem("token");
    // this.props.getConfigs(token);
    this.props.getBanks(token);

    // this.setState({
    //   configList : this.props.configs
    // })
    
    // console.log(this.state)
    const script = document.createElement("script");
    script.src = `js/contentDatatable.js`;
    script.async = true;
    document.body.appendChild(script);
  }


  getBankName = (tenantId) =>{
    console.log(this.props)
    var bankname = this.props.banks.map(function (bank, index) {
      if(tenantId === bank.tenantId ){
        return bank.bankName
      }
      // else{
      //   return 'Generic'
      // }
      // return (tenantId === bank.tenantId) ? bank.bankname : 'Generic' ; 
    })
    return bankname;
  }
  
  
  renderTableData() {
    // return this.state.configs.map((bankValue, bankkey) => {
  //  return this.props.configs.map((configValue, configKey) => {
  //    const { id, tenantId, property, isActive, createdTime } = configValue; //destructuring
  //    return (
  //      <tr>
  //        <td>
  //          {" "}
  //          <Link to={{pathname:"/configdetails" , state:{config:configValue}}} style={{ color: "black" }}>
  //            {id}
  //          </Link>
  //        </td>
  //        {/* <td>{tenantId}</td> */}
  //        <td>{this.getBankName(tenantId)}</td>
  //        <td>{property}</td>
  //        <td>
  //          {isActive !== "Y" ? (
  //            <span className="reject">InActive</span>
  //          ) : (
  //            <span className="approve">Active</span>
  //          )}
  //        </td>
  //        <td>{createdTime}</td>
  //        <td>
  //          <a href="#" className="viewbtn">
  //            <img src="../images/icon/view.png" alt="view" />
  //          </a>
  //        </td>
  //      </tr>
  //    );
  //  });


  return this.props.banks.map((bank, bankkey) => {
    // const { bank, activeAtms, inactiveAtms } = bankValue; //destructuring
    const { tenantId, bankName, acqId, bankStatus } = bank;
    return (
      <tr key={bankName}>
        {/* <td>{tenantId}</td> hsm:hsm ,bankname:this.getBankName(tenantId).toString().replace(/,/g,'')*/}
        <td>
          {" "}
          <Link to={{pathname:"/configs" , state:{tenant:tenantId,bankname:this.getBankName(tenantId).toString().replace(/,/g,'')}}} style={{ color: "black" }}>
            {bankName}
          </Link>
        </td>
        {/* <td>{acqId}</td> */}
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


  render(){
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
                                    <a href="#">Masters</a>
                                  </li>
                                  <li>
                                    <a href="#">Config Master List</a>
                                  </li>
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
                                        <h2>Configuration Master</h2>
                                      </div>
                                      <div className="col-sm-12 col-md-7">
                                        <div className="dt-container">
                                          <ul className="dt-buttons">
                                            <li>
                                              {/* <Link
                                                to="/addconfig"
                                                className="dt-add button"
                                                data-toggle="tooltip"
                                                title="add"
                                              >
                                                <em>New Configuration</em>
                                              </Link> */}
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
                                          <tr>
                                            <th>Bank Name</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                          {/* <td>0</td> */}
                                          <td>
                                            {" "}
                                            <Link to={{pathname:"/configs" , state:{tenant:0}}} style={{ color: "black" }}>
                                              Generic
                                            </Link>
                                          </td>
                                          {/* <td></td> */}
                                          {/* <td>{activeAtms}</td>
                                          <td>{inactiveAtms}</td> */}
                                          <td>
                                          <span className="approve">Active</span>
                                          </td>
                                          <td>
                                            <a href="#" className="viewbtn">
                                              <img src="../images/icon/view.png" alt="view" />
                                            </a>
                                          </td>
                                        </tr>
                                          {this.renderTableData()}
                                        </tbody>
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
      )
    }
    else{
      return(
        <div>
          <HeadNavFoot />
          <div className="center">
            <div className="loading_box">        
            </div>
          </div>
        </div>
      )
    }
  };

}

const mapStateToProps = (state) => {
  return {
    // configs : state.configs,
    banks : state.banks,
    load: state.loading,
  };
};

export default connect(mapStateToProps, {getBanks })( ConfigBankList );