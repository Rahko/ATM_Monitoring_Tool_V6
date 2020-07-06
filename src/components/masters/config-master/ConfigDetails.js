import React,{Component} from 'react';
import HeadNavFoot from '../../HeadNavFoot';
import {Link} from 'react-router-dom';

export default class ConfigDetails extends React.Component{

    constructor(props){
        super(props)
        this.state={
            config : this.props.location.state.config
        }
    }


    render(){
      const config = this.state.config;
        return(
            <div className="page-wrapper">
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
                                    <a href="#">Masters</a>
                                  </li>
                                  <li>
                                    <a href="#">Configuration Master</a>
                                  </li>
                                  <li>
                                    <a href="#">View Configuration</a> 
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
                                      <div className="col-sm-12 col-md-12">
                                        <h2>View Configuration</h2>
                                      </div>
                                      <div className="col-sm-12 col-md-12">
                                      </div>
                                    </div>
                                  </div>
                                  {/* .dt-header */}
                                </div>
                                <div className="role-container">
                                  <div className="role-content">
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top"><em>*</em>Configuration ID</label>
                                          <input type="text" ref="id" defaultValue={config.id} disabled /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component  ux-readonly">
                                          <label className="label-top"><em>*</em>Tenant ID</label>
                                          <input type="text" ref="tenantId" defaultValue={config.tenantId} disabled /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top"><em>*</em>Property</label>
                                          <input type="text" ref="property" defaultValue={config.property} disabled /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly">
                                          <label className="label-top"><em>*</em>Value</label>
                                          <input type="text" ref="value" defaultValue={config.value} disabled /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component  ux-readonly">
                                          <label className="label-top"><em>*</em>Created By</label>
                                          <input type="text" ref="createdBy" defaultValue={config.createdBy} disabled />  
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component  ux-readonly">
                                          <label className="label-top"><em>*</em>Created Time</label>
                                          <input type="text" ref="createdTime" defaultValue={config.createdTime} disabled /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row"> 
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component  ux-readonly">
                                          <label className="label-top"><em>*</em>Updated By</label>
                                          <input type="text" ref="updatedBy" defaultValue={config.updatedBy} disabled /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component  ux-readonly">
                                          <label className="label-top"><em>*</em>Updated Time</label>
                                          <input type="text" ref="updatedTime" defaultValue={config.updatedTime} disabled /> 
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                        <div className="ux-component ux-readonly ">
                                          <label className="label-top"><em>*</em>Status</label>
                                          <select defaultValue={config.isActive} ref="status" >
                                            <option value="Select">Select</option>
                                            <option value="Y" >Active</option>
                                            <option value="N">Inactive</option>
                                          </select>
                                          <u />
                                          <em className="field-message"> </em>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid-footer mar20 pb-0 mt-4">
                                      <Link to={{pathname : "/editconfig", state :{config:config} }} className="button float-right" >Edit</Link>
                                      <Link to="/configs" className="button secondary" >Cancel</Link>
                                    </div>
                                  </div>
                                </div>
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
}