import React, { Component } from 'react'
import HeadNavFoot from '../../HeadNavFoot'
import { addConfig } from './ConfigCalls';
import { Redirect, Link } from 'react-router-dom';
import { getBanks } from '../../../redux/actions/BankActions'
import { connect } from "react-redux";
// import './config.css';

class AddConfig extends Component {

  componentDidMount(){
    const token = sessionStorage.getItem("token")
    this.props.getBanks(token);
  }

  constructor(props) {
    super(props);
    this.state = {
      //Validation Flags 
      isRequiredFlagid: false,
      isRequiredFlagtenantId: false,
      isRequiredFlagproperty: false,
      isRequiredFlagisActive: false,
      isRequiredFlagvalue: false,

      //Required Field 
      isRequiredid: false,
      isRequiredtenantId: false,
      isRequiredproperty: false,
      isRequiredisActive: false,
      isRequiredvalue: false,


      //submitFormFlag
      isSubmitFlag : false


    }
    this.HandleChange = this.HandleChange.bind(this);
    this.submitConfigForm = this.submitConfigForm.bind(this);
  }

  HandleChange = async (e) => {
    const errorFlag = e.target.name;
    const check = e.target.value;

    console.log(errorFlag);
    if (errorFlag == "id") {
      
      console.log("Chekc value in acqId",check)
      if (check) {
        this.setState({ isRequiredid: true });
        console.log("Handle CHnage acqId-->",this.state.isRequiredid);

      } else {
        this.setState({ isRequiredid: false, })
        console.log("Handle CHnage acqId-->",this.state.isRequiredid);
      }
    }

    if (errorFlag == "tenantId") {
      console.log("Handle CHnage acqId-->",this.state.isRequiredtenantId);
      console.log("Chekc value in acqId",check)
      if (check) {
        this.setState({ isRequiredtenantId: true });

      } else {
        this.setState({ isRequiredtenantId: false, })
      }
    }

    if (errorFlag == "property") {
      console.log("Handle CHnage acqId-->",this.state.isRequiredproperty);
      console.log("Chekc value in acqId",check)
      if (check) {
        this.setState({ isRequiredproperty: true });

      } else {
        this.setState({ isRequiredproperty: false, })
      }
    }

    if (errorFlag == "isActive") {
      console.log("Handle CHnage acqId-->",this.state.isRequiredisActive);
      console.log("Chekc value in acqId",check)
      if (check) {
        this.setState({ isRequiredisActive: true });

      } else {
        this.setState({ isRequiredisActive: false, })
      }
    }

    if (errorFlag == "value") {
      console.log("Handle CHnage acqId-->",this.state.isRequiredvalue);
      console.log("Chekc value in acqId",check)
      if (check) {
        this.setState({ isRequiredvalue: true });

      } else {
        this.setState({ isRequiredvalue: false, })
      }
    }
  }

  submitConfigForm(e) {

    e.preventDefault();
    
    var configIdSubmitFlag = true;
    var tenantIdSubmitFlag = true;
    var propertySubmitFlag = true;
    var valueSubmitFlag = true;
    var isActiveSubmitFlag = true;



    
    if(this.state.isRequiredid === false ){ 
      this.setState({isRequiredFlagid: true})

      configIdSubmitFlag = false;
    }else{ 
      configIdSubmitFlag = true;
      this.setState({isRequiredFlagid: false})
    }

    if(this.state.isRequiredtenantId === false ){    
      tenantIdSubmitFlag = false; 
      this.setState({isRequiredFlagtenantId: true})
      
    }else{  tenantIdSubmitFlag = true;
      this.setState({isRequiredFlagtenantId: false})
    }

    if(this.state.isRequiredproperty === false ){   propertySubmitFlag = false;
      this.setState({isRequiredFlagproperty: true})
      
    }else{  propertySubmitFlag = true;
      this.setState({isRequiredFlagproperty: false})
    }

    if(this.state.isRequiredisActive === false ){    isActiveSubmitFlag = false;
      this.setState({isRequiredFlagisActive: true})
      
    }else{ isActiveSubmitFlag = true;
      this.setState({isRequiredFlagisActive: false})
    }

    if(this.state.isRequiredvalue === false ){    valueSubmitFlag = false;
      this.setState({isRequiredFlagvalue: true})
      
    }else{valueSubmitFlag = true;
      this.setState({isRequiredFlagvalue: false})
    }

   
    console.log("configIdSubmitFlag"+configIdSubmitFlag)
    console.log("tenantIdSubmitFlag"+tenantIdSubmitFlag)
    console.log("valueSubmitFlag"+valueSubmitFlag)
    console.log("isActiveSubmitFlag"+isActiveSubmitFlag)
    console.log("propertySubmitFlag"+propertySubmitFlag)

    // if(configIdSubmitFlag && tenantIdSubmitFlag && valueSubmitFlag && isActiveSubmitFlag && propertySubmitFlag){
    if(tenantIdSubmitFlag && valueSubmitFlag && isActiveSubmitFlag && propertySubmitFlag){
      console.log("Form Submitted")
      this.processForm(e);
    }else{
      console.log("Kindly fill all Required Fields")
    }
    
  }

  
  processForm() {
    const json = {
      // id: this.refs.id.value,
      tenantId: this.refs.tenantId.value,
      property: this.refs.property.value,
      isActive: this.refs.isActive.value,
      value: this.refs.value.value
    }
    addConfig(json).then(res=>{
      if(res.status===200){
        alert("Configuration Added")
        this.setState({
          isPosted : true
        })
      }
      else{
        alert("Error Occured")
      }
    })

    console.log(json)
  }

