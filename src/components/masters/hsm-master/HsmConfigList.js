import React, { Component } from 'react'
import { Link } from "react-router-dom";
import HeadNavFoot from '../../HeadNavFoot';
import {getHsmConfigs} from '../../../redux/actions/ConfigActions'
import {getBanks} from '../../../redux/actions/BankActions'
import {connect} from 'react-redux'

class HsmConfigList extends Component {
    
  constructor(props){
    super(props);
  }

  componentDidMount(){

    const token = sessionStorage.getItem("token");
    this.props.getHsmConfigs(token);
    this.props.getBanks(token);

    this.setState({
      configList : this.props.configs
    })

    const script = document.createElement("script");
    script.src = `js/contentDatatable.js`;
    script.async = true;
    document.body.appendChild(script);
  }
  

  getBankName = (tenantId) =>{
    var bankname = this.props.banks.map(function (bank, index) {
      if(tenantId === bank.tenantId ){
        return bank.bankName
      }
    })
    return bankname;
  }

  renderTableData() {
     return this.props.hsmConfigs.map((hsm, bankkey) => {
      const { tenantId, bankName , tcpInterface,pvkTcp,zpkTcp,zpkPosTcp } = hsm;
      return (
        <tr>
          {/* <td>{this.getBankName(tenantId)}</td> */}
          <td>
            {" "}
            <Link to={{pathname:"/hsmdetails" , state:{hsm:hsm ,bankname:this.getBankName(tenantId).toString().replace(/,/g,'')}}} style={{ color: "black" }}>
            {this.getBankName(tenantId)}
            </Link>
          </td>
          <td>{tcpInterface}</td>
          {/* <td>{activeAtms}</td>  */}
          <td>{pvkTcp}</td>
          <td>{zpkTcp}</td>
          <td>{zpkPosTcp}</td>
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
      console.log(this.props.hsmConfigs)
      if(this.props.hsmConfigs.length!==0){
        return (
            <div>
                <HeadNavFoot />
      {/* ================================= Main Page Content - Start ===============================*/}
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
                                      <a href="javascript:;">Masters</a>
                                    </li>
                                    <li>
                                      HSM Configuration Master
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
                                          <h2>HSM Configuration Master</h2>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                          <div className="dt-container">
                                            <ul className="dt-buttons">
                                              <li>
                                                <Link to="/addhsmconfig" className="dt-add button" data-toggle="tooltip" title="add New HSM Configuration">
                                                  <em>New HSM Configuration</em>
                                                </Link>
                                              </li>
                                              
                                              <li>
                                                <a href="#" className="expand-cont button" data-toggle="tooltip" title="expand"> </a>
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
                                        <table id="dt-sample" className="table table-hover">
                                          <thead>
                                            <tr>
                                              <th>Bank Name</th>
                                              <th>TCP Interface</th>
                                              <th>Pin Verification Key(PVK)</th>
                                              <th>Zone Pin Key(ZPK)</th>
                                              <th>Zone Pin Key(ZPK)_POS</th>
                                              <th>Action</th>
                                            </tr>
                                          </thead>
                                          <tbody>{this.renderTableData()}</tbody>
                                        </table>
                                      </div>
                                      {/*.table-responsivebox*/}
                                    </div>
                                    {/* content loader starts */}
                                    <div className="placeholder-content" style={{display: 'none'}}>
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
              {/* .main-container */}
              {/* ============================================== Main Page Content - End ===============================================*/}

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
    }
}


const mapStateToProps = (state) => {
  return {
    hsmConfigs : state.hsmConfigs,
    banks : state.banks,
    load: state.loading,
  };
};

export default connect(mapStateToProps, { getHsmConfigs, getBanks })(HsmConfigList);
