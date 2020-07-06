import React, { Component } from 'react'
import HeadNavFoot from '../HeadNavFoot';

export default class GraphDash extends Component {

    componentDidMount() {
        // if (!this.props.load) {
        //   this.props.getBanks();
        // }
    
        const script = document.createElement("script");
        script.src = `js/graphData.js`;
        script.async = true;
        document.body.appendChild(script);
      }


    render() {
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
                        {/*============================ grid container starts ============================*/}
                        <div className="grid-container2">
                          <div className="row">                                                    
                            <div className="col-12 col-xl-6 col-lg-4 col-md-12">
                              <h1>Welcome, John Smith</h1>
                              <h3>Last Login 12 Jan 2020, 16:25</h3>
                            </div>
                            <div className="col-12 col-xl-6 col-lg-8 col-md-12 text-right mt-2">
                              <ul className="dt-buttons">
                                <li>
                                  <a href="#" className="dt-add secondary button">
                                    <em>New Bank</em>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="button1 secondary">
                                    Last 1 Week  
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="button1 secondary">
                                    Ysterday 
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="button1 secondary">
                                    Today 
                                  </a>
                                </li>
                              </ul>
                              {/* dt-buttons */}
                            </div>                                                
                          </div>
                          <div className="vspacer20" />
                          <div className="row">
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                              <div className="widget-box wb-single medium">
                                <a href="bank-list.html"> 
                                  <div className="row">
                                    <div className="col-12 text-center">
                                      <div className="number">
                                        <h2>04</h2> 
                                      </div> 
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-12 text-center">
                                      <div className="small-heading">
                                        <h3>Total Banks</h3>
                                      </div> 
                                    </div>
                                  </div>
                                </a> 
                              </div> 
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                              <div className="widget-box wb-single medium">
                                <div className="row">
                                  <div className="col-12 text-center">
                                    <div className="number">
                                      <h2>1539</h2> 
                                    </div> 
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 text-center">
                                    <div className="small-heading">
                                      <h3>Total ATM</h3>
                                    </div> 
                                  </div>
                                </div> 
                              </div> 
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                              <div className="widget-box wb-single medium">
                                <div className="row">
                                  <div className="col-12 text-center">
                                    <div className="number">
                                      <h2>479</h2> 
                                    </div> 
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 text-center">
                                    <div className="small-heading">
                                      <h3>Low Cash ATMs</h3>
                                    </div> 
                                  </div>
                                </div> 
                              </div> 
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                              <div className="widget-box wb-single medium">
                                <div className="row">
                                  <div className="col-12 text-center">
                                    <div className="number">
                                      <h2>159</h2> 
                                    </div> 
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 p-0 text-center">
                                    <div className="small-heading">
                                      <h3>Out of Services ATMs</h3>
                                    </div> 
                                  </div>
                                </div> 
                              </div> 
                            </div>
                          </div>
                          <div className="vspacer20" />
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                              <div className="widget-box1">
                                <div className="component-title6">
                                  <h3>Top 10 Transacted ATMs</h3>
                                </div> 
                                <div className="component-box">
                                  <div className="row"> 
                                    <div className="col-12">
                                      <div className="charts-samples">
                                        <canvas id="grouped-bar" />
                                      </div>{/*.charts-samples*/}
                                    </div>
                                  </div>   
                                </div>
                              </div> 
                            </div>
                            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                              <div className="widget-box1">
                                <div className="component-title6">
                                  <h3>Most 10 Failed ATMs</h3>
                                </div> 
                                <div className="component-box">
                                  <div className="row"> 
                                    <div className="col-12">
                                      <div className="charts-samples">
                                        <canvas id="grouped-bar2" />
                                      </div>{/*.charts-samples*/}  
                                    </div>
                                  </div>   
                                </div>
                              </div> 
                            </div>
                          </div>
                          <div className="vspacer20" />
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                              <div className="widget-box1">
                                <div className="component-title6">
                                  <h3>ATM Availability</h3>
                                </div> 
                                <div className="component-box">
                                  <div className="row"> 
                                    <div className="col-12">
                                      <div className="charts-samples">
                                        <canvas id="donut-chart" />
                                      </div>{/*.charts-samples*/}      
                                    </div>
                                  </div>   
                                </div>
                              </div> 
                            </div>
                            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                              <div className="widget-box1">
                                <div className="component-title6">
                                  <h3>Faulty Device Type</h3>
                                </div> 
                                <div className="component-box">
                                  <div className="row"> 
                                    <div className="col-12">
                                      <div className="charts-samples">
                                        <canvas id="donut-chart2" />
                                      </div> 
                                    </div>
                                  </div>   
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                        {/* grid container ends */} 
                        <div className="vspacer50" />
                        
                        {/*.global-footer*/}
                        {/*================================ Footer code starts Ends ================================*/}
                        {/* ***************************************************************************************** */}
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