  render() {

    const tenants = this.props.banks.map((bank,i) =>{
      return(
        <option value={bank.tenantId}>{bank.bankName}</option>
      )
    })
    
    console.log(this.props)
    if(this.props.banks.length!==0){
    return (
      <div>
        {this.state.isPosted && <Redirect to="/configs" />}
        <HeadNavFoot />
        <div className="page-wrapper">

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
                                  Masters
                            </li>
                                <li>
                                  Configuration Master
                            </li>
                                <li>
                                  Add Configuration
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
                                      <h2>Add Configuration</h2>
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
                                      <div className="ux-component">
                                        <label className="field-active"><em>*</em>Configuration ID</label>
                                        <input type="text" ref="id" name="id" id="id" placeholder="Configuration ID" disabled />
                                        <em className="field-message"> </em>
                                      </div>
                                      {/* {this.state.isRequiredFlagid ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      } */}

                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      {/* <div className="ux-component"> */}
                                        {/* <label className="field-active"><em>*</em>Tenant ID</label> */}
                                        {/* <input type="text" ref="tenantId" name="tenantId" id="tenantId" placeholder="Tenant ID" onChange={this.HandleChange} required /> */}
                                        {/* <label className="field-active" className="label-top"><em>*</em>Bank Name</label>
                                        <select ref="tenantId" name="tenantId" id="tenantId" onChange={this.HandleChange}
                                          required >
                                          {tenants}
                                        </select>
                                        <em className="field-message"> </em>
                                      </div> */}
                                      <div className="ux-component">
                                        <label className="field-active" className="label-top"><em>*</em>Bank Name</label>
                                        <select ref="tenantId" name="tenantId" id="tenantId" onChange={this.HandleChange}
                                          required >
                                            <option value="">Select</option>
                                            <option value={0}>Generic</option>
                                          {tenants}
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagtenantId ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                    <div className="col-12 col-sm-12 col-xl-3 col-lg-4 col-md-6">
                                      <div className="ux-component">
                                        <label className="field-active"><em>*</em>Property</label>
                                        <input type="text" ref="property" name="property" id="property" placeholder="Property" onChange={this.HandleChange} required />
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
                                      <div className="ux-component">
                                        <label className="field-active"><em>*</em>Value</label>
                                        <input type="text" ref="value" name="value" id="value" placeholder="Value" onChange={this.HandleChange} required />
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
                                      <div className="ux-component">
                                        <label className="field-active" className="label-top"><em>*</em>Status</label>
                                        <select ref="isActive" name="isActive" id="isActive" onChange={this.HandleChange}
                                          required >
                                          <option value="">Select</option>
                                          <option value="Y">Active</option>
                                          <option value="N">Inactive</option>
                                        </select>
                                        <u />
                                        <em className="field-message"> </em>
                                      </div>
                                      {this.state.isRequiredFlagisActive ?

                                        <div style={{
                                          color: "red", textAlign: "left",
                                          display: "block",
                                          fontSize: "0.8rem"
                                        }}>This Field is Required</div> : null
                                      }
                                    </div>
                                  </div>
                                  <div className="grid-footer mar20 pb-0 mt-4">
                                    <button className="button float-right" onClick={this.submitConfigForm}>Submit</button>
                                    <Link to="/configs" className="button secondary">Cancel</Link>
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
      </div>
    )
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
  };
};

export default connect(mapStateToProps, { getBanks })(AddConfig)
