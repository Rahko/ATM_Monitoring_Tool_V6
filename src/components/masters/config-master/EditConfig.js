import React, { Component } from 'react'
import HeadNavFoot from '../../HeadNavFoot'
import { Link, Redirect } from 'react-router-dom'
import { addConfig } from './ConfigCalls'


export default class EditConfig extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPosted : false,
      config: this.props.location.state.config,
      //Validation Flags 
      isRequiredFlagproperty: false,
      isRequiredFlagstatus: false,
      isRequiredFlagvalue: false,

      //Required Field 
      isRequiredproperty: false,
      isRequiredstatus: false,
      isRequiredvalue: false,


      //submitFormFlag
      isSubmitFlag: false
    }
    this.HandleChange = this.HandleChange.bind(this);
    this.submitConfigForm = this.submitConfigForm.bind(this);

  }

  HandleChange = async (e) => {
    const errorFlag = e.target.name;
    const check = e.target.value;

    console.log(errorFlag);
    
    //if the field is touched and changes is done 
    //then if the field is touched and have some values show remove error message

    if (errorFlag == "property") {
      console.log("Handle CHnage acqId-->", this.state.isRequiredproperty);
      console.log("Chekc value in acqId", check)
      //if check field have some values in it then remove error message
      if (check) {
        this.setState({ isRequiredproperty: false });

      } else {
        //this isrrequiredproperty is flag for error message flag.
        this.setState({ isRequiredproperty: true })
      }
    }

    if (errorFlag == "status") {
      console.log("Handle CHnage acqId-->", this.state.isRequiredstatus);
      console.log("Chekc value in acqId", check)
      if (check) {
        this.setState({ isRequiredstatus: false });

      } else {
        this.setState({ isRequiredstatus: true })
      }
    }


    
    if (errorFlag == "value") {
      console.log("Handle CHnage acqId-->", this.state.isRequiredvalue);
      console.log("Chekc value in acqId", check)
      if (check) {
        this.setState({ isRequiredvalue: false });

      } else {
        this.setState({ isRequiredvalue: true })
      }
    }
    
  }

  submitConfigForm(e) {

    e.preventDefault();

    const config = this.state.config;

    var propertySubmitFlag = false;
    var valueSubmitFlag = false;
    var statusSubmitFlag = false;

    var flag = false;

    //this isRequiredproperty is false means it has some values in it and error message is to be removed.
    if (this.state.isRequiredproperty === false) {
      //this flag is set true because to call final process method 
      flag = true;
      this.setState({ isRequiredFlagproperty: false })

    } else {
      flag = false;
      this.setState({ isRequiredFlagproperty: true })
    }

    //
    if (this.state.isRequiredstatus === false) {
      flag = true;
      this.setState({ isRequiredFlagstatus: false })

    } else {
      flag = false;
      this.setState({ isRequiredFlagstatus: true })
    }
  
    //
    if (this.state.isRequiredvalue === false) {
      flag = true;
      this.setState({ isRequiredFlagvalue: false })

    } else {
      flag = false;
      this.setState({ isRequiredFlagvalue: true })
    }
  

    if (flag) {
      //call process method
      console.log("form submitted");
      this.processForm()
    } else{
      //give final console.log
      console.log("Fill all required fields");
    }





  }


  processForm() {
    const json = {
      id: this.refs.id.value,
      tenantId: this.refs.tenantId.value,
      property: this.refs.property.value,
      value: this.refs.value.value,
      createdBy: this.refs.createdBy.value,
      createdTime: this.refs.createdTime.value,
      updatedBy: this.refs.updatedBy.value,
      updatedTime: this.refs.updatedTime.value,
      isActive: this.refs.status.value

    }
    addConfig(json).then(res=>{
      if(res.status===200){
        alert("Configuration Updated")
        this.setState({
          isPosted : true
        })
      }
      else{
        alert("Error Occurred.")
      }
    })

    console.log(json)
  }


  
  render() {
    const config = this.state.config;
    return (
      
      <div className="page-wrapper">
        {this.state.isPosted && <Redirect to="/configs" />}
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
                                <a href="#">Edit Configuration</a>
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
                                    <h2>Edit Configuration</h2>
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
                                    <div className="ux-component ux-readonly ux-disabled">
                                      <label className="label-top"><em>*</em>Configuration ID</label>
                                      <input type="text" onChange={this.HandleChange} ref="id" name="id" id="id" required defaultValue={config.id} disabled />
                                      <em className="field-message"> </em>
                                    </div>
                                    
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component  ux-readonly ux-disabled">
                                      <label className="label-top"><em>*</em>Tenant ID</label>
                                      <input type="text" onChange={this.HandleChange} ref="tenantId" name="tenantId" id="tenantId" required defaultValue={config.tenantId} disabled />
                                      <em className="field-message"> </em>
                                    </div>
                                    
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component  ux-edit">
                                      <label className="label-top"><em>*</em>Property</label>
                                      <input type="text" onChange={this.HandleChange} ref="property" name="property" id="property" required defaultValue={config.property} />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredFlagproperty ?

                                      <div style={{
                                        color: "red", textAlign: "left",
                                        display: "block",
                                        fontSize: "0.8rem"
                                      }}>This Field is Required</div> : null
                                    }
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component ux-edit">
                                      <label className="label-top"><em>*</em>Value</label>
                                      <input type="text" onChange={this.HandleChange} ref="value" name="value" id="value" required defaultValue={config.value} />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredFlagvalue ?

                                      <div style={{
                                        color: "red", textAlign: "left",
                                        display: "block",
                                        fontSize: "0.8rem"
                                      }}>This Field is Required</div> : null
                                    }
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component  ux-readonly ux-disabled">
                                      <label className="label-top"><em>*</em>Created By</label>
                                      <input type="text" onChange={this.HandleChange} ref="createdBy" name="createdBy" id="createdBy" defaultValue={config.createdBy} disabled/>
                                      <em className="field-message"> </em>
                                    </div>
                                    
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component  ux-readonly ux-disabled">
                                      <label className="label-top"><em>*</em>Created Time</label>
                                      <input type="text" onChange={this.HandleChange} ref="createdTime" name="createdTime" id="createdTime" defaultValue={config.createdTime} disabled />
                                      <em className="field-message"> </em>
                                    </div>
                                    
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component  ux-readonly ux-disabled">
                                      <label className="label-top"><em>*</em>Updated By</label>
                                      <input type="text" onChange={this.HandleChange} ref="updatedBy" name="updatedBy" id="updatedBy" defaultValue={config.updatedBy} disabled/>
                                      <em className="field-message"> </em>
                                    </div>
                                    
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component  ux-readonly ux-disabled">
                                      <label className="label-top"><em>*</em>Updated Time</label>
                                      <input type="text" onChange={this.HandleChange} ref="updatedTime" name="updatedTime" id="updatedTime" required defaultValue={config.updatedTime} disabled />
                                      <em className="field-message"> </em>
                                    </div>
                                    
                                  </div>
                                  <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                    <div className="ux-component  ux-edit">
                                      <label className="label-top"><em>*</em>Status</label>
                                      <select ref="status" name="status" id="status" defaultValue={config.isActive} onChange={this.HandleChange} required>
                                        <option value="">Select</option>
                                        <option value="Y">Active</option>
                                        <option value="N">Inactive</option>
                                      </select>
                                      <u />
                                      <em className="field-message"> </em>
                                    </div>
                                    {this.state.isRequiredFlagstatus ?

                                      <div style={{
                                        color: "red", textAlign: "left",
                                        display: "block",
                                        fontSize: "0.8rem"
                                      }}>This Field is Required</div> : null
                                    }
                                  </div>
                                </div>
                                <div className="grid-footer mar20 pb-0 mt-4">
                                  <button className="button float-right" onClick={this.submitConfigForm}>Updated</button>
                                  <Link to={{ pathname: "/configdetails", state: { config: config } }} className="button secondary">Cancel</Link>
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
